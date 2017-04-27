
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


    // document.getElementById('play').addEventListener('click', createGame);


          function userExistsCallback(opponentId, exists) {
            if (exists) {
              alert('connecting you with user ' + opponentId + '!');
              // window.location.href = "/game.html";
              createGame(opponentId);
              setTimeout(function() {
                window.location.href = "/game.html" + '?' + gameKey;
              }, 1000);

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

            /**
     * Create instance for games.
     */
    function createGame(opponentId) {
      var fbId = location.search.slice(1);
      
      var firebaseRef = firebase.database();
      var gamesRef = firebaseRef.ref('Games');
      var gameData = {
        user1: opponentId,
        user2: fbId
      };
      var gameQuery = gamesRef.push().set(gameData);
      var gameKey = gameQuery.key;
      

    }

    window.onload = function() {
      	initApp();
    };