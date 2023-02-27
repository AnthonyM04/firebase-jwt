import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseConfig } from "./firebaseConfig.jsx";


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