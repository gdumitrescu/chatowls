var fAuth = new Firebase("https://chatowls.firebaseio.com/users");

var fAuthData = fAuth.getAuth();

var checkIfUserExists = function(u_id) {
  fAuth.child(u_id).once('value', function(snapshot) {
    return (snapshot.val() !== null);
  });
}

var authUsingFacebook = function() {
  fAuth.authWithOAuthPopup("facebook", function(error, authData) {
    if (typeof authData === "undefined") return false;
    return true;
  });
};

var authUsingTwitter = function() {
  fAuth.authWithOAuthPopup("twitter", function(error, authData) {
    if (typeof authData === "undefined") return false;
    return true;
  });
};


var authUsingGithub = function() {
  fAuth.authWithOAuthPopup("github", function(error, authData) {
    if (typeof authData === "undefined") return false;
    return true;
  });
};


var authUsingGplus = function() {
  fAuth.authWithOAuthPopup("google", function(error, authData) {
    if (typeof authData === "undefined") return false;
    return true;
  });
};

var unauth = function() {
  fAuth.unauth();
}

var getInfo = function() {
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
  return data;
}
