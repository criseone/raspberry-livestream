import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase';

const useStorage = (id) => {
  const storageRef = ref(storage, `${id}`);
  const uploadStream = (file) => {
    uploadString(storageRef, file, 'data_url').then(() => {
      console.log('Uploaded a data_url string!');
    });
  };
  const getStream = async () => {
    let downloadUrl;
    await getDownloadURL(storageRef).then((url) => {
      downloadUrl = url;
    });
    return downloadUrl;
  };
  return {
    getStream,
    uploadStream,
  };
};

export default useStorage;
