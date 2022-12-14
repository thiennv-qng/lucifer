import { useSelector } from 'react-redux'

import { Col, Empty, Row, Table } from 'antd'

import { AppState } from 'model'
import { column } from './column'
import BuyAndSell from 'view/buyAndSell'
import DepositAndWithdraw from 'view/depositAndWithdraw'
import BorrowAnhRepay from 'view/borrowAndRepay'
import Card from 'antd/lib/card/Card'

import './index.less'

const Pools = () => {
  const pools = useSelector((state: AppState) => state.pools)
  if (!Object.keys(pools).length) return <Empty />

  const poolData = Object.keys(pools).map((address, index) => ({
    ...pools[address],
    index,
    address,
    mintAddress: pools[address].mint.toBase58(),
    mintBase: pools[address].baseMint.toBase58(),
    key: address,
  }))

  return (
    <Card
      bordered={false}
      style={{ background: '#d9dee7' }}
      bodyStyle={{ padding: '2px 2px 0 2px' }}
    >
      <Table
        className="table-pool"
        columns={column}
        dataSource={poolData}
        pagination={false}
        expandRowByClick
        expandable={{
          expandedRowRender: (record) => (
            <Row gutter={[12, 12]} justify="end">
              <Col>
                <BuyAndSell poolAddress={record.address} />
              </Col>
              <Col>
                <DepositAndWithdraw poolAddress={record.address} />
              </Col>
              <Col>
                <BorrowAnhRepay poolAddress={record.address} />
              </Col>
            </Row>
          ),
        }}
        onExpandedRowsChange={(e) => console.log(e)}
      />
    </Card>
  )
}

export default Pools
