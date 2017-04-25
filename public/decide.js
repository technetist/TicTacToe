

    /**
     * Function called when clicking the Login/Logout button.
     */
    // [START buttoncallback]
    function loginUserOut() {
    	document.getElementById('quickstart-sign-out').textContent = 'Login with Facebook';
    	// [START signout]
        firebase.auth().signOut();
        // [END signout]
        window.location.href = "/index.html";

    }
	document.getElementById('quickstart-sign-out').addEventListener('click', loginUserOut, true);
    

    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {

        
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          var userStatus = "Online";

          document.getElementById('user-name').textContent = user.displayName;


          // Get a reference to the database service
          //var firebaseRef = firebase.database().ref();
          //firebaseRef.push().set(displayName);

          var firebaseRef = firebase.database();
          var usersRef = firebaseRef.ref('Users');
          var userData = {
            name: displayName,
            email: email,
            userId: uid,
            status: userStatus
          };
          usersRef.push(userData);
          console.log(userStatus);
      });
    }


	/**
     * Create instance for games.
     */
    function createGame() {

      // Get a reference to the database service
      var firebaseRef = firebase.database();
      var gamesRef = firebaseRef.ref('Games');
      var gameData = gamesRef.push().set('Rounds');
    }
    document.getElementById('play').addEventListener('click', createGame);




    var USERS_LOCATION = 'https://tictactoe-37965.firebaseio.com/';

          function userExistsCallback(opponentId, exists) {
            if (exists) {
              alert('connecting you with user ' + opponentId + ' exists!');
              window.location.href = "/game.html";

            } else {
              alert('user ' + opponentId + ' does not exist!');
            }
          }

          // Tests to see if /users/<userId> has any data. 
          function checkIfUserExists(opponentId) {
            var usersRef = firebase.database().ref('Users');
            usersRef.child(opponentId).once('value', function(snapshot) {
              var exists = (snapshot.val() !== null);
              userExistsCallback(opponentId, exists);

            });
          }

    window.onload = function() {
      	initApp();
    };