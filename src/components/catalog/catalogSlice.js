import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

import useMarvelService from "../../services/MarvelService";

const catalogAdapter = createEntityAdapter()

const initialState = catalogAdapter.getInitialState({
    loadingStatus: 'idle',
    category: 0,
    goods: [],
    popularGoods: []
})

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchCatalog',
    async (category) => {
        const { getAllGoods } = useMarvelService()
        return await getAllGoods(category)
    }
);
export const fetchCatalogPopular = createAsyncThunk(
    'catalog/fetchCatalogPopular',
    async (category) => {
        const { getAllGoods } = useMarvelService()
        return await getAllGoods(category)
    }
);
const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        // addToBasket: (state, action) => {
        //     catalogAdapter.setOne(state, action.payload)
        // },
        // deleteItem: (state, action) => {
        //     catalogAdapter.removeOne(state,action.payload)
        // }
        // setCategory:(state, action) => {
        //     state.category = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, state => { state.loadingStatus = 'loading' })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.loadingStatus = 'idle'
                state.goods = action.payload
                // catalogAdapter.setMany(state, action.payload)
            })
            .addCase(fetchCatalog.rejected, state => { state.loadingStatus = 'error' })
            .addCase(fetchCatalogPopular.pending, state => { state.loadingStatus = 'loading' })
            .addCase(fetchCatalogPopular.fulfilled, (state, action) => {
                state.loadingStatus = 'idle'
                state.popularGoods = action.payload
                // catalogAdapter.setMany(state, action.payload)
            })
            .addCase(fetchCatalogPopular.rejected, state => { state.loadingStatus = 'error' })
            .addDefaultCase(() => { })
    }

})

const { selectAll } = catalogAdapter.getSelectors(state => state.catalog)

export const goodsSelector = createSelector(
    selectAll,
    (catalog) => {
        return catalog
    }
)

const { actions, reducer } = catalogSlice;
export default reducer;

export const { addToBasket, deleteItem,setCategory } = actions;