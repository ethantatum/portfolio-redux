$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBE738aqdIF0ltwkHWXhONL7CI6XHnahjQ",
        authDomain: "updated-portfolio.firebaseapp.com",
        databaseURL: "https://updated-portfolio.firebaseio.com",
        projectId: "updated-portfolio",
        storageBucket: "updated-portfolio.appspot.com",
        messagingSenderId: "958988917176"
      };
      firebase.initializeApp(config);

    // Create a variable to reference the database
    const database = firebase.database();

    //Provides initial data to Firebase database
    //database.ref().push({
        //URL: saveURL,
        //dateAdded: firebase.database.ServerValue.TIMESTAMP
    //}); // Closes database.ref.push function























}); // Ends document.ready function