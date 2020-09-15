// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQcnD330xVOqi4YqFznV3qiZBQz-ttUJI",
  authDomain: "finman-expense-app-b0994.firebaseapp.com",
  databaseURL: "https://finman-expense-app-b0994.firebaseio.com",
  projectId: "finman-expense-app-b0994",
  storageBucket: "finman-expense-app-b0994.appspot.com",
  messagingSenderId: "702093640392",
  appId: "1:702093640392:web:84a69bd06981d509b65bfd"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.querySelector('#google_btn').addEventListener('click',function () {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {

        window.localStorage.setItem("name",result.additionalUserInfo.profile.name);
        window.localStorage.setItem("picture",result.additionalUserInfo.profile.picture);

        window.location.href='home.html';

    }).catch(function(error) {

        console.log("Login Failed");
    });
})

