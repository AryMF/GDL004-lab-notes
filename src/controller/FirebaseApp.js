import * as Firebase from 'firebase/app';
import 'firebase/auth';

const databaseConfig = Firebase.initializeApp({
    apiKey: 'AIzaSyDwVXJEh6Ga5SObN33xfhGX0X6dgomFH7Y',
    authDomain: 'memento-391ad.firebaseapp.com',
    databaseURL: 'https://memento-391ad.firebaseio.com',
    projectId: 'memento-391ad',
    storageBucket: 'memento-391ad.appspot.com',
    messagingSenderId: '482774783777',
    appId: '1:482774783777:web:f91e0752c69fdfe34fd060'
});

export default databaseConfig;
