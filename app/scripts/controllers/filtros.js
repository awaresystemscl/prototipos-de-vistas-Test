'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:FiltrosCtrl
 * @description
 * # FiltrosCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('FiltrosCtrl', function ($scope, $http, $filter,$timeout,$q) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };

    $scope.ma = [];
    $scope.ma.min = 0;
    $scope.ma.med = 0;
    $scope.ma.max = 0;
    $scope.chart = []

    //Se inicializan variables
    $scope.query = {};
    $scope.queryBy = '$'; //implica buscar en todo
    $scope.ordenarPor = 'fecha';
    $scope.factores = [
        {factor: "Rendimiento"},
        {factor: "Latencia"},
        {factor: "Tiempo de Respuesta"},
        {factor: "Disponibilidad"},
        {factor: "Confiabilidad"},
    ]

    $scope.inicio = function(){
        $http({
            method: 'GET',
            url: 'http://170.239.84.238/Antiguo/workshop/qos',
            })
        .then(function(response) {
            $scope.ApisQuality = response.data.qos
        }, 
        function(response) { // optional
            console.log(response)
        });

        $http({
            method: 'GET',
            url: 'http://170.239.84.238/Antiguo/workshop/estadistica',
            })
        .then(function(response) {
            $scope.estadistica = response.data.estadistica_percentil
            for (var i = 0; i < $scope.factores.length; i++) {
                console.log($scope.factores[i].factor)
                $scope.agregar($scope.factores[i].factor)
                $scope.mono($scope.factores[i].factor,i)
            }
        }, 
        function(response) { // optional
            console.log(response)
        });
    };

    $scope.mono = function(nombreFactor,posicion){
        angular.forEach($scope.estadistica,function(value,index){
            if(value.factor == nombreFactor){
                if(value.minimo > 2000){
                    value.minimo = 2000
                }
                if(value.medio > 2000){
                    value.medio = 2000
                }
                if(value.maximo > 2000){
                    value.maximo = 2000
                }
                if(value.nivel_factor == "Muy Aceptable"){
                    $scope.chart[posicion].data.rows[0].c[0].v = value.minimo
                    $scope.chart[posicion].data.rows[1].c[0].v = value.medio
                    $scope.chart[posicion].data.rows[2].c[0].v = value.maximo
                }
                if(value.nivel_factor == "Aceptable"){
                    $scope.chart[posicion].data.rows[3].c[0].v = value.minimo
                    $scope.chart[posicion].data.rows[4].c[0].v = value.medio
                    $scope.chart[posicion].data.rows[5].c[0].v = value.maximo
                }
                if(value.nivel_factor == "Normal"){
                    $scope.chart[posicion].data.rows[6].c[0].v = value.minimo
                    $scope.chart[posicion].data.rows[7].c[0].v = value.medio
                    $scope.chart[posicion].data.rows[8].c[0].v = value.maximo
                }
                if(value.nivel_factor == "Poco Aceptable"){
                    $scope.chart[posicion].data.rows[9].c[0].v = value.minimo
                    $scope.chart[posicion].data.rows[10].c[0].v = value.medio
                    $scope.chart[posicion].data.rows[11].c[0].v = value.maximo
                }
                if(value.nivel_factor == "Muy poco Aceptable"){
                    $scope.chart[posicion].data.rows[12].c[0].v = value.minimo
                    $scope.chart[posicion].data.rows[13].c[0].v = value.medio
                    $scope.chart[posicion].data.rows[14].c[0].v = value.maximo
                }
                
            }
        })    
        
    }
    $scope.agregar = function(nombreFactor){
        $scope.chart.push(
            {
              "type": "AreaChart",
              // "cssStyle": "height:200px; width:300px;",
              "data": {
                "cols": [
                    {
                        id: "1",
                        label: nombreFactor,
                        type: "number"
                    },{
                        id: "2",
                        label: "Muy Aceptable",
                        type: "number"
                    },{
                        id: "3",
                        label: "Aceptable",
                        type: "number"
                    },{
                        id: "4",
                        label: "Normal",
                        type: "number"
                    },{
                        id: "5",
                        label: "Poco Acpetable",
                        type: "number"
                    },{
                        id: "6",
                        label: "Muy Poco Acpetable",
                        type: "number"
                    }
                    ],
                    "rows": [
                    {//Muy Aceptable ===========================================
                        c: [{v: 0}, {v: 0}]//Mininimo
                    },{
                        c: [{v: 0}, {v: 1}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}]//Maximo
                    },{//Aceptable =============================================
                        c: [{v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 1}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}]//Maximo
                    },{//Normal ================================================
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 1}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}]//Maximo
                    },{//Poco Aceptable ========================================
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 1}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Maximo
                    },{//Muy Poco Aceptable ====================================
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Minimo
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 1}]//Medio
                    },{
                        c: [{v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}, {v: 0}]//Maximo
                    }]
              },
              "options": {
                "colors": ['#a52714', '#097138','#1e61cc','#1dcc66','#f99407'],
                "title": "Puntos medios",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "chartArea": {width: '60%', left: '15%'},
                "vAxis": {
                  // "title": "Puntos medios",
                  "textPosition": 'none',
                  "gridlines": {
                    "color": 'transparent'
                  }
                },
                "hAxis": {
                    // ticks: [100, 200, 300, 400,500,600,700,800,900,1000,1100,1200,1300],
                  "title": nombreFactor,
                  "gridlines": {
                    count: 12,
                    // "color": 'transparent'
                  }
                }
              },
              "formatters": {},
              "displayed": true
            }
        );
        
    }

    $scope.mostrar = function(){
        console.log($scope.chart[0].data.rows);
        console.log($scope.ma.min);
    }
  });
