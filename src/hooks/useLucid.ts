import { useMemo } from 'react'
import { rpc, useWalletAddress } from '@sentre/senhub'
import LucidProgram, { getAnchorProvider, LUCID_ADDRESS } from 'lib'

export const useProvider = () => {
  const walletAddress = useWalletAddress()

  const provider = useMemo(
    () => getAnchorProvider(rpc, walletAddress, window.sentre.solana),
    [walletAddress],
  )
  return provider
}
export const useLucid = (): LucidProgram => {
  const provider = useProvider()

  const lucidProgram = useMemo(
    () => new LucidProgram(provider, LUCID_ADDRESS),
    [provider],
  )
  return lucidProgram
}
