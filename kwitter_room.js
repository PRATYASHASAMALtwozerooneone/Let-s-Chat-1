// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyByPY81QPGmYJ5aYpP0WUKwHpdOkXiWrws",
      authDomain: "let-s-chat-4237b.firebaseapp.com",
      projectId: "let-s-chat-4237b",
      storageBucket: "let-s-chat-4237b.appspot.com",
      messagingSenderId: "893504380505",
      appId: "1:893504380505:web:e576c147420e753ff8db48"
    };
//ADD YOUR FIREBASE LINKS HERE

firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class= 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
     });});}
getData();

function addRoom() 
{
  room_name = document.getElementById("room_name").value;
  firebase.database.ref("/").child(room_name).update({ purpose : "adding room name"});
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";

}
