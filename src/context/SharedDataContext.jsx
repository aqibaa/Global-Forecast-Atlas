import React, { createContext, useState, useContext } from 'react';

export const SharedDataContext = createContext();

export const SharedDataProvider = ({ children }) => {
// Yeh state search kiye gaye sheher ko store karegi
const [city, setCity] = useState('London'); // Default sheher
return (
<SharedDataContext.Provider value={{ city, setCity }}>
{children}
</SharedDataContext.Provider>
);
};
// Ek custom hook taake context ko aasaani se istemal kiya ja sake
export const useSharedData = () => useContext(SharedDataContext);