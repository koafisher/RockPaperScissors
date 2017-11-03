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
    }
  }

}

function mainCtrl ($scope, rpsFetcher) {

  $scope.rps = []

  rpsFetcher.get()
    .then(function (data) {
      $scope.rps = data
    })
}
