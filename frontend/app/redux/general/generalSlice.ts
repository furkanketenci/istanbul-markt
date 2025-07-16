import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface GeneralState {
    keyword: string;
}

const initialState: GeneralState = {
    keyword: "",
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        getKeyword: (state, action) => {
            state.keyword = action.payload
        },
    },
})

export const { getKeyword } = generalSlice.actions

export default generalSlice.reducer