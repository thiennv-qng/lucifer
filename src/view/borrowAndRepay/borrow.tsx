import { useState } from 'react'
import { util } from '@sentre/senhub'
import {
  MintAvatar,
  MintSymbol,
  notifyError,
  notifySuccess,
} from '@sen-use/app'

import { Button, Card, Col, InputNumber, Row, Space, Typography } from 'antd'

import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { usePoolData } from 'hooks/pool/usePoolData'
import { usePoolPrices } from 'hooks/pool/usePoolPrices'
import { useLucid } from 'hooks/useLucid'
import { useOracles } from 'hooks/useOracles'

const Borrow = ({ poolAddress }: { poolAddress: string }) => {
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const { lptMint, mint } = usePoolData(poolAddress)
  const poolPrices = usePoolPrices(poolAddress)
  const { balance } = useAccountBalanceByMintAddress(lptMint.toBase58())
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()

  const onWithdraw = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, lptMint)
      const { txId } = await lucid.borrow(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Row>
          <Col flex="auto">
            <Typography.Text style={{ color: '#292321', fontSize: 12 }}>
              You don't have to fear liquidation risk
            </Typography.Text>
          </Col>
          <Col>
            <Typography.Text style={{ color: '#000000' }}>
              Available: {util.numeric(balance).format('0,0.[000]')}
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Card
          bordered={false}
          style={{ boxShadow: 'unset', background: 'rgb(20 20 20 / 5%)' }}
        >
          <Row align="middle" wrap={false}>
            <Col flex="auto">
              <Button onClick={() => setAmount(balance.toString())} ghost>
                Max
              </Button>
            </Col>
            <Col>
              <Row wrap={false} align="middle">
                <Col flex="auto">
                  <InputNumber
                    controls={false}
                    bordered={false}
                    onChange={(e) => setAmount(e || '')}
                    style={{
                      color: '#000000',
                      fontSize: 30,
                      fontWeight: 700,
                      width: '100%',
                      textAlign: 'right',
                    }}
                    value={amount}
                  />
                </Col>
                <Col>
                  <Card
                    style={{ boxShadow: 'unset', borderRadius: 8 }}
                    bordered={false}
                    bodyStyle={{ padding: 4 }}
                  >
                    <Space>
                      <MintAvatar mintAddress={mint} size={24} />
                      <MintSymbol mintAddress={mint} />
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Typography.Title level={5} style={{ color: '#000000' }}>
          Review
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Row>
          <Col flex="auto">
            <Typography.Text style={{ color: '#000000' }}>
              Total Borrow
            </Typography.Text>
          </Col>
          <Col>
            <Typography.Title level={4} style={{ color: '#000000' }}>
              {util
                .numeric((Number(amount) * poolPrices.lptPrice) / 2)
                .format('$0,0.[000]')}
            </Typography.Title>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Button block loading={loading} onClick={onWithdraw} type="primary">
          Borrow
        </Button>
      </Col>
    </Row>
  )
}

export default Borrow
