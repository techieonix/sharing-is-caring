import { createContext, useContext, useRef } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const users = useRef([])

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)
