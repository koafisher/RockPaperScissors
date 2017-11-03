var app = window.angular.module('app', [])

app.factory('rpsFetcher', rpsFetcher)
app.controller('mainCtrl', mainCtrl)

function rpsFetcher ($http) {

  var API_ROOT = 'RPS'
  return {
    
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    },
    
    getRock: function () {
      var rock = "/rock";
      return $http
        .get(rock)
        .then(function (resp) {
          return resp.data
        })
    },
    
    getPaper: function () {
      var paper = "/paper";
      return $http
        .get(paper)
        .then(function (resp) {
          return resp.data
        })
    },
    
    getScissor: function () {
      var scissor = "/scissor";
      return $http
        .get(scissor)
        .then(function (resp) {
          return resp.data
        })
    }
    
  }

}

function mainCtrl ($scope, rpsFetcher, $http) {

  $scope.rps = []

  rpsFetcher.get()
    .then(function (data) {
      $scope.rps = data
    })
    
  $scope.DoSomething = function(selection) {
    console.log(selection)
    
    if(selection === "rock") {
      rpsFetcher.getRock()
        .then(function (data){
          $scope.result = data;
        })
    } else if (selection === "paper") {
      rpsFetcher.getPaper()
        .then(function (data){
          $scope.result = data;
        })
    } else {
      rpsFetcher.getScissor()
        .then(function (data){
          $scope.result = data;
        })
    }
    
  };
  
}
