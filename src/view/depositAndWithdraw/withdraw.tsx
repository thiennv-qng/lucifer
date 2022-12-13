import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  notifyError,
  notifySuccess,
  MintSymbol,
  MintAvatar,
} from '@sen-use/app'

import { Button, Card, Col, InputNumber, Row, Space, Typography } from 'antd'

import { AppState } from 'model'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { useLucid } from 'hooks/useLucid'
import { useOracles } from 'hooks/useOracles'
import { usePoolAmounts } from 'hooks/pool/usePoolAmounts'
import { util } from '@sentre/senhub/dist'

const Withdraw = ({ poolAddress }: { poolAddress: string }) => {
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const pools = useSelector((state: AppState) => state.pools)
  const { lptMint, baseMint, mint } = pools[poolAddress]
  const { balance } = useAccountBalanceByMintAddress(lptMint.toBase58())
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()
  const {
    lptAmount,
    stableAmount,
    amount: poolAmount,
  } = usePoolAmounts(poolAddress)
  const ratio = useMemo(() => Number(amount) / lptAmount, [amount, lptAmount])
  const usdReceive = stableAmount * ratio
  const tokenReceive = poolAmount * ratio

  const onWithdraw = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, lptMint)
      const { txId } = await lucid.removeLiquidity(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Card
          bordered={false}
          style={{
            borderRadius: 4,
            background: 'rgb(20 20 20 / 10%)',
            boxShadow: 'unset',
          }}
        >
          <Row justify="end">
            <Col>
              <Space
                onClick={() => setAmount(balance.toString())}
                size={6}
                style={{ cursor: 'pointer' }}
              >
                <Typography.Text
                  type="secondary"
                  style={{ textDecoration: 'underline' }}
                >
                  Available:
                </Typography.Text>
                <Typography.Text
                  style={{ color: '#000000', textDecoration: 'underline' }}
                >
                  {util.numeric(balance).format('0,0')}
                </Typography.Text>
              </Space>
            </Col>
            <Col span={24}>
              <InputNumber
                bordered={false}
                onChange={(e) => setAmount(e || '')}
                style={{
                  fontSize: 35,
                  fontWeight: 700,
                  textAlign: 'right',
                  color: '#000000',
                }}
                value={amount}
              />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Typography.Title level={5} style={{ color: '#000000' }}>
          You will receive
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Card
              bordered={false}
              style={{
                borderRadius: '4px 0 0 4px',
                background: 'rgb(20 20 20 / 10%)',
                boxShadow: 'unset',
              }}
            >
              <Space direction="vertical">
                <Space>
                  <MintAvatar mintAddress={baseMint.toBase58()} />
                  <Typography.Text style={{ color: '#000000' }}>
                    <MintSymbol mintAddress={baseMint.toBase58()} />
                  </Typography.Text>
                </Space>
                <Typography.Text style={{ color: '#000000' }}>
                  {util.numeric(usdReceive).format('0,0.[000]')}
                </Typography.Text>
              </Space>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              bordered={false}
              style={{
                borderRadius: '0 4px 4px 0',
                background: 'rgb(20 20 20 / 10%)',
                boxShadow: 'unset',
              }}
              bodyStyle={{ textAlign: 'right' }}
            >
              <Space direction="vertical">
                <Space>
                  <Typography.Text style={{ color: '#000000' }}>
                    <MintSymbol mintAddress={mint.toBase58()} />
                  </Typography.Text>
                  <MintAvatar mintAddress={mint.toBase58()} />
                </Space>
                <Typography.Text style={{ color: '#000000' }}>
                  {util.numeric(tokenReceive).format('0,0.[000]')}
                </Typography.Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Button block loading={loading} onClick={onWithdraw} type="primary">
          Withdraw
        </Button>
      </Col>
    </Row>
  )
}

export default Withdraw
