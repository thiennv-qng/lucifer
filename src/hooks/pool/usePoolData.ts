import { useSelector } from 'react-redux'

import { AppState } from 'model'

export const usePoolData = (poolAddress: string) => {
  const poolData = useSelector((state: AppState) => state.pools[poolAddress])
  return poolData
}
