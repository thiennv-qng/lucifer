import { util } from '@sentre/senhub'
import { usePoolTvl } from 'hooks/pool/usePoolTvl'

import CardContent from './cardContent'

type ApyProps = { poolAddress: string }
const TVL = ({ poolAddress }: ApyProps) => {
  const tvl = usePoolTvl(poolAddress)

  return (
    <CardContent
      primary
      value={util.numeric(tvl).format('0,0.00[00]a')}
      strong={false}
    />
  )
}

export default TVL
