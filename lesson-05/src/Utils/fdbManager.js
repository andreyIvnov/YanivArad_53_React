import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query } from 'firebase/firestore';
import db from './firebase.js'

const getAllDocsByCollectionName = async (collectionName) => {
    try {
        const coll = collection(db, collectionName);
        const q = query(coll);
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error on fdbManager => getAllDocsByCollectionName(): ", error);
    }
}

const getDocById = async (collectionName, id) => {
    try {
        const collectionDoc = doc(db, collectionName, id);
        const q = query(collectionDoc);
        onSnapshot(q, (doc) => {
            if (doc.exists()) {
                return { id: doc.id, ...doc.data() };
            } else {
                console.log("No such document!");
                return null;
            }
        });
    } catch (error) {
        console.error("Error on fdbManager => getDocById(): ", error);
    }
}

const deleteDocById = async (collectionName, id) => {
    try {
        const collectionDoc = doc(db, collectionName, id);
        await deleteDoc(collectionDoc);
    } catch (error) {
        console.error("Error on fdbManager => deleteDocById(): ", error);
    }
}

const addDocToFB = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        return docRef.id;
        
    } catch (error) {
        console.error("Error on fdbManager => addDocToFB(): ", error);
    }
}

export {
    getAllDocsByCollectionName,
    getDocById,
    deleteDocById,
    addDocToFB
}