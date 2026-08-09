//store bnane ka poora process rhega:
//step1:configure store

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSice'

export const store = configureStore({
    reducer: todoReducer
})