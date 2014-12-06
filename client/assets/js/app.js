"use strict";

var app = angular.module("app", ["firebase"]);

app.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});