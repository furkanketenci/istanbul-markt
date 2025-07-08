import { IProduct } from "@/app/redux/product/productSlice"
import Image from "next/image"
import Link from "next/link"


interface IProductData {
    item: IProduct
}

const Product: React.FC<IProductData> = ({ item }) => {
    return (
        <div className="flex flex-col">
            <Link href={"/"}>
                <div className="relative aspect-[2/3]">
                    <Image src={item.images.url} alt={item.name} fill />
                </div>
            </Link>
            <div className="pl-1.5">
                <div className="text-xs mb-1 mt-2.5">{item.name}</div>
                <div className="text-xs mb-1 bg-[#ffeb3b] w-max text-[#000000] px-2 font-light">{item.price} TL</div>
                <div className="text-xs mb-1 bg-[#000000] w-max text-[#FFFFFF] px-2 font-semibold">{item.stock} adet stoğu kaldı!</div>
            </div>
        </div >
    )
}

export default Product