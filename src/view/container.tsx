import { useCallback, useEffect, useState } from 'react'
import { util } from '@sentre/senhub'
import { createGlobalState } from 'react-use'
import { useSelector } from 'react-redux'

import { Col, Row, Typography } from 'antd'
import CardValue from 'components/cardValue'
import Pools from './pools'

import { AppState } from 'model'
import { useBestPoolAddress } from 'hooks/pool/useBestPoolData'
import { useMyLiquidity } from 'hooks/pool/useMyLiquidity'
import { useOracles } from 'hooks/useOracles'
import PoolWatcher from './watcher/pool.watcher'

import './index.less'

export const usePoolAddressSelected = createGlobalState<string>()

const Container = () => {
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
    <Row gutter={[0, 48]} style={{ marginTop: 56 }}>
      <Col span={24}>
        <Row gutter={[12, 12]}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Typography.Title level={1}>
              Solution for Liquidity Provider
            </Typography.Title>
          </Col>
          <Col span={24} style={{ height: 24 }} />
          <Col span={8}>
            <CardValue
              label="TOTAL VALUE LOCK"
              value={<span>{util.numeric(tvl).format('$0,0.00[00]a')}</span>}
            />
          </Col>
          <Col span={8}>
            <CardValue
              special
              label="TOTAL POOLS"
              value={<span>{Object.keys(pools).length}</span>}
            />
          </Col>
          <Col span={8}>
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
      <Col span={24}>
        <Pools />
      </Col>
      <Col span={24} />
      <PoolWatcher />
    </Row>
  )
}

export default Container
