import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

const useAuth = () => {
  signInWithEmailAndPassword(auth, 'masterprinter@toniareal.xyz', 'digitalfabrication<3')
    .catch(() => { console.log('login failed'); })
    .then(() => { console.log('user logged in'); });
};

export default useAuth;
