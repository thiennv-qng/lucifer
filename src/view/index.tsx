import { useCallback, useEffect, useState } from 'react'
import { util } from '@sentre/senhub'
import { createGlobalState } from 'react-use'
import { useSelector } from 'react-redux'

import { Col, Row, Space, Typography } from 'antd'
import CardValue from 'components/cardValue'
import JoinPool from 'components/joinPool'

import { AppState } from 'model'
import { useBestPoolAddress } from 'hooks/pool/useBestPoolData'
import { useMyLiquidity } from 'hooks/pool/useMyLiquidity'
import { useOracles } from 'hooks/useOracles'
import Pools from './pools'
import PoolWatcher from './watcher/pool.watcher'

import './index.less'

export const usePoolAddressSelected = createGlobalState<string>()

const View = () => {
  const pools = useSelector((state: AppState) => state.pools)
  const betsPool = useBestPoolAddress()
  const [tvl, setTvl] = useState('0')
  const myLiquidity = useMyLiquidity(betsPool)
  const { undecimalize } = useOracles()

  const calcTVL = useCallback(() => {
    let tvl = 0
    for (const pool of Object.values(pools)) {
      tvl += Number(undecimalize(pool.stableBalance, 9)) * 2
    }
    setTvl(tvl.toString())
  }, [pools, undecimalize])
  useEffect(() => {
    calcTVL()
  }, [calcTVL])

  return (
    <Row gutter={[0, 48]}>
      <Col span={24}>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={8}>
            <Space direction="vertical">
              <Typography.Title level={2} style={{ color: '#ABFC47' }}>
                THE AUTO
              </Typography.Title>
              <Typography.Text>
                A single deposit generates yield from Hakapool positions, the
                highest quality yield sources in the Sentre ecosystem.
              </Typography.Text>
            </Space>
          </Col>
          <Col xs={24} lg={8}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <CardValue
                  label="TOTAL VALUE LOCK"
                  value={
                    <span>{util.numeric(tvl).format('$0,0.00[00]a')}</span>
                  }
                />
              </Col>
              <Col span={24}>
                <CardValue
                  label="TOTAL POOLS"
                  value={<span>{Object.keys(pools).length}</span>}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={8}>
            <CardValue
              label="YOUR POSITION"
              value={
                <span>${util.numeric(myLiquidity).format('0,0.00[00]')}</span>
              }
              // action={<ActionClaim />}
            />
          </Col>
        </Row>
      </Col>

      {/* Join Pool */}
      <Col span={24}>
        <JoinPool />
      </Col>

      <Col span={18}>
        <Pools />
      </Col>
      <Col span={6}>
        <Space direction="vertical" size={12} style={{ textAlign: 'right' }}>
          <Space direction="vertical" size={4}>
            <Typography.Title level={5} style={{ color: '#ABFC47' }}>
              CREATE LIQUIDIY POOL
            </Typography.Title>
            <Typography.Title level={4} style={{ color: '#ABFC47' }}>
              NOT HARDER
            </Typography.Title>
          </Space>
          <Typography.Text>
            A single deposit generates yield from Hakapool positions, the
            highest quality yield sources in the Sentre ecosystem.
          </Typography.Text>
        </Space>
      </Col>
      <Col span={24} />
      <PoolWatcher />
    </Row>
  )
}

export default View
