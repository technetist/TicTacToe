
function initApp() {
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