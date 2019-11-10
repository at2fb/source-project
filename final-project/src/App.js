import React, { useState, useEffect } from 'react';
import './App.css';
//import firebase from './firebase.js';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebase from './firebase.js';
import Home from './Components/Home';

const firebaseApp = firebase.initializeApp(firebase);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function App() {
  const [number, setNumber] = useState(2);

  const expon = (event) => {
    setNumber(number*number);
  }
  const {
    user,
    signOut,
    signInWithGoogle,
  } = this.props;
  return (
    
    <div className="App">
      <Home/>
      <h1>{number}</h1>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
