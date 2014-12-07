/* global app*/

"use strict";

app.service("TranslationService", function($log, $firebaseAuth, $location, $rootScope, $http, TRANSLATE_URL, TRANSLATE_APIKEY) {
  this.translate = function(msg, lang, callback) {
    $http({
      url: TRANSLATE_URL,
      method: "GET",
      params: {
        lang: lang,
        text: msg,
        key: TRANSLATE_APIKEY
      }
    }).success(function(data) {
      var translatedText = data.text[0];
      callback(translatedText);
    });
  }
});