// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDAtbMDI2KSNIuyFbg0V0w5eaZ5FxlYvsA",
    authDomain: "prueba-bf929.firebaseapp.com",
    projectId: "prueba-bf929"
  });
  
  var db = firebase.firestore();
  db.collection("users").add({
    first: "Deya",
    last: "Programming",
    born: 2021
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});