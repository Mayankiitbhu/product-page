import { createContext, useState } from "react";

const initialValue = {
    totalItems : 0,
    total : 0.00,
};

export const Context = createContext();

const MyContext = ({children}) => {
    const [context, setContext] = useState(initialValue);

    const changeItem = ({ totalItems, total}) => {
        setContext((prevState) => {
            return {
                ...prevState,
                totalItems : totalItems,
                total : total
            }
        });
    };

    const contextVal = {
        context,
        changeItem
    };

    return (
        <Context.Provider value={contextVal} >
            {children}
        </Context.Provider>
    );
};

export default MyContext;