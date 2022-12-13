import { useCallback, useEffect, useState } from 'react'
import { useWalletAddress, util } from '@sentre/senhub'
import { notifyError, notifySuccess } from '@sen-use/app'

import { Button, Col, Row } from 'antd'

import { useLucid } from 'hooks/useLucid'
import { useOracles } from 'hooks/useOracles'
import { usePoolData } from 'hooks/pool/usePoolData'
import { usePoolPrices } from 'hooks/pool/usePoolPrices'
import CardValue from 'components/cardValue'

const Deposit = ({ poolAddress }: { poolAddress: string }) => {
  const poolData = usePoolData(poolAddress)
  const poolPrices = usePoolPrices(poolAddress)
  const [loading, setLoading] = useState(false)
  const lucid = useLucid()
  const { undecimalize } = useOracles()
  const [lptLocked, setLptLocked] = useState('0')
  const [baseAmount, setBaseAmout] = useState('0')
  const walletAddress = useWalletAddress()

  const fetchDebt = useCallback(async () => {
    const accouts = await lucid.getTokenAccounts(
      walletAddress,
      poolAddress,
      poolData.mint,
      poolData.baseMint,
    )
    let debt = 0
    let baseAmount = 0
    try {
      const debtAccount = await lucid.program.account.cheque.fetch(
        accouts.cheque,
      )
      //@ts-ignore
      debt = Number(undecimalize(debtAccount.borrowAmount, 9))
      baseAmount = Number(undecimalize(debtAccount.baseAmount, 9))
    } catch (error) {}
    setLptLocked(String(debt))
    setBaseAmout(String(baseAmount))
  }, [
    lucid,
    poolAddress,
    poolData.baseMint,
    poolData.mint,
    undecimalize,
    walletAddress,
  ])
  useEffect(() => {
    fetchDebt()
  }, [fetchDebt])

  const onDeposit = async () => {
    try {
      setLoading(true)
      const { txId } = await lucid.repay(poolAddress)
      return notifySuccess('Replay', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[16, 16]} style={{ color: '#000000' }}>
      <Col span={12}>
        <CardValue
          label="DEBT"
          value={<span>{util.numeric(baseAmount).format('$0,0.[00]')}</span>}
        />
      </Col>
      <Col span={12}>
        <CardValue
          label="TOTAL LOCKED"
          value={
            <span>
              {util
                .numeric(Number(lptLocked) * poolPrices.lptPrice)
                .format('$0,0.[00]')}
            </span>
          }
        />
      </Col>

      <Col span={24}>
        <Button loading={loading} block onClick={onDeposit} type="primary">
          Repay
        </Button>
      </Col>
    </Row>
  )
}

export default Deposit
