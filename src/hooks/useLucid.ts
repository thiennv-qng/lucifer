import { useMemo } from 'react'
import { getAnchorProvider } from '@sentre/senhub'
import LucidProgram, { LUCID_ADDRESS } from 'lib'

export const useProvider = () => {
  const provider = useMemo(() => getAnchorProvider()!, [])
  return provider
}
export const useLucid = (): LucidProgram => {
  const provider = useProvider()

  const lucidProgram = useMemo(
    () => new LucidProgram(provider as any, LUCID_ADDRESS),
    [provider],
  )
  return lucidProgram
}
