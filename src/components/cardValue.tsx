import { CSSProperties, ReactNode } from 'react'

import { Card, Space, Typography } from 'antd'

type CardValueProps = {
  label?: string
  value?: ReactNode
  action?: ReactNode
  style?: CSSProperties
  bodyStyle?: CSSProperties
  special?: boolean
}
const CardValue = ({
  label = '',
  value,
  action,
  bodyStyle,
  style,
  special = false,
}: CardValueProps) => {
  const specialStyle = special
    ? {
        background: '#F4F5F6',
        border: '1px solid #777E91',
      }
    : {}

  return (
    <Card
      bordered={special}
      className="sentre-card-gradient"
      style={{
        borderRadius: 16,
        background: 'transparent',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'unset',
        ...style,
        ...specialStyle,
      }}
      bodyStyle={{ ...bodyStyle }}
    >
      <Space direction="vertical">
        <Typography.Title
          level={1}
          style={{ fontSize: special ? 80 : 72, color: 'rgba(0, 0, 0, 0.64)' }}
          className={special ? 'gradient-text' : ''}
        >
          {value}
        </Typography.Title>
        <Typography.Text style={{ fontSize: 20 }} strong={special}>
          {label}
        </Typography.Text>
        {action}
      </Space>
    </Card>
  )
}

export default CardValue
