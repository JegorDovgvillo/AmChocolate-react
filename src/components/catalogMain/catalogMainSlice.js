import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useMarvelService from "../../services/MarvelService";
import { fetchCatalog } from "../catalog/catalogSlice";
const catalogMainAdapter = createEntityAdapter()

const initialState = catalogMainAdapter.getInitialState({
    elems: [],
    loadingStatus: 'idle'
})
// fetchCatalog()
export const fetchCatalogMain = createAsyncThunk(
    'catalogMain/fetchCatalogMain',
    async () => {
        const { getNameOfGoods } = useMarvelService()
        return await getNameOfGoods()
    }
);
const catalogMainSlice = createSlice ({
    name: 'catalogMain',
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogMain.pending, state => { state.loadingStatus = 'loading' })
            .addCase(fetchCatalogMain.fulfilled, (state, action) => {
                state.loadingStatus = 'idle'
                state.elems = action.payload
            })
            .addCase(fetchCatalogMain.rejected, state => { state.loadingStatus = 'error' })
    }
})

const {actions, reducer} = catalogMainSlice;


export default reducer;