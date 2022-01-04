 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDAtbMDI2KSNIuyFbg0V0w5eaZ5FxlYvsA",
    authDomain: "prueba-bf929.firebaseapp.com",
    projectId: "prueba-bf929",
    storageBucket: "prueba-bf929.appspot.com",
    messagingSenderId: "940424741741",
    appId: "1:940424741741:web:49e7221520f176203a1064",
    measurementId: "G-LWJT736GZJ"
  };
  firebase.initializeApp(config);

  // Obtener Elementos
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');
    
  // Vigilar selección archivo
  fileButton.addEventListener('change', function(e) {
    //Obtener archivo
    var file = e.target.files[0];

    // Crear un storage ref
    var storageRef = firebase.storage().ref('Images/' + document.getElementById('nombre').value+" "
    + document.getElementById('apellido').value + "-"+ file.name);


    // Subir archivo
    var task = storageRef.put(file);

  });
