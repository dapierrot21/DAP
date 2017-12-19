angular.module("dap", []) // Dont forget that empty array
.controller('helloWorld', function($scope) {
  $scope.helloWorld = function() {
    console.log("you made your first controller! now dont forget it!");
  };
});
