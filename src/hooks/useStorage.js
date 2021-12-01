import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/firebase';

const useStorage = () => {
  const uploadStream = (id, file) => {
    const storageRef = ref(storage, id);
    uploadBytes(storageRef, file).then(() => {
      console.log('Uploaded a blob or file!');
    });
  };
  return {
    uploadStream,
  };
};

export default useStorage;
