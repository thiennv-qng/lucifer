import { Button, Col, Row, Space, Typography } from 'antd'

import banner from 'static/images/banner.svg'

const Home = () => {
  return (
    <Row
      gutter={[24, 24]}
      style={{ marginTop: -12, height: 'calc(100vh - 90px)' }}
      align="middle"
    >
      <Col span={12} style={{ textAlign: 'center' }}>
        <img
          style={{
            width: 'auto',
            height: 'calc(100vh - 152px)',
            objectFit: 'cover',
            marginTop: 20,
          }}
          src={banner}
          alt="banner"
        />
      </Col>
      <Col span={12}>
        <Space direction="vertical" size={24}>
          <Space direction="vertical" size={0}>
            <Typography.Text
              style={{ textTransform: 'uppercase', fontSize: 16 }}
            >
              Let's Build this Thing Together!
            </Typography.Text>
            <Typography.Title level={1} style={{ fontSize: 68 }}>
              Ready to Make a Real Change?
            </Typography.Title>
          </Space>
          <Button
            type="primary"
            onClick={() => window.open('mailto:hi.lucifer@gmail.com')}
          >
            Contact Us
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default Home
