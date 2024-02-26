// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDQzRiqfATfSReDeKMZmT0jPlB4rcbhJcM",
  authDomain: "cyber-68718.firebaseapp.com",
  projectId: "cyber-68718",
  storageBucket: "cyber-68718.appspot.com",
  messagingSenderId: "369652445667",
  appId: "1:369652445667:web:0e5067292e0f0eed5530d6"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth, firebase};
