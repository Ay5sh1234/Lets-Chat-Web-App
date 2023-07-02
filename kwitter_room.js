
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBJEUFxKMCdP5iupltqsnm7QL2HyEBZDg8",
      authDomain: "chatting-643ae.firebaseapp.com",
      databaseURL: "https://chatting-643ae-default-rtdb.firebaseio.com",
      projectId: "chatting-643ae",
      storageBucket: "chatting-643ae.appspot.com",
      messagingSenderId: "312550617777",
      appId: "1:312550617777:web:ef1bdc6aa61ed3b0376890",
      measurementId: "G-ZKEDMNXBBH"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}