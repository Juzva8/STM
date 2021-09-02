import firebase from "firebase"
import {connect} from "react-redux"
import { SignInAPI } from "./actions/index";

const firebaseConfig = {
    apiKey: "AIzaSyBZg4yVPzclt3l6M9jsgqO1aTeZ4HhwQ9c",
    authDomain: "stm-athlete.firebaseapp.com",
    projectId: "stm-athlete",
    storageBucket: "stm-athlete.appspot.com",
    messagingSenderId: "1678441384",
    appId: "1:1678441384:web:52382c0493205c67567b9d",
    measurementId: "G-S5GK537VKF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage }
  export default db;