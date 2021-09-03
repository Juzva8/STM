import firebase from "firebase"


// const firebaseConfig = {
//     apiKey: "AIzaSyBZg4yVPzclt3l6M9jsgqO1aTeZ4HhwQ9c",
//     authDomain: "stm-athlete.firebaseapp.com",
//     projectId: "stm-athlete",
//     storageBucket: "stm-athlete.appspot.com",
//     messagingSenderId: "1678441384",
//     appId: "1:1678441384:web:52382c0493205c67567b9d",
//     measurementId: "G-S5GK537VKF"
//   };


const firebaseConfig = {
  apiKey: "AIzaSyAl3PjS5unI3_4n9d3W_ZvxR2Cy8Glxdso",
  authDomain: "stmathlete.firebaseapp.com",
  projectId: "stmathlete",
  storageBucket: "stmathlete.appspot.com",
  messagingSenderId: "330436210922",
  appId: "1:330436210922:web:a733ebac2c1efca147e793",
  measurementId: "G-SL9TC1FLTK"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage }
  export default db;