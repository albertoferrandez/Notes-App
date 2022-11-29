import { configureStore } from '@reduxjs/toolkit'
import taskReducers from '../tasks/taskSlice'

const store = configureStore ({
    reducer:{
        tasks: taskReducers //aqui se guardan los reducers que vienen del slice
    }
})

export default store