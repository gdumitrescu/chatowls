/* global describe, beforeEach, inject, it, expect */
"use strict";

describe("Controller: HeaderController", function () {

  beforeEach(function() {
    module('mock.firebase');
    module('app');
  });

  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller("HeaderController", {
      $scope: scope,
    });
  }));

});
