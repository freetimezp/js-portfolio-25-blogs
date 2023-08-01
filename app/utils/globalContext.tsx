"use client";
import React, { createContext, useState } from 'react';

const GlobalContext = createContext({
    toggle: false,
    handleToggle: () => { }
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <GlobalContext.Provider value={{ toggle, handleToggle }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
}