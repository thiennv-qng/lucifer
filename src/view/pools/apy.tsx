import { util } from '@sentre/senhub'

import useAPR from 'hooks/pool/useAPR'

import CardContent from './cardContent'

type ApyProps = { poolAddress: string }
const Apy = ({ poolAddress }: ApyProps) => {
  const apr = useAPR(poolAddress)

  return (
    <CardContent
      primary
      value={util.numeric(apr).format('0.00[00]%')}
      style={{ fontSize: 18, fontWeight: 800 }}
      strong={false}
    />
  )
}

export default Apy
