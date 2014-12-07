app.factory('AuthenticationService', function($log, $firebaseAuth, $location, $rootScope){
  return function() {
    var that = this;

    that.fAuth = new Firebase("https://chatowls.firebaseio.com/users");
    that.fAuthData = fAuth.getAuth();


    that.checkIfUserExists = function(u_id) {
      that.fAuth.child(u_id).once('value', function(snapshot) {
        return (snapshot.val() !== null);
      });
    };

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
      that.fAuth.unauth();
      $rootScope.currentUser = null;
      $location.path('/login');
    };

    that.fAuth.onAuth(function(authData) {
      var redirect = "messages";
      console.log(2);
      if(typeof authData !== "undefined" && authData !== null){
        var isNewUser = !that.checkIfUserExists(authData.uid);
        if (authData && isNewUser) { that.fAuth.child(authData.uid).set(authData); }
        $rootScope.currentUser = that.getInfo();
        $location.path("/messages");
      }
    });


    that.getInfo = function() {
        var data = {};

        data.uid = fAuthData.uid;
        data.provider = fAuthData.provider;
        switch (data.provider) {
          case "facebook":
            data.name = fAuthData.facebook.displayName;
            data.pic = "https://graph.facebook.com/" + fAuthData.facebook.cachedUserProfile.id + "/picture";
            break;
          case "twitter":
            data.name = fAuthData.twitter.displayName;
            data.pic = fAuthData.twitter.cachedUserProfile.profile_image_url;
            break;
          case "github":
            data.name = fAuthData.github.displayName;
            data.pic = fAuthData.github.cachedUserProfile.avatar_url;
            break;
          case "google":
            data.name = fAuthData.google.displayName;
            data.pic = fAuthData.google.cachedUserProfile.picture;
            break;
        }

        localStorage.setItem('currentUser', JSON.stringify(data));
        return data;
    };

    return that;

  };
});
