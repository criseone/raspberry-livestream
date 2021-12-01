import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAAEOloOIYeZPE6G48vBuDsc4ZwlWwxMMc',
  authDomain: 'raspberry-livestream.firebaseapp.com',
  projectId: 'raspberry-livestream',
  storageBucket: 'raspberry-livestream.appspot.com',
  messagingSenderId: '427881544622',
  appId: '1:427881544622:web:59260c0d62ff58933e263f',
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export {
  storage,
  auth,
};
