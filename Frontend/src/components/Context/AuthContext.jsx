import { useContext, createContext, useState, useEffect } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser)); // ✅ parse string to object
            } catch (error) {
                console.error("Failed to parse user from localStorage:", error);
                setUser(null);
            }
        }
    }, []);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
}

// easy custom hook
export const useUser = () => useContext(userContext);