import { IProduct } from '@/app/redux/product/productSlice';
import Image from 'next/image';
import Link from 'next/link';

interface IProductData {
  item: IProduct;
}

const ProductCard: React.FC<IProductData> = ({ item }) => {
  return (
    <Link href={`products/detail/${item._id}`}>
      <div className="flex flex-col">
        <div className="relative w-full aspect-[2/3]">
          <Image
            src={item.images.url}
            alt={item.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="ml-2 mt-2">
          <p className="text-xs mb-1">{item.name}</p>
          <p className="text-xs mb-1 bg-[#ffeb3b] w-max px-1">
            {item.price} TL
          </p>
          <p className="text-xs mb-1 bg-[#000000] text-[#FFFFFF] font-medium w-max px-1">
            Stok:{item.stock} adet
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
