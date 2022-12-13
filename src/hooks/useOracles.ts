import { useCallback } from 'react'
import { Address, BN, web3 } from '@project-serum/anchor'
import util from '@senswap/sen-js/dist/utils'
import { useGetMintDecimals } from '@sentre/senhub/dist'

export const useOracles = () => {
  const getMintDecimals = useGetMintDecimals()

  const decimalizeMintAmount = useCallback(
    async (amount: number | string, mintAddress: Address) => {
      const decimals =
        (await getMintDecimals({
          mintAddress: new web3.PublicKey(mintAddress).toString(),
        })) || 0
      return new BN(util.decimalize(amount, decimals).toString())
    },
    [getMintDecimals],
  )

  const undecimalizeMintAmount = useCallback(
    async (amount: BN, mintAddress: Address) => {
      const decimals =
        (await getMintDecimals({
          mintAddress: new web3.PublicKey(mintAddress).toString(),
        })) || 0
      return util.undecimalize(BigInt(amount.toString()), decimals)
    },
    [getMintDecimals],
  )

  const decimalize = useCallback(
    (amount: number | string, decimals: number) => {
      return new BN(util.decimalize(amount, decimals).toString())
    },
    [],
  )

  const undecimalize = useCallback((amount: BN, decimals: number) => {
    return util.undecimalize(BigInt(amount.toString()), decimals)
  }, [])

  return {
    decimalize,
    undecimalize,
    decimalizeMintAmount,
    undecimalizeMintAmount,
  }
}
