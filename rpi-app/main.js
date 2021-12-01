import PiCamera from 'pi-camera';

import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { ref, uploadString } from 'firebase/storage';

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


const myCamera = new PiCamera({
  mode: 'photo',
  nopreview: true,
  fullscreen: false,
  width: 640,
  height: 480
});

setInterval(() => {
  myCamera.snapDataUrl()
  .then((result) => {
    const storageRef = ref(storage, `rpi-stream`);
    uploadString(storageRef, result, 'data_url').then(() => {
      console.log('Uploaded a file string!');
    });
  })
  .catch((error) => { console.log(error); });
}, 10000);
