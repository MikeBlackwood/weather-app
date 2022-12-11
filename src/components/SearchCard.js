import { useRef, useState } from "react";

const SearchCard = ({ searchfield, updateSearchField }) => {
  const [val, setValue] = useState("");
  // const elRef = useRef(null);
  const updateValue = (e) => {
    setValue(e.target.value);
  };
  const submitSearchValue = () => {
    updateSearchField(val);
  };
  return (
    <div className="w-120 h-32 pl-10 pr-10 bg-gray rounded-md text-white">
      <div className="h-1/2 flex align-middle justify-center">
        <h1 className="mt-auto mb-auto">Type city name and state</h1>
      </div>
      <div>
        <input
          className=" text-gray-dark rounded-md  py-2"
          style={{ borderColor: "black", border: "2px" }}
          onChange={updateValue}
        />
        <button
          className="ml-10 bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded-full"
          onClick={submitSearchValue}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
