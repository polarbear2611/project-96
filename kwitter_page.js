var firebaseConfig = {
      apiKey: "AIzaSyB3BkL3v7MAHw-qIM4jzTdmooIDbk5D01M",
      authDomain: "kwitter-22de3.firebaseapp.com",
      databaseURL: "https://kwitter-22de3-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "kwitter-22de3",
      storageBucket: "kwitter-22de3.appspot.com",
      messagingSenderId: "282058784380",
      appId: "1:282058784380:web:befc0ec88be8be001493f9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
       name : user_name,
       message : msg,
       like : 0     
      });
      document.getElementById("msg").innerHTML = "";
}
