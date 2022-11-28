import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import SearchCard from "./components/SearchCard";
import WeatherController from "./components/WeatherController";

const queryClient = new QueryClient();

const App = () => {
  const [searchfield, setSearch] = useState("");

  const updateSearchField = (value) => {
    // parse the value
    // check if there is country code else add it
    // check if there is a state
    // pass data
    validateInput(value);
  };

  const resetSearch = () => {
    setSearch("");
  };
  const validateInput = (value) => {
    const inputList = value.split(",");
    console.log(inputList);

    if (inputList.length < 2) {
      console.log("Not enough data provided");
      return;
    }
    if (inputList.length < 3) {
      //  check if contains country code
      value += ",US";
      setSearch(value);
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-container">
        {searchfield === "" ? (
          <div className="flex justify-center items-center h-full">
            <SearchCard updateSearchField={updateSearchField} />
          </div>
        ) : (
          <div className="w-11/12 ml-auto mr-auto h-full">
            <WeatherController reset={resetSearch} location={searchfield} />
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
};
export default App;
