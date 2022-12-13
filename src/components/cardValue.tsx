import { CSSProperties, ReactNode } from 'react'

import { Card, Space, Typography } from 'antd'

type CardValueProps = {
  label?: string
  value?: ReactNode
  action?: ReactNode
  style?: CSSProperties
  bodyStyle?: CSSProperties
}
const CardValue = ({
  label = '',
  value,
  action,
  bodyStyle,
  style,
}: CardValueProps) => {
  return (
    <Card
      bordered={false}
      className="sentre-card-gradient"
      style={{
        borderRadius: 8,
        ...style,
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      bodyStyle={{ ...bodyStyle }}
    >
      <Space direction="vertical">
        <Typography.Title level={1} className="gradient-text">
          {value}
        </Typography.Title>
        <Typography.Text>{label}</Typography.Text>
        {action}
      </Space>
    </Card>
  )
}

export default CardValue
