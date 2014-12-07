/* global describe, beforeEach, inject, it, expect */

"use strict";

describe("Controller: LoginController", function () {

  beforeEach(function() {
    module("mock.firebase");
    module("app");
  });

  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();

    $controller("HeaderController", {
      $scope: scope,
    });
  }));

  describe("#logout", function() {
    it("logs out the current user", function() {
    });
    it("clears current session", function() {
    });
  });
});
