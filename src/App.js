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
    console.log(value);
    setSearch(value);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-container">
        <div className="container mx-auto h-max">
          <SearchCard
            searchVal={searchfield}
            updateSearchField={updateSearchField}
          />
          {searchfield !== "" ? (
            <WeatherController location={searchfield} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
};
export default App;
