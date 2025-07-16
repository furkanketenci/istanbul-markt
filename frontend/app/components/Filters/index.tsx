import { Input } from "@/components/ui/input"
import FilterBox from "./FilterBox"
import PriceFilterBox from "./PriceFilterBox"


const Filters = () => {

    const categories = [
        "Çanta", "Ayakkabı", "Gömlek", "Pantolon"
    ]

    const scores = [
        "1", "2", "3", "4", "5"
    ]

    return (
        <div className="flex items-center mt-[90px] px-[40px]">
            <div className="mr-8">
                <p className="
            font-bold;
            text-xs
            mb-2
            ">
                    FİYAT:
                </p>
                <div className="flex">
                    <PriceFilterBox placeholderText="Min" />
                    <PriceFilterBox placeholderText="Max" />
                </div>
            </div>

            <FilterBox title="KATEGORİLER:" data={categories} />
            <FilterBox title="PUANLAR:" data={scores} />
        </div>
    )
}
export default Filters