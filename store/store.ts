import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { worksheetReducer } from './worksheetSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export function setupStore(preloadedState?: Partial<RootState>): EnhancedStore {
  return configureStore({
    reducer: { worksheet: worksheetReducer } as any,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}
export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ChartStore = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
