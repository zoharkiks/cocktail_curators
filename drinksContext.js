import { createContext, useState } from "react";

const DrinksContext = createContext();

export function DrinksProvider({ children }) {
  const [details, setDetails] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDrinks = async (searchTerm) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setDrinks(data.drinks);
  };

  const fetchDetails = async (id) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    setDetails(data.drinks[0]);
  };

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        fetchDrinks,
        searchTerm,
        setSearchTerm,
        fetchDetails,
        details,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
}

export default DrinksContext;
