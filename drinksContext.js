import { createContext, useState } from "react";

const DrinksContext = createContext();

export function DrinksProvider({ children }) {
  const [details, setDetails] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false)

  const fetchDrinks = async (searchTerm) => {
    setLoading(true)
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setDrinks(data.drinks);
    setLoading(false)
  };

  const fetchDetails = async (id) => {
    setLoading(true)
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    setDetails(data.drinks[0]);
    setLoading(false)

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
        loading,
        setDrinks
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
}

export default DrinksContext;
