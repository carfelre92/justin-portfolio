import React, { useState, createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = props => {

    const [isActive, setActive] = useState("true");
    const [isOpen, setOpen] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
        setOpen(!isOpen);
    }

    return (
        <NavContext.Provider value={[isActive,setActive,isOpen,setOpen]}>
            {props.children}
        </NavContext.Provider>
    );
};