var fAuth = new Firebase("https://chatowls.firebaseio.com/users");

var fAuthData = fAuth.getAuth();

var checkIfUserExists = function(u_id) {
            fAuth.child(u_id).once('value', function(snapshot) {
              return (snapshot.val() !== null);
            });
}

var authUsingFacebook = function(){
            fAuth.authWithOAuthPopup("facebook", function(error, authData){
                if(typeof authData === "undefined") return false;
                return true;
            });
};

var authUsingTwitter = function(){
            fAuth.authWithOAuthPopup("twitter", function(error, authData){
                if(typeof authData === "undefined") return false;
                return true;
            });
};


var authUsingGithub = function(){
            fAuth.authWithOAuthPopup("github", function(error, authData){
                if(typeof authData === "undefined") return false;
                return true;
            });
};


var authUsingGplus = function(){
            fAuth.authWithOAuthPopup("google", function(error, authData){
                if(typeof authData === "undefined") return false;
                return true;
            });
};
    
var unauth = function(){
            fAuth.unauth();
}