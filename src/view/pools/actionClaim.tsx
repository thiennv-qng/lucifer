import { useCallback, useState } from 'react'
import { notifyError, notifySuccess } from '@sen-use/app'

import IonIcon from '@sentre/antd-ionicon'
import { Button, Typography } from 'antd'

import { useLucid } from 'hooks/useLucid'
import { useOracles } from 'hooks/useOracles'
import { usePoolData } from 'hooks/pool/usePoolData'
import { useBestPoolAddress } from 'hooks/pool/useBestPoolData'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'

const ActionClaim = () => {
  const bestPoolAddress = useBestPoolAddress()
  const { lptMint } = usePoolData(bestPoolAddress)
  const { balance } = useAccountBalanceByMintAddress(lptMint.toBase58())
  const [loading, setLoading] = useState(false)
  const { decimalizeMintAmount } = useOracles()
  const lucid = useLucid()

  const claim = useCallback(async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(balance, lptMint)
      const { txId } = await lucid.removeLiquidity(bestPoolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }, [balance, bestPoolAddress, decimalizeMintAmount, lptMint, lucid])

  return (
    <Button type="text" onClick={claim} loading={loading}>
      <Typography.Text style={{ color: '#000', textDecoration: 'underline' }}>
        CLAIM ALL <IonIcon name="chevron-forward-outline" />
      </Typography.Text>
    </Button>
  )
}

export default ActionClaim
