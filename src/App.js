import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchCard from "./components/SearchCard";
import WeatherController from "./components/WeatherController";
import PopUpCard from "./components/popUpCard";

const queryClient = new QueryClient();

const App = () => {
  const [searchfield, setSearch] = useState("");
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const updateSearchField = (value) => {
    validateInput(value);
  };

  const resetSearch = () => {
    setSearch("");
  };

  const validateInput = (value) => {
    // Check if string contains comma or space
    const inputList = value.split(",");

    if (inputList.length < 2) {
      setErrorMessage("Not enough data provided");
      setPopUpVisible(!popUpVisible);
      return;
    }
    if (inputList.length < 3) {
      //  check if contains country code
      value += ",US";
      setSearch(value);
    }
  };
  const resetError = () => {
    setErrorMessage(null);
    setPopUpVisible(!popUpVisible);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <PopUpCard
        isVisible={popUpVisible}
        reset={resetError}
        errorMessage={errorMessage}
      />
      <div className="main-container" style={{ backgroundColor: "black" }}>
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
