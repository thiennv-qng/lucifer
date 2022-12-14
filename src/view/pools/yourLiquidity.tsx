import { util } from '@sentre/senhub'
import { useMyLiquidity } from 'hooks/pool/useMyLiquidity'

import CardContent from './cardContent'

type YourLiquidityProps = { poolAddress: string; mint: string }
const YourLiquidity = ({ poolAddress, mint }: YourLiquidityProps) => {
  const myLiquidity = useMyLiquidity(poolAddress)

  return (
    <CardContent
      value={util.numeric(Number(myLiquidity)).format('0,0.00[00]')}
      mintAddress={mint}
      strong={false}
    />
  )
}

export default YourLiquidity
