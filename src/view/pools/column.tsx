import { MintName, MintSymbol, MintAvatar } from '@sen-use/app'
import IonIcon from '@sentre/antd-ionicon'

import { Avatar, Button, Space, Typography } from 'antd'
import Apy from './apy'
import TotalFee from './totalFee'
import TVL from './tvl'

export const column = [
  {
    title: '#',
    dataIndex: 'index',
    render: (index: number) => (
      <Typography.Text style={{ fontWeight: 800 }}>{index + 1}</Typography.Text>
    ),
  },
  {
    title: 'Pool',
    render: ({ mint, mintBase }: { mint: string; mintBase: string }) => (
      <Space>
        <Avatar.Group>
          <MintAvatar mintAddress={mint} size={48} />
          <MintAvatar mintAddress={mintBase} size={48} />
        </Avatar.Group>
        <Space direction="vertical" size={0}>
          <Space size={4}>
            <Typography.Title level={5} ellipsis>
              <MintName mintAddress={mint} />
            </Typography.Title>
            /
            <Typography.Title level={5} ellipsis>
              <MintName mintAddress={mintBase} />
            </Typography.Title>
          </Space>
          <Space size={4}>
            <Typography.Title
              level={5}
              className="symbol"
              style={{ color: '#000' }}
            >
              <MintSymbol mintAddress={mint} />
            </Typography.Title>
            /
            <Typography.Title
              level={5}
              className="symbol"
              style={{ color: '#000' }}
            >
              <MintSymbol mintAddress={mintBase} />
            </Typography.Title>
          </Space>
        </Space>
      </Space>
    ),
  },
  {
    title: 'APY',
    dataIndex: 'address',
    render: (address: string) => <Apy poolAddress={address} />,
  },
  {
    title: 'TVL',
    render: ({ address }: { address: string; baseMint: string }) => (
      <TVL poolAddress={address} />
    ),
  },
  {
    title: 'Total fee (Swap + Lending fee)',
    render: ({ address }: { address: string; baseMint: string }) => (
      <TotalFee poolAddress={address} />
    ),
  },
  {
    title: '',
    render: (record: any) => (
      <Button type="text" icon={<IonIcon name="chevron-down-outline" />} />
    ),
  },
]
