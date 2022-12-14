import { util } from '@sentre/senhub'
import { usePoolTvl } from 'hooks/pool/usePoolTvl'

import CardContent from './cardContent'

type ApyProps = { poolAddress: string; mint: string }
const TVL = ({ poolAddress, mint }: ApyProps) => {
  const tvl = usePoolTvl(poolAddress)

  return (
    <CardContent
      primary
      value={util.numeric(tvl).format('0,0.00[00]a')}
      strong={false}
      mintAddress={mint}
    />
  )
}

export default TVL
