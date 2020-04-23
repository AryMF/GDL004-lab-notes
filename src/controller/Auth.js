import React, {useState, useEffect} from 'react';
import databaseConfig from './FirebaseApp';
import 'firebase/auth';


export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        databaseConfig.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
            {/*console.log({currentUser})*/}
        </AuthContext.Provider>
    );
};

export const accountCreationWithEmail = (email, password) => {
    return databaseConfig.auth().createUserWithEmailAndPassword(email, password);
}

export const signInWithEmail = (email, password) => {
    return databaseConfig.auth().signInWithEmailAndPassword(email, password);
}

export const closeSession = () => {
	databaseConfig.auth().signOut()
}
