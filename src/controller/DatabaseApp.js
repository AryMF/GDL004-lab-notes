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
  const example = [];
  getCollectionData(defaultCollection, _uid)
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let note = doc.data();
          note.id = doc.id;
          example.push(note);
      });
      console.log('*********>>', example);
      return example;
    })
    .catch(function(error) {
      console.log('Error getting documents: ', error);
      return error;
    });
}

export const createNoteInDB = (_info) => {
    // Add a new document with a auto generated id.
    _info["creationDate"] = Firebase.firestore.FieldValue.serverTimestamp();
    return dataSource.collection(defaultCollection).add(_info);
}
