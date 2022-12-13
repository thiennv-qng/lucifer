import { usePoolData } from './usePoolData'
import { usePoolPrices } from './usePoolPrices'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'

export const useMyLiquidity = (poolAddress: string) => {
  const poolData = usePoolData(poolAddress)
  const poolPrices = usePoolPrices(poolAddress)
  const lptAddress = poolData ? poolData.lptMint.toBase58() : ''
  const myLpt = useAccountBalanceByMintAddress(lptAddress)

  return (myLpt?.balance || 0) * poolPrices.lptPrice
}
