import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Función para manejar el cierre de sesión
    const logout = () => {
        setUser(null);  // Esto asegura que el usuario se desloguea
        localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

