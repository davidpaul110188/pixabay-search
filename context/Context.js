import React, { useState } from "react";

export const SearchContext = React.createContext({
    data: [],
    addData: () => { },
    resetData: () => { },
});

const SearchContextProvider = (props) => {
    const [data, setData] = useState([]);

    const addData = (newData) => {
        setData([...data, ...newData]);
    }

    const resetData = (newData) => {
        setData(newData);
    };

    return (
        <SearchContext.Provider
            value={
                {
                    data: data,
                    addData: addData,
                    resetData: resetData
                }
            }
        >
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;