import { useSelector } from 'react-redux'
import { util } from '@sentre/senhub'

import { Card, Col, Divider, Row, Space, Typography } from 'antd'
import { MintAvatar, MintName, MintSymbol } from '@sen-use/app'
import CardContent from './cardContent'

import { AppState } from 'model'
import useAPR from 'hooks/pool/useAPR'
import { usePoolTvl } from 'hooks/pool/usePoolTvl'
import { usePoolFees } from 'hooks/pool/usePoolFees'
import { useMyLiquidity } from 'hooks/pool/useMyLiquidity'
import { usePoolAddressSelected } from 'view/container'
import { getRandomColor } from 'utils'

type PoolCardProps = { rank: number; poolAddress: string }

const PoolCard = ({ rank, poolAddress }: PoolCardProps) => {
  const [, setPoolAddress] = usePoolAddressSelected()
  const poolData = useSelector((state: AppState) => state.pools[poolAddress])
  const fee = usePoolFees(poolAddress)
  const tvl = usePoolTvl(poolAddress)
  const apr = useAPR(poolAddress)
  const myLiquidity = useMyLiquidity(poolAddress)

  return (
    <Card
      bordered={false}
      className="pool-card"
      style={{ borderRadius: 6, padding: 0.8, boxShadow: 'unset' }}
      onClick={() => setPoolAddress(poolAddress)}
      bodyStyle={{
        padding: 0,
        borderRadius: 8,
        background: '#000514',
        overflow: 'hidden',
      }}
    >
      <Row gutter={[8, 8]} align="middle">
        {/* Card content */}
        <Col span={24}>
          <Card
            bordered={false}
            style={{
              borderRadius: '4px 4px 0 0',
              background: '#14142c8c',
              boxShadow: '0 0 8px -5px #14142c',
            }}
            bodyStyle={{
              padding: 12,
            }}
          >
            <Row gutter={[24, 24]}>
              <Col flex="auto">
                <Space>
                  <Typography.Title level={5}>#{rank + 1}</Typography.Title>
                  <Divider style={{ margin: 0 }} type="vertical" />
                  <MintAvatar
                    mintAddress={poolData.mint.toBase58()}
                    size={24}
                  />
                  <Space direction="vertical" size={0}>
                    <Typography.Text>
                      <MintName mintAddress={poolData.mint.toBase58()} />
                    </Typography.Text>
                    <Typography.Text className="symbol">
                      <MintSymbol mintAddress={poolData.mint.toBase58()} />
                    </Typography.Text>
                  </Space>
                </Space>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <CardContent
                  size={0}
                  labelStyle={{ fontSize: 12 }}
                  primary
                  label="APY"
                  value={util.numeric(apr).format('0.00[00]%')}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <Row gutter={[2, 2]}>
            <Col span={24}>
              <Card
                bordered={false}
                style={{
                  borderRadius: 0,
                  background: '#59595e33',
                  boxShadow: '0 0 8px -5px #14142c',
                  backdropFilter: 'blur(50px)',
                }}
                bodyStyle={{ padding: 12 }}
              >
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <CardContent
                      label="Total Fee"
                      value={util.numeric(fee.totalFee).format('0,0.00[00]')}
                      mintAddress={poolData.baseMint.toBase58()}
                    />
                  </Col>
                  <Col span={12}>
                    <CardContent
                      label="Total Value Locked"
                      value={util.numeric(tvl).format('0,0.00[00]a')}
                      mintAddress={poolData.baseMint.toBase58()}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Card
                bordered={false}
                style={{
                  borderRadius: '0 0 4px 4px',
                  background: '#59595e33',
                  boxShadow: '0 0 8px -5px #14142c',
                  backdropFilter: 'blur(50px)',
                }}
                bodyStyle={{ padding: 12 }}
              >
                <CardContent
                  label="Your Liquidity"
                  value={util.numeric(Number(myLiquidity)).format('0,0.00[00]')}
                  mintAddress={poolData.baseMint.toBase58()}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="uni-after-effect">
        <div
          style={{
            background: `radial-gradient(
                circle,
                rgba(
                    ${getRandomColor()},
                    ${getRandomColor()},
                    ${getRandomColor()},
                    0.2
                  )
                  41%,
                rgba(255, 255, 255, 0) 100%
              )`,
          }}
        />
      </div>

      <div className="uni-before-effect">
        <div
          style={{
            background: `radial-gradient(
                circle,
                rgba(
                    ${getRandomColor()},
                    ${getRandomColor()},
                    ${getRandomColor()},
                    0.2
                  )
                  41%,
                rgba(255, 255, 255, 0) 100%
              )`,
          }}
        />
      </div>
    </Card>
  )
}

export default PoolCard
