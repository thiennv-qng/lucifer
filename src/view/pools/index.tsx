import { useSelector } from 'react-redux'

import { Col, Empty, Image, Row } from 'antd'
import PoolCard from './poolCard'

import { AppState } from 'model'

import IcoRank from 'static/images/ico-rank.svg'

const Pools = () => {
  const pools = useSelector((state: AppState) => state.pools)

  if (!Object.keys(pools).length) return <Empty />

  return (
    <Row gutter={[24, 24]} justify="center" align="middle">
      {Object.keys(pools).map((poolAddress, i) => (
        <Col span={24} key={poolAddress} className="wrap-card-pool">
          {i === 0 && (
            <Image
              className="ico-number-one"
              src={IcoRank}
              alt="number one"
              preview={false}
            />
          )}
          <PoolCard rank={i} poolAddress={poolAddress} />
        </Col>
      ))}
    </Row>
  )
}

export default Pools
