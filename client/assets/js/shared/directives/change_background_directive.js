/* global app */

(function() {

  "use strict";

  app.directive("changeBackground", [function() {
    return {
      restrict: "A",
      link: function(scope, element) {
        element.on("mouseover", function() {
          document.body.style.backgroundColor = this.style.backgroundColor;
        });

        element.on("mouseout", function() {
          document.body.style.backgroundColor = "#fff";
        });
      }
    };
  }]);

}());
