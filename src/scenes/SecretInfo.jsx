import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, getIdToken } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig.jsx";

export default function SecretInfo() {
    const [secretStuff, setSecretStuff] = useState()
    useEffect(() => {
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        auth.currentUser.getIdToken(true)
            .then(token => {
            //make a secure call to our API to get the secret info
            fetch('http://localhost:3000/secrets', {
                headers: { Authorization: token},
            }) //send token
            .then(res => res.json())
            .then(data => setSecretStuff(data.message))
        })
        .catch(alert)
    }, [])
    return(
        <>
            <h1>Secret Info</h1>
            {secretStuff
                ? <h2>{secretStuff}</h2>
                : <h2>Loading...</h2>
            }
        </>
    )
}