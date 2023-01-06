import {configureStore} from '@reduxjs/toolkit'
import { blogApi } from './blogApi'
import MainReducer from './slice'

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        reducer: MainReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware),
})