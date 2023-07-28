import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../interfaces";


interface initialStateProps {
    list: IProduct[];
    loading: boolean;
    error: null | string;
}

export const fetchGoods = createAsyncThunk<IProduct[]>(
    'async/goods',
    async () => {
        try {
            const response = await axios.get('https://pcshop-3cd02-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
            return response.data;
        } catch (error) {
            return;
        }
    }
)


const initialState: initialStateProps = {
    list: [],
    loading: false,
    error: null
}

const asyncGoodsSlicer = createSlice({
    name: 'asyncGoodsSlicer',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchGoods.pending, state => {
                state.loading = true;
            })
            .addCase(fetchGoods.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchGoods.rejected, (state, action) => {
                state.error = String(action.error)
            })
    }
})




export default asyncGoodsSlicer;