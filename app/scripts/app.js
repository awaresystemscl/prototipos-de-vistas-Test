'use strict';

/**
 * @ngdoc overview
 * @name workshopApp
 * @description
 * # workshopApp
 *
 * Main module of the application.
 */
angular
  .module('workshopApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'googlechart'
  ])
  .config(function ($routeProvider, $locationProvider, ChartJsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/filtros', {
        templateUrl: 'views/filtros.html',
        controller: 'FiltrosCtrl',
        controllerAs: 'filtros'
      })
      .when('/busqueda', {
        templateUrl: 'views/busqueda.html',
        controller: 'BusquedaCtrl',
        controllerAs: 'busqueda'
      })
      .when('/formulario', {
        templateUrl: 'views/formulario.html',
        controller: 'FormularioCtrl',
        controllerAs: 'formulario'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      // Configure all charts
      ChartJsProvider.setOptions({
        chartColors: ['#FF5252', '#FF8A80'],
        responsive: true
      });
      // Configure all line charts
      ChartJsProvider.setOptions('line', {
        showLines: true
      });

  });
