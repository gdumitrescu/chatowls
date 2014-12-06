app.factory('UserAuthenticationService', function($firebaseAuth){
  return function() {
    var that = this;

    that.fAuth = new Firebase("https://chatowls.firebaseio.com/users");
    that.fAuthData = fAuth.getAuth();


    that.checkIfUserExists = function(u_id) {
      that.fAuth.child(u_id).once('value', function(snapshot) {
        return (snapshot.val() !== null);
      });
    }

    that.authUsingFacebook = function(){
      that.fAuth.authWithOAuthPopup("facebook", function(error, authData){
          if(typeof authData === "undefined") return false;
          return true;
      });
    };

    that.authUsingTwitter = function(){
      that.fAuth.authWithOAuthPopup("twitter", function(error, authData){
        if(typeof authData === "undefined") return false;
        return true;
      });
    };


    that.authUsingGithub = function(){
      that.fAuth.authWithOAuthPopup("github", function(error, authData){
          if(typeof authData === "undefined") return false;
          return true;
      });
    };


    that.authUsingGplus = function(){
      that.fAuth.authWithOAuthPopup("google", function(error, authData){
          if(typeof authData === "undefined") return false;
          return true;
      });
    };

    that.unauth = function(){
      console.log(1);
      that.fAuth.unauth();
      location.href = 'index.html';
    };

    that.fAuth.onAuth(function(authData) {
      var redirect = "messages.html";

      if(typeof authData !== "undefined" && authData != null){
        var isNewUser = !that.checkIfUserExists(authData.uid);
        if (authData && isNewUser) { that.fAuth.child(authData.uid).set(authData); }
        location.href = redirect;
      };
    });

    return that;

  };
});
