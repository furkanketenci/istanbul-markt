import { Input } from "@/components/ui/input"

interface IPriceFilterBox {
    placeholderText: string;
}


const PriceFilterBox: React.FC<IPriceFilterBox> = ({
    placeholderText
}) => {
    return (
        <div className="flex">
            <Input className="
                w-16 
                h-8 
                rounded-none 
                mr-3 
                border-[#000] 
                placeholder:text-xs 
                placeholder:text-[#000] 
                placeholder:font-light"
                type="number"
                placeholder={placeholderText}
            />
        </div>
    )
}

export default PriceFilterBox