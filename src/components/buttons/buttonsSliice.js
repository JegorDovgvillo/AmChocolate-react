import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const buttonsAdapter = createEntityAdapter()

const initialState = buttonsAdapter.getInitialState({
    position: 0,
    disabled: true
})

const buttonsSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload
        },
        setDisabled: (state, action) => {
            state.disabled = action.payload
        }
    }
})
const { actions, reducer } = buttonsSlice;
export default reducer;

export const { setPosition, setDisabled } = actions;