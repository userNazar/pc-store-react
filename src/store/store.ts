import { configureStore } from '@reduxjs/toolkit'
import asyncGoodsSlicer from './slicers/asyncGoodsSlicer';





const store = configureStore({
    reducer: {
        goodsAsync: asyncGoodsSlicer.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;