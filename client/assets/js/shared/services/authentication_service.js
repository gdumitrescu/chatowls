/* global app, Firebase, fAuth, fAuthData */

(function() {

  "use strict";

  app.factory("AuthenticationService",
    function(
      $log, $firebaseAuth, $location, $rootScope, $localStorage,
      FIREBASE_URL) {
      return function() {
        var that = this;

        that.fAuth = new Firebase(FIREBASE_URL + "/users");
        that.fAuthData = fAuth.getAuth();

        that.checkIfUserExists = function(user) {
          that.fAuth.child(user).once("value", function(snapshot) {
            return (snapshot.val() !== null);
          });
        };

        that.authUsingFacebook = function() {
          that.fAuth.authWithOAuthPopup("facebook", function(error, authData) {
            if (typeof authData === "undefined") {
              return false;
            }
            return true;
          });
        };

        that.authUsingTwitter = function() {
          that.fAuth.authWithOAuthPopup("twitter", function(error, authData) {
            if (typeof authData === "undefined") {
              return false;
            }
            return true;
          });
        };


        that.authUsingGithub = function() {
          that.fAuth.authWithOAuthPopup("github", function(error, authData) {
            if (typeof authData === "undefined") {
              return false;
            }
            return true;
          });
        };

        that.authUsingGplus = function() {
          that.fAuth.authWithOAuthPopup("google", function(error, authData) {
            if (typeof authData === "undefined") {
              return false;
            }
            return true;
          });
        };

        that.unauth = function() {
          that.fAuth.unauth();
          localStorage.removeItem("currentUser");
          $rootScope.currentUser = null;
          window.location.href = "/";
        };

        that.fAuth.onAuth(function(authData) {
          if (typeof authData !== "undefined" && authData !== null) {
            var isNewUser = !that.checkIfUserExists(authData.uid);
            if (authData && isNewUser) {
              that.fAuth.child(authData.uid).set(authData);
            }
            window.location.href = "/";
            that.fAuthData = authData;
            $rootScope.currentUser = that.getInfo();
          }
        });

        that.getInfo = function() {
          var data = {};
          data.uid = fAuthData.uid;
          data.provider = fAuthData.provider;
          data.lang = "en";
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

          localStorage.setItem("currentUser", JSON.stringify(data));
          return data;
        };

        return that;

      };
    });

}());
