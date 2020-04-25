import * as Firebase from 'firebase/app';
import 'firebase/firestore';

//Cloud Firestore
const dataSource = Firebase.firestore();
const defaultCollection = 'notes';

const getCollectionData = (_collection, _uid) => {
  let collectionRef = dataSource.collection(_collection)//.where('uid ', '==', _uid);
  return collectionRef.get();
}

export const dataRetrieve = (_uid) => {
  return getCollectionData(defaultCollection, _uid)
}

export const createNoteInDB = (_info) => {
    // Add a new document with a auto generated id.
    _info["creationDate"] = Firebase.firestore.FieldValue.serverTimestamp();
    return dataSource.collection(defaultCollection).add(_info);
}

export const actualizeDocument = (_document, _data) => {
	return dataSource.collection(defaultCollection).doc(_document).set(_data);
}
