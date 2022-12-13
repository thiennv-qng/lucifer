import LazyLoad from '@sentre/react-lazyload'

import { Row, Col, Typography, Modal } from 'antd'
import Search from './search'
import Mint from './mint'
import IonIcon from '@sentre/antd-ionicon'
import { CSSProperties, useState } from 'react'

const LIMITATION = 100

const MintSelection = ({
  selectedMint,
  onChange,
  visible,
  mints,
  onClose,
  style,
}: {
  selectedMint: string
  onChange: (mint: string) => void
  visible: boolean
  mints: string[]
  onClose: () => void
  style?: CSSProperties
}) => {
  const [mintsSearched, setMintsSearched] = useState(mints)

  return (
    <Modal
      visible={visible}
      closeIcon={<IonIcon name="close" />}
      footer={null}
      destroyOnClose={true}
      centered={true}
      onCancel={onClose}
      style={style}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title level={4}>Select token</Typography.Title>
        </Col>
        <Col span={24}>
          <Search mints={mints} onChange={setMintsSearched} />
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]} style={{ height: 300 }} className="scrollbar">
            <Col span={24}>
              <Row gutter={[16, 16]}>
                {mintsSearched.slice(0, LIMITATION).map((mintAddress, i) => (
                  <Col span={24} key={i}>
                    <LazyLoad height={48} overflow>
                      <Mint
                        mintAddress={mintAddress}
                        onClick={() => onChange(mintAddress)}
                        active={selectedMint === mintAddress}
                      />
                    </LazyLoad>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  )
}

export default MintSelection
