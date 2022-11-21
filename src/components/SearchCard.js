import { useRef, useState } from "react";

const SearchCard = ({ searchfield, updateSearchField }) => {
  const [val, setValue] = useState("");
  const elRef = useRef(null);
  const updateValue = (e) => {
    setValue(e.target.value);
  };
  const startSearch = () => {
    let searchVal = val.replace(/\s+/g, "");
    searchVal += ",US";
    updateSearchField(searchVal);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <div>Search weather by city</div>
      <input
        className="border-slate-200 placeholder-slate-400"
        ref={elRef}
        value={val}
        onChange={updateValue}
      />
      <button onClick={startSearch}>Search</button>
    </div>
  );
};

export default SearchCard;
