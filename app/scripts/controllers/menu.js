'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('MenuCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $( document ).ready(function(){
        $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
    $('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
    });
    
  });
