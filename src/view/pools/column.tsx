import { MintName, MintSymbol, MintAvatar } from '@sen-use/app'
import IonIcon from '@sentre/antd-ionicon'

import { Button, Space, Typography } from 'antd'
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
    dataIndex: 'mintAddress',
    render: (mintAddress: string) => (
      <Space>
        <MintAvatar mintAddress={mintAddress} size={48} />
        <Space direction="vertical" size={0}>
          <Typography.Title level={5} ellipsis>
            <MintName mintAddress={mintAddress} />
          </Typography.Title>
          <Typography.Title
            level={5}
            className="symbol"
            style={{ color: '#000' }}
          >
            <MintSymbol mintAddress={mintAddress} />
          </Typography.Title>
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
    render: ({ address, baseMint }: { address: string; baseMint: string }) => (
      <TVL poolAddress={address} mint={baseMint} />
    ),
  },
  {
    title: 'Total fee',
    render: ({ address, baseMint }: { address: string; baseMint: string }) => (
      <TotalFee poolAddress={address} mint={baseMint} />
    ),
  },
  {
    title: 'Your liquidity',
    render: ({ address, baseMint }: { address: string; baseMint: string }) => (
      <TotalFee poolAddress={address} mint={baseMint} />
    ),
  },
  {
    title: '',
    render: (record: any) => (
      <Button type="text" icon={<IonIcon name="chevron-down-outline" />} />
    ),
  },
]
