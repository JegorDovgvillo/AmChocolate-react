import { configureStore } from "@reduxjs/toolkit";
import catalog from '../components/catalog/catalogSlice'
import buttons from '../components/buttons/buttonsSliice'
import catalogMain from '../components/catalogMain/catalogMainSlice'
import basket from '../components/basket/basketSlice'

const store = configureStore({
    reducer: { catalog, buttons, catalogMain, basket },
    devTools: process.env.NODE_ENV !== 'production'
})
export default store