import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2beWb5pLPtySbtKb8tUf636ctVZOlo1I",
  authDomain: "fir-jwt-am.firebaseapp.com",
  projectId: "fir-jwt-am",
  storageBucket: "fir-jwt-am.appspot.com",
  messagingSenderId: "435937186661",
  appId: "1:435937186661:web:15a34aa86c0334db60c78c"
};


export default function Login({ setIsLoggedIn }) {
    const handleSignin = () => {
        // connect to firebase project
        const app = initializeApp(firebaseConfig);
        // connect to auth
        const auth = getAuth(app);
        // create a provider
        const provider = new GoogleAuthProvider();
        // popup signin window
        signInWithPopup(auth, provider)
        // handle .then and .catch
        .then(() => setIsLoggedIn(true))
        .catch(alert)
    }
    return(
        <>
            <h1>Login</h1>
            <button onClick={handleSignin}>Sign In With Google</button>
        </>
    )
}