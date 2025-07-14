"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "@/app/components/ProductCard";
import { AppDispatch, RootState } from "../redux/store";
import { getAllProducts } from "../redux/product/productSlice";


const Products = () => {
    const products = useSelector((state: RootState) => state.product.allProducts)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    return (
        <div className="mt-[60px] flex justify-start flex-col items-center w-full">
            <div className="mt-10 mb-15 text-center">
                <h1 className="text-xs mb-2">ÜRÜNLER</h1>
                <h2 className="text-[11px] text-[#AAAAAA]">ÖZEL FİYATLAR KAÇIRMA!</h2>
            </div>

            <div className=" flex flex-row flex-wrap w-full justify-start border-t border-black">
                {
                    products.map((item, i) =>
                        <div key={i} className="w-1/2 lg:w-1/4 mb-16">
                            <ProductCard item={item} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products