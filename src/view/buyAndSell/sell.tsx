import { useState } from 'react'
import { useSelector } from 'react-redux'
import { notifyError, notifySuccess, MintAvatar } from '@sen-use/app'

import { Button, Card, Col, InputNumber, Row, Space, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'

import configs from 'configs'
import { AppState } from 'model'
import { useLucid } from 'hooks/useLucid'
import { useOracles } from 'hooks/useOracles'
import { useLucidOracles } from 'hooks/useLucidOracles'
import { usePoolData } from 'hooks/pool/usePoolData'
import Selection from 'components/selection'

type BuyProps = {
  poolAddress: string
}

const {
  sol: { baseMint },
} = configs

const Sell = ({ poolAddress }: BuyProps) => {
  const [amount, setAmount] = useState('0')
  const [receive, setReceive] = useState('0')
  const [loading, setLoading] = useState(false)
  const pools = useSelector((state: AppState) => state.pools)
  const { mint } = pools[poolAddress]
  const mintAddress = mint.toBase58()
  const lucid = useLucid()
  const { decimalizeMintAmount, undecimalizeMintAmount } = useOracles()
  const { calcOutGivenInSwap } = useLucidOracles()
  const poolData = usePoolData(poolAddress)

  const { balance } = useAccountBalanceByMintAddress(mintAddress)

  const onBuy = async () => {
    setLoading(true)
    try {
      console.log(amount, 'so luong amount')
      const amountBN = await decimalizeMintAmount(amount, baseMint)
      const { txId } = await lucid.buy(poolAddress, amountBN, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  const onChangeAmount = async (amount: string) => {
    setAmount(amount)
    const { balance, stableBalance, fee, stableMint, mint } = poolData
    const balanceNum = await undecimalizeMintAmount(balance, mint)
    const stableNum = await undecimalizeMintAmount(stableBalance, stableMint)
    // temp to get decimal
    const numSwapFee = await undecimalizeMintAmount(fee, stableMint)
    const receiveAmount = calcOutGivenInSwap(
      Number(amount),
      Number(balanceNum),
      Number(stableNum),
      Number(numSwapFee),
    )
    setReceive(`${receiveAmount}`)
  }

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Card
              bordered={false}
              style={{
                borderRadius: '4px 4px 0 0',
                background: 'rgb(20 20 20 / 10%)',
                boxShadow: 'unset',
              }}
            >
              <Row align="middle" justify="end">
                <Col>
                  <Space
                    onClick={() => setAmount(balance.toString())}
                    style={{ cursor: 'pointer' }}
                  >
                    <Typography.Text
                      type="secondary"
                      style={{ textDecoration: 'underline' }}
                    >
                      Available:
                    </Typography.Text>
                    <Typography.Text
                      style={{ color: '#000', textDecoration: 'underline' }}
                    >
                      {balance}
                    </Typography.Text>
                  </Space>
                </Col>
                <Col span={24} />
                <Col span={4}>
                  <Selection
                    mintAvatar={<MintAvatar mintAddress={mintAddress} />}
                    selectedMint={mintAddress}
                  />
                </Col>
                <Col span={20}>
                  <InputNumber
                    bordered={false}
                    style={{
                      color: '#000',
                      fontSize: 32,
                      textAlign: 'right',
                    }}
                    value={amount}
                    onChange={(e) => onChangeAmount(e || '')}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24} style={{ position: 'relative', minHeight: 2 }}>
            <IonIcon
              style={{
                position: 'absolute',
                color: '#000000',
                borderRadius: 99,
                border: '2px solid #e2f8f4',
                left: '50%',
                background: '#c9e3d9',
                top: -8,
                zIndex: 99,
              }}
              name="arrow-down-outline"
            />
          </Col>
          <Col span={24}>
            <Card
              bordered={false}
              style={{
                borderRadius: '0 0 4px 4px',
                background: 'rgb(20 20 20 / 10%)',
                boxShadow: 'unset',
              }}
            >
              <Row gutter={[24, 24]} align="middle">
                <Col span={4}>
                  <Selection
                    mintAvatar={<MintAvatar mintAddress={baseMint} />}
                    selectedMint={baseMint}
                  />
                </Col>
                <Col span={20} style={{ textAlign: 'right' }}>
                  <Typography.Text
                    style={{
                      color: '#000',
                      fontSize: 32,
                      paddingRight: 10,
                      paddingLeft: 32,
                    }}
                    ellipsis
                  >
                    {receive}
                  </Typography.Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Button loading={loading} type="primary" block onClick={onBuy}>
          Buy
        </Button>
      </Col>
    </Row>
  )
}

export default Sell
