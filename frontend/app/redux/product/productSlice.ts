import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


interface IImage {
    public_id: string;
    url: string;
}

interface IReview {
    user: string;
    name: string;
    comment: string;
    rating: number;
}

export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    images: IImage;
    rating: number;
    user: string;
    reviews: IReview[];
    createdAt?: string;
    updatedAt?: string;
}


interface ProductState {
    allProducts: IProduct[];
    loading: boolean;
    error: string | null,
}

const initialState: ProductState = {
    allProducts: [],
    loading: false,
    error: null
}

export const getAllProducts = createAsyncThunk('allProducts',
    async () => {
        try {
            const response = await fetch("http://localhost:5001/products")
            return await response.json();
        }
        catch (err) {
            console.error("getAllProducts verisi çekilemedi!", err)
        }
    }
)


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload.allProduct
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = true
            action.error.message || "Bir hata oluştu. Lütfen tekrar deneyin!"
        });
    }
})

export default productSlice.reducer