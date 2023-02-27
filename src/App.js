import SecretInfo from './scenes/SecretInfo';
import Login from './scenes/Login';
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedin, setIsLoggedIn] = useState();
  return (
    <>
      {isLoggedin
        ? <SecretInfo />
        : <Login setIsLoggedIn={setIsLoggedIn}/>
      }
    </>
  );
}

export default App;
