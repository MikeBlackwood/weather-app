import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchCard from "./components/SearchCard";
import WeatherController from "./components/WeatherController";
import PopUpCard from "./components/popUpCard";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [searchfield, setSearch] = useState("");
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateSearchField = (value) => {
    const inputList = value.split(",").map(function (item) {
      return item.trim();
    });
    if (inputList.length < 2) {
      setErrorMessage("Please specify state or country");
      setPopUpVisible(!popUpVisible);
      return;
    }

    // check if the city is in US
    if (inputList.length === 2 && inputList[1].length === 2) {
      value += ", US";
    }

    setSearch(value);
  };

  const resetSearch = () => {
    setSearch("");
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
      <div className="h-full w-full " style={{ backgroundColor: "black" }}>
        {searchfield === "" ? (
          <div className="flex justify-center items-center h-full">
            <SearchCard updateSearchField={updateSearchField} />
          </div>
        ) : (
          <WeatherController location={searchfield} reset={resetSearch} />
        )}
      </div>
    </QueryClientProvider>
  );
};
export default App;
