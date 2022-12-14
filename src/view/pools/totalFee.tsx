import { util } from '@sentre/senhub'
import { usePoolFees } from 'hooks/pool/usePoolFees'

import CardContent from './cardContent'

type TotalFeeProps = { poolAddress: string; mint: string }
const TotalFee = ({ poolAddress, mint }: TotalFeeProps) => {
  const fee = usePoolFees(poolAddress)

  return (
    <CardContent
      primary
      value={util.numeric(fee.totalFee).format('0,0.00[00]')}
      mintAddress={mint}
      strong={false}
    />
  )
}

export default TotalFee
