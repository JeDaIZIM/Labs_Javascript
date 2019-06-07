chatApp.controller("secondController", function secondController($scope){
  $scope.model= {
      history: ["SecondPerson"]
  };
  $scope.typing=function(newtext){
    if (newtext) {
      $scope.model.history.push(newtext)
    }
  }
});
