import { createGlobalState } from 'react-use'

import { Col, Row, Card, Empty } from 'antd'
import Pools from './pools'
import Infomations from './infomations'
import PoolWatcher from './watcher/pool.watcher'
import BuyAndSell from './buyAndSell'

export const usePoolAddressSelected = createGlobalState<string>()

const Container = () => {
  const [poolAddress] = usePoolAddressSelected()

  return (
    <Row gutter={[4, 4]} justify="center">
      <Col span={18}>
        <Card
          bodyStyle={{ padding: 12 }}
          style={{
            background: '#02000e87',
            borderRadius: 16,
            boxShadow: 'unset',
          }}
          bordered={false}
        >
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Infomations />
            </Col>
            <Col span={24}>
              <Row gutter={[24, 24]}>
                <Col span={8}>
                  <Pools />
                </Col>
                <Col span={16}>
                  {poolAddress ? (
                    <BuyAndSell poolAddress={poolAddress} />
                  ) : (
                    <Empty />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <PoolWatcher />
    </Row>
  )
}

export default Container
