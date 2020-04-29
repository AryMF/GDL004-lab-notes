import React, { useState, useEffect } from 'react';
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import databaseConfig from './FirebaseApp';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		databaseConfig.auth().onAuthStateChanged(setCurrentUser);
	}, []);

	return (
		<AuthContext.Provider
			value={{ currentUser }}
		>
			{children}
			{/*
				console.log({currentUser})
			*/}
		</AuthContext.Provider>
	);
};

export const accountCreationWithEmail = (email, password) => {
	return databaseConfig.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmail = (email, password) => {
	return databaseConfig.auth().signInWithEmailAndPassword(email, password);
};

export const closeSession = () => databaseConfig.auth().signOut();

export const signInWithProvider = (provider) => {
	// Google authentication
	const providerGoogle = new Firebase.auth.GoogleAuthProvider();

	switch (provider) {
		case 'google':
			// databaseConfig.auth().signInWithRedirect(providerGoogle);
			databaseConfig.auth().signInWithPopup(providerGoogle)
				.then((result) => {
					if (result.additionalUserInfo.isNewUser) {
						// Verifica si es un nuevo usuario
						localStorage.setItem('theme', 'true');
					}
				}).catch((error) => {
				// Handle Errors here.
					const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorCode, '\n', errorMessage);
				// ...
				});
			break;
		default:
	}
};
