interface IFilterBox {
  title: string;
  data: string[];
}

const FilterBox: React.FC<IFilterBox> = ({ title, data }) => {
  return (
    <div className="mr-8 last:mr-0">
      <p
        className="
            font-bold;
            text-xs
            mb-2
            "
      >
        {title}
      </p>
      <div className="flex">
        {data.map((item, i) => (
          <p
            className="
                    w-max
                    px-3
                    mr-3
                    last:mr-0
                    text-xs 
                    h-8 
                    border 
                    border-[#000] 
                    font-light 
                    flex 
                    items-center 
                    justify-center 
                    cursor-pointer"
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
