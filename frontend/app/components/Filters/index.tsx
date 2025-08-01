import FilterBox from './FilterBox';
import PriceFilterBox from './PriceFilterBox';

const Filters = () => {
  const categories = ['Çanta', 'Ayakkabı', 'Gömlek', 'Pantolon'];

  const scores = ['1', '2', '3', '4', '5'];

  return (
    <div className="flex items-center flex-wrap mt-[60px] px-[20px] gap-4 lg:mt-[90px] lg:gap-7 lg:px-[40px]">
      <div>
        <p
          className="
            font-bold;
            text-xs
            mb-2
            "
        >
          FİYAT:
        </p>
        <div className="flex gap-3">
          <PriceFilterBox placeholderText="Min" />
          <PriceFilterBox placeholderText="Max" />
        </div>
      </div>

      <FilterBox title="KATEGORİLER:" data={categories} />
      <FilterBox title="PUANLAR:" data={scores} />
    </div>
  );
};
export default Filters;
