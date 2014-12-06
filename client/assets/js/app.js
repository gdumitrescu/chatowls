"use strict";

var app = angular.module("app", ["firebase", "ngSanitize"]);

app.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});