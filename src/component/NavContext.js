import React, { useState, createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = props => {

    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <NavContext.Provider value={[isActive,setActive]}>
            {props.children}
        </NavContext.Provider>
    );
};