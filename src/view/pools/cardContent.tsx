import { CSSProperties, ReactNode } from 'react'

import { Button, Space, Tooltip, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import { MintAvatar } from '@sen-use/app/dist'

type CardContentProps = {
  label?: string
  tooltip?: ReactNode
  value?: string
  mintAddress?: string
  primary?: boolean
  labelStyle?: CSSProperties
  style?: CSSProperties
  strong?: boolean
  size?: number
}

const CardContent = ({
  label = '',
  tooltip,
  value = '',
  mintAddress,
  primary,
  labelStyle,
  style,
  strong = true,
  size = 4,
}: CardContentProps) => {
  const priColor = primary ? { color: '#ABFC47' } : {}

  return (
    <Space direction="vertical" size={size}>
      <Space size={4}>
        <Typography.Text style={labelStyle} type="secondary">
          {label}
        </Typography.Text>
        {tooltip && (
          <Tooltip title={tooltip}>
            <Button
              type="text"
              shape="circle"
              size="small"
              icon={
                <Typography.Text type="secondary">
                  <IonIcon name="information-circle-outline" />
                </Typography.Text>
              }
            />
          </Tooltip>
        )}
      </Space>
      <Space size={4}>
        <Typography.Text style={{ ...style, ...priColor }} strong={strong}>
          {value}
        </Typography.Text>
        <div style={{ marginTop: -3 }}>
          {mintAddress && <MintAvatar mintAddress={mintAddress} size={18} />}
        </div>
      </Space>
    </Space>
  )
}

export default CardContent
