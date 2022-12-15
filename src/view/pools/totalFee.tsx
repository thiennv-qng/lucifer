import { util } from '@sentre/senhub'
import { usePoolFees } from 'hooks/pool/usePoolFees'

import CardContent from './cardContent'

type TotalFeeProps = { poolAddress: string }
const TotalFee = ({ poolAddress }: TotalFeeProps) => {
  const fee = usePoolFees(poolAddress)

  return (
    <CardContent
      primary
      value={util.numeric(fee.totalFee).format('0,0.00[00]')}
      strong={false}
    />
  )
}

export default TotalFee
