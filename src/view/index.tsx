import { Row, Col } from 'antd'
import Container from './container'
import WalletInfo from './walletInfo'

import 'static/styles/index.less'
import './index.less'

const View = () => {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col span={18}>
        <WalletInfo />
      </Col>
      <Col span={24}>
        <Container />
      </Col>
    </Row>
  )
}

export default View
