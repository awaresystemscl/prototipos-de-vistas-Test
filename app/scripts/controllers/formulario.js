'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('FormularioCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };
    $scope.venta = {}
    $scope.enviar = function(){
    	$http({
            method: 'POST',
            url: 'http://170.239.84.238/workshop/ventas',
            data: $scope.venta
            })
    	.then(function(response) {
            console.log(response)
        }, 
        function(response) { // optional
            console.log(response)
        });
    };

    $scope.enviarGo = function(){
        $http({
            method: 'POST',
            url: 'http://170.239.84.238:8350/todos',
            data: $scope.venta
            })
        .then(function(response) {
            console.log(response)
        }, 
        function(response) { // optional
            console.log(response)
        });
    };


  });
