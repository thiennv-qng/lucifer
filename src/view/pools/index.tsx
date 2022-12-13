import { useSelector } from 'react-redux'

import { Col, Row } from 'antd'
import PoolCard from './poolCard'

import { AppState } from 'model'

const Pools = () => {
  const pools = useSelector((state: AppState) => state.pools)

  return (
    <Row gutter={[24, 24]} justify="center" align="middle">
      {Object.keys(pools).map((poolAddress, i) => (
        <Col xs={24} key={poolAddress} className="wrap-card-pool">
          <PoolCard rank={i} poolAddress={poolAddress} />
        </Col>
      ))}
    </Row>
  )
}

export default Pools
