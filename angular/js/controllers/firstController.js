chatApp.controller("firstController", function firstController($scope){
  $scope.model= {
      history: ["FirstPerson"]
  };
  $scope.typing=function(newtext){
    if (newtext) {
      $scope.model.history.push(newtext);
    }
  }
});
