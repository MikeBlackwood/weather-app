import { useState } from "react";

const SearchCard = ({ updateSearchField }) => {
  const [val, setValue] = useState("");

  const updateValue = (e) => {
    setValue(e.target.value);
  };
  const submitSearchValue = (e) => {
    e.preventDefault();
    updateSearchField(val);
  };

  return (
    <form onSubmit={submitSearchValue}>
      <div className="w-120 h-32 pl-10 pr-10 bg-gray rounded-md text-white">
        <div className="h-1/2 flex align-middle justify-center">
          <h1 className="mt-auto mb-auto">
            Look-up weather by city and state or country
          </h1>
        </div>
        <div>
          <input
            className=" text-gray-dark rounded-md  py-2"
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
    </form>
  );
};

export default SearchCard;
