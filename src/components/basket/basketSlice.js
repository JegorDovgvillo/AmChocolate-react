import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";


const basketAdapter = createEntityAdapter()


const initialState = basketAdapter.getInitialState({
    sum: 0
})


const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        // updateBusket: (state, action) => {
        //     basketAdapter.setMany(state, action.payload)
        // },
        updateItem: (state, action) => {
            basketAdapter.upsertOne(state, action)
        },
        updateSum: (state, action) => {
            state.sum = action.payload
        },
        deleteItemInBusket: (state, action) => {
            basketAdapter.removeOne(state,action.payload)
        },
        clearBasket: (state, action) => {
            basketAdapter.removeAll(state,action)
        }
    }
})
const { selectAll } = basketAdapter.getSelectors(state => state.basket)

export const basketSelector = createSelector(
    selectAll,
    (basket) => {
        return basket
    }
)
const { actions, reducer } = basketSlice;
export default reducer;
export const { updateBusket, updateItem, updateSum,deleteItemInBusket,clearBasket } = actions;