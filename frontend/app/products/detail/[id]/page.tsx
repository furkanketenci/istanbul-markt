"use client";

import Logo from "@/app/components/Logo";
import { getDetailProduct } from "@/app/redux/product/productSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);

    const [quantity, setQuantity] = useState(0);
    const detailProduct = useSelector((state: RootState) => state.product.detailProduct);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        if (id) {
            dispatch(getDetailProduct(id));
        }
    }, [dispatch, id]);

    const increment = () => {
        if (quantity < detailProduct.stock!) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const addBasket = () => {
        console.log("addBasket")
    }


    if (!detailProduct.images?.url) return null;

    const quantityArea = detailProduct.stock !== 0 && (
        <>
            <div className="flex items-center mb-4">
                <Button
                    onClick={increment}
                    className="
                        flex 
                        items-center 
                        justify-center 
                        text-[rgb(38,38,38)] 
                        text-sm 
                        cursor-pointer
                        rounded-none
                        bg-transparent
                        hover:bg-transparent
                        w-[20px]">
                    +
                </Button>
                <p className="mx-4 text-[rgb(38,38,38)] text-sm font-medium">{quantity}</p>
                <Button
                    onClick={decrement}
                    className="
                        flex 
                        items-center 
                        justify-center 
                        text-[rgb(38,38,38)] 
                        text-sm 
                        cursor-pointer 
                        rounded-none
                        bg-transparent
                        hover:bg-transparent
                        w-[20px]">
                    -
                </Button>
            </div>

        </>
    )

    return (
        <div className="flex items-center justify-start h-screen w-full">
            <div className="flex flex-col items-center justify-center w-full h-full px-0 lg:flex-row lg:justify-between xl:px-10">
                <div className="hidden w-[33%] h-full xl:flex items-center justify-center">
                    <Logo />
                </div>
                <Image
                    className="mx-0 w-full h-full xl:mx-16 xl:w-[33%] lg:w-[50%] object-contain"
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

                    {quantityArea}

                    <Button
                        onClick={addBasket}
                        disabled={detailProduct.stock === 0}
                        className="
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
                        {
                            detailProduct.stock === 0 ? "Üzgünüz ürün stokta kalmadı :(" : "Sepete Ekle"
                        }
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Detail;