/* eslint-disable prefer-arrow-callback */
import * as Firebase from 'firebase/app';
import 'firebase/firestore';

//Cloud Firestore
const dataSource = Firebase.firestore();
const defaultCollection = 'notes';

const getCollectionData = (_collection, _uid) => {
	console.log(' _uid', typeof _uid);
	const collectionRef = dataSource.collection(_collection).where("uid", "==", _uid);
	return collectionRef.get();
};

export const dataRetrieve = (_uid) => {
	const tempNotesDataArray = [];
	return getCollectionData(defaultCollection, _uid).then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			const noteData = doc.data();
			noteData.id = doc.id;
			tempNotesDataArray.push(noteData);
		});
		return tempNotesDataArray;
	});
};

export const createNoteInDB = (_info) => {
	// Add a new document with a auto generated id.
	const info = _info;
	info["creationDate"] = Firebase.firestore.FieldValue.serverTimestamp();
	return dataSource.collection(defaultCollection).add(info);
};

export const actualizeDocument = (_document, _data) => {
	return dataSource.collection(defaultCollection).doc(_document).set(_data);
};

export const deleteDocument = (docId) => {
	return dataSource.collection(defaultCollection).doc(docId).delete();
};
