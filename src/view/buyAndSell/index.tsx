import { useState } from 'react'

import { Card, Col, Row, Segmented } from 'antd'
import { SegmentedValue } from 'antd/lib/segmented'

import Buy from './buy'
import Sell from './sell'
// import ButtonNeon from 'components/buttonNeon'

const BuyAndSell = ({ poolAddress }: { poolAddress: string }) => {
  // const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<SegmentedValue>('Buy')

  return (
    // <Fragment>
    //   <ButtonNeon onClick={() => setVisible(true)}>Buy / Sell</ButtonNeon>
    //   <Modal
    //     visible={visible}
    //     closeIcon={<IonIcon name="close-outline" />}
    //     onCancel={() => setVisible(false)}
    //     footer={null}
    //     className="sentre-modal-gradient"
    //   >
    <Card
      className="sentre-modal-gradient"
      bordered={false}
      style={{ borderRadius: 8 }}
    >
      <Row gutter={[24, 24]}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Segmented
            value={value}
            onChange={(value) => setValue(value)}
            options={['Buy', 'Sell']}
          />
        </Col>
        <Col span={24}>
          {value === 'Buy' ? (
            <Buy poolAddress={poolAddress} />
          ) : (
            <Sell poolAddress={poolAddress} />
          )}
        </Col>
      </Row>
    </Card>
    //   </Modal>
    // </Fragment>
  )
}

export default BuyAndSell
