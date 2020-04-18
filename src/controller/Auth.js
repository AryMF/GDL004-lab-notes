import React, {useState, useEffect} from 'react';
import database from './FirebaseApp';


export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        database.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
            {console.log({currentUser})}
        </AuthContext.Provider>
    );
};

export const accountCreationWithEmail = (email, password) => {
    return database.auth().createUserWithEmailAndPassword(email, password);
}

export const signInWithEmail = (email, password) => {
    return database.auth().signInWithEmailAndPassword(email, password);
}