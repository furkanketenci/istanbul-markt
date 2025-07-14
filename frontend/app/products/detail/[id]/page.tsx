"use client";

import Logo from "@/app/components/Logo";
import { getDetailProduct } from "@/app/redux/product/productSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);

    const detailProduct = useSelector((state: RootState) => state.product.detailProduct);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (id) {
            dispatch(getDetailProduct(id));
        }
    }, [dispatch, id]);

    console.log("detailProduct", detailProduct)

    if (!detailProduct.images?.url) return null;

    return (
        <div className="flex items-center justify-start h-screen w-full">
            <div className="flex flex-col items-center justify-center w-full h-full px-0 lg:flex-row lg:justify-between xl:px-10">
                <div className="hidden w-[33%] h-full xl:flex items-center justify-center">
                    <Logo />
                </div>
                <Image
                    className="mx-0 w-full h-full xl:mx-16 xl:w-[33%] lg:w-[50%]"
                    src={detailProduct.images.url}
                    width={500}
                    height={500}
                    alt="detail-product"
                />
                <div className="
                    px-4
                    w-full
                    2xl:w-[33%]
                    flex
                    flex-col
                    items-start
                    justify-start
                    mt-4
                    lg-px-[60px]
                    lg:w-[50%]
                    lg:mx-10
                    ">
                    <p className="
                    text-[rgb(38,38,38)]
                   mb-4
                    text-xs
                    "
                    >
                        {detailProduct.name}
                    </p>
                    <p className="text-xs mb-4 bg-[#ffeb3b] w-max px-1">{detailProduct.price} TL</p>

                    <p className="text-xs mb-4 bg-[#000000] text-[#FFFFFF] font-medium w-max px-1">Stok:{detailProduct.stock} adet</p>
                    <p className=" text-[#262626]
                   mb-4
                    text-xs">
                        {detailProduct.description}
                    </p>

                    <Button className="
                        sticky
                        bottom-0
                        mt-auto
                        mb-6
                        w-full
                        bg-[#FFFFFF]
                        text-[#000000]
                        border border-black
                        rounded-none
                        text-xs
                        font-normal
                        hover:bg-[#FFFFFF]
                        cursor-pointer
                        lg:mt-0
                        lg:mb-0
                        lg:static
                        lg:bottom-auto
                        ">
                        Sepete Ekle
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Detail;