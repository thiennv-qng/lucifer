import { util, useWalletAddress } from '@sentre/senhub'

import IonIcon from '@sentre/antd-ionicon'
import { Space, Typography } from 'antd'
import Card from 'antd/lib/card/Card'

const WalletInfo = () => {
  const walletAddress = useWalletAddress()

  return (
    <Card
      style={{ borderRadius: 8, boxShadow: 'unset', background: '#fff' }}
      bodyStyle={{ padding: 16 }}
    >
      <Space direction="vertical" size={0}>
        <Space align="center">
          <IonIcon name="newspaper-outline" />
          <Typography.Title level={4}>Lucifer</Typography.Title>
        </Space>
        {walletAddress ? (
          <Space align="center">
            <IonIcon name="wallet-outline" />
            <Typography.Text>
              {util.shortenAddress(walletAddress)}
            </Typography.Text>
          </Space>
        ) : (
          <Typography.Text type="secondary">
            Wallet not connected
          </Typography.Text>
        )}
      </Space>
    </Card>
  )
}

export default WalletInfo
