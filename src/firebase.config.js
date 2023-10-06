import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBcS7Ga-sZsDGKKD97jSjzjEcegYOx1AdY",
  authDomain: "foodzone01-47d24.firebaseapp.com",
  databaseURL: "https://foodzone01-47d24-default-rtdb.firebaseio.com",
  projectId: "foodzone01-47d24",
  storageBucket: "foodzone01-47d24.appspot.com",
  messagingSenderId: "589229505030",
  appId: "1:589229505030:web:c6c4d50417386e4ca8e187"
};

  const app=getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  const storage =getStorage(app);

  export { app,firestore,storage};

  