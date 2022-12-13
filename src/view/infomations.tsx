import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { util } from '@sentre/senhub'

import { Col, Row } from 'antd'

import { AppState } from 'model'
import { useOracles } from 'hooks/useOracles'
import { useMyLiquidity } from 'hooks/pool/useMyLiquidity'
import { useBestPoolAddress } from 'hooks/pool/useBestPoolData'

import CardValue from 'components/cardValue'

const Infomations = () => {
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
    <Row gutter={[8, 8]}>
      <Col xs={24} md={12}>
        <Row gutter={[6, 6]}>
          <Col span={24}>
            <CardValue
              bodyStyle={{ padding: 8 }}
              style={{
                borderRadius: '8px 0 0 0',
                background: '#0000003b',
                boxShadow: ' 0 0 40px -20px #0a0a0a inset',
              }}
              label="TOTAL VALUE LOCK"
              value={<span>{util.numeric(tvl).format('$0,0.00[00]a')}</span>}
            />
          </Col>
          <Col span={24}>
            <CardValue
              bodyStyle={{ padding: 8 }}
              style={{
                borderRadius: '0 0 0 8px',
                background: '#0000003b',
                boxShadow: ' 0 0 40px -20px #0a0a0a inset',
              }}
              label="TOTAL POOLS"
              value={<span>{Object.keys(pools).length}</span>}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={24} lg={12}>
        <CardValue
          bodyStyle={{ padding: 8 }}
          style={{
            borderRadius: '0 8px 8px 0',
            background: '#0000003b',
            boxShadow: ' 0 0 40px -20px #0a0a0a inset',
          }}
          label="YOUR POSITION"
          value={<span>${util.numeric(myLiquidity).format('0,0.00[00]')}</span>}
        />
      </Col>
    </Row>
  )
}

export default Infomations
