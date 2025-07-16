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
    detailProduct: Partial<IProduct>
    loading: boolean;
    error: string | null,
}

const initialState: ProductState = {
    allProducts: [],
    detailProduct: {},
    loading: false,
    error: null,

}

export const getAllProducts = createAsyncThunk('allProducts',
    async ({ params }: { params: { keyword: string } }) => {
        const { keyword } = params;
        try {
            const response = await fetch(`http://localhost:5001/products?keyword=${keyword}`)
            return await response.json();
        }
        catch (err) {
            console.error("getAllProducts verisi çekilemedi!", err)
        }
    }
)

export const getDetailProduct = createAsyncThunk("detailProduct",
    async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5001/products/detail/${id}`)
            return await response.json()
        } catch (error) {
            console.error("getDetailProduct verisi çekilemedi!")
        }
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getallProducts start
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
        // getallProducts end

        // getDetailProduct start

        builder.addCase(getDetailProduct.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getDetailProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.detailProduct = action.payload.getAProduct;
        });
        builder.addCase(getDetailProduct.rejected, (state, action) => {
            state.loading = true;
            action.error.message || "Bir hata oluştu. Lütfen tekrar deneyin!"
        })
        // getDetailProduct end
    }
})

export default productSlice.reducer