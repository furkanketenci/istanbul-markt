"use client"
import { getDetailProduct } from "@/app/redux/product/productSlice";
import { AppDispatch, RootState } from "@/app/redux/store"
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"



const Detail = () => {
    const params = useParams();
    const id = params.id;

    const selector = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (typeof id === "string") {
            dispatch(getDetailProduct(id));
        }
    }, [dispatch, id])

    return (
        <div>
            Detail
        </div>
    )
}
export default Detail