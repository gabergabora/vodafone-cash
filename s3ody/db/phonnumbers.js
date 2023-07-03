import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
  query,
  where,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { app, db } from "./Config";
const firestoreDB = getFirestore(app);

const fetchData = async () => {
  try {
    const collectionRef = collection(firestoreDB, "phons");
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      // Process each document here
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

      async function addphons(phon, avilabletosend, availabletoadd ,id ,availabletorequst) {
        await addDoc(
          collection(firestoreDB, "phons"),
          phon,
          avilabletosend,
          id,
          availabletoadd,
          availabletorequst
        );
      }
// edite in add mony 
async function editphons(id,availabletoadd, avilabletosend ) {
  try {
    const postRef = doc(db, "phons", id);
    await setDoc(postRef, {
      avilabletosend: avilabletosend,
      availabletoadd: availabletoadd,
    }, { merge: true });
  } catch (error) {
    console.error("Error updating phons:", error);
  }
}
//edite in send mony 
async function editphonssend(id,availabletorequst, avilabletosend ) {
  try {
    const postRef = doc(db, "phons", id);
    await setDoc(postRef, {
      avilabletosend: avilabletosend,
      availabletorequst: availabletorequst,
    }, { merge: true });
  } catch (error) {
    console.error("Error updating phons:", error);
  }
}

async function deletephons(id) {
  try {
    await deleteDoc(doc(firestoreDB, "phons", id));
  } catch (error) {
    console.error("Error deleting phons:", error);
  }
}

async function getphonsinfo(id) {
  try {
    const docRef = doc(firestoreDB, "phons", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      return null; // Document with the specified ID doesn't exist
    }
  } catch (error) {
    console.error("Error getting phons info:", error);
    return null;
  }
}

async function getphons() {
  try {
    const mCol = collection(firestoreDB, "phons");
    const addressSnapshot = await getDocs(mCol);
    return addressSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (error) {
    console.error("Error getting phons:", error);
    return [];
  }
}

function subscribephons(callback) {
  const unsubscribe = onSnapshot(
    query(collection(firestoreDB, "phons")),
    (snapshot) => {
      const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot });
      });
      
    }
  );
  return unsubscribe;
}

export {
  addphons,
  deletephons,
  subscribephons,
  getphons,
  getphonsinfo,
  fetchData,
  editphons,
  editphonssend
};
