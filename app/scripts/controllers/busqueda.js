'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:BusquedaCtrl
 * @description
 * # BusquedaCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('BusquedaCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };

     //Se inicializan variables
    $scope.query = {};
    $scope.queryBy = '$'; //implica buscar en todo
    $scope.ordenarPor = 'nombre';

    $scope.inicio = function(){
      console.log("funcion de inicio");
    };

    $scope.ventas = [
    {
      nombre: "Sebastian",
      producto: "Caramelo",
      precio: "50"
    },
    {
      nombre: "Andres",
      producto: "Chocolate",
      precio: "300"
    },
    {
      nombre: "Ignacio",
      producto: "Galleta",
      precio: "150"
    },
    {
      nombre: "Benito",
      producto: "Empanada",
      precio: "600"
    },
    {
      nombre: "Matias",
      producto: "Chicle",
      precio: "100"
    }
    ]

  });
