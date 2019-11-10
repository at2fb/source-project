const firebase = require('firebase');
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-fgjH5OIAou54wacHUGWK8z8uTKwFKBs",
    authDomain: "final-project-1de88.firebaseapp.com",
    databaseURL: "https://final-project-1de88.firebaseio.com",
    projectId: "final-project-1de88",
    storageBucket: "final-project-1de88.appspot.com",
    messagingSenderId: "637458863642",
    appId: "1:637458863642:web:fd05f57806d3775e6563a3",
    measurementId: "G-MF0L42WCJB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  module.exports = firebase;
  