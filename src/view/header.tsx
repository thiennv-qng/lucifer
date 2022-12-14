import { useWalletAddress, util } from '@sentre/senhub'
import { useHistory } from 'react-router-dom'

import IonIcon from '@sentre/antd-ionicon'
import { Avatar, Card, Col, Image, Menu, Row, Space, Typography } from 'antd'

import logo from 'static/images/brand.svg'

const Header = () => {
  const history = useHistory()
  const walletAddress = useWalletAddress()

  return (
    <Card bordered={false} style={{ borderRadius: 0 }}>
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Menu
            onSelect={(e) => history.push(e.key)}
            style={{ minWidth: 250 }}
            mode="horizontal"
            items={[
              {
                label: 'Home',
                key: '/app/lucifer/home',
                icon: <IonIcon name="home-outline" />,
              },
              {
                label: 'Pool',
                key: '/app/lucifer/pools',
                icon: <IonIcon name="wallet-outline" />,
              },
            ]}
          />
        </Col>
        <Col flex="auto" style={{ textAlign: 'center' }}>
          <Image src={logo} preview={false} />
        </Col>
        <Col span={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 12,
              boxShadow: '0 0 8px #dadada',
              width: 140,
              float: 'right',
            }}
            bodyStyle={{ padding: '6px 16px' }}
          >
            <Space size={6}>
              <Avatar>{walletAddress.slice(0, 2)}</Avatar>
              <Typography.Text>
                {util.shortenAddress(walletAddress)}
              </Typography.Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </Card>
  )
}

export default Header
