// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDAtbMDI2KSNIuyFbg0V0w5eaZ5FxlYvsA",
    authDomain: "prueba-bf929.firebaseapp.com",
    projectId: "prueba-bf929"
  });
  //Inicializando 
  var db = firebase.firestore();

  //Agregar documentos

  //.add agregar un id de manera automatica

function guardar(){
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fecha = document.getElementById('fecha').value;

    db.collection("users").add({
        first: nombre,
        last: apellido,
        born: fecha
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('fecha').value = '';
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}

//Leer datos
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML +=`
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().first}</td>
            <td>${doc.data().last}</td>
            <td>${doc.data().born}</td>
        </tr>
        `
    });
});
  