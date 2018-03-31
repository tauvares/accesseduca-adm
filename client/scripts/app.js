'use strict';
angular.module('accesseducaApp', ['ui.router', 'ngResource', 'ngDialog', 'lbServices', 'ui.bootstrap', 'ui.mask', 'images-resizer'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('accesseduca', {
        url: '/',
        views: {
          'cabecalho': {
            templateUrl: 'views/cabecalho.html',
            controller: 'CabecalhoController'
          },
          'conteudo': {
            templateUrl: 'views/telalogin.html',
            controller: 'LoginController'
          }
        }
      })
      .state('accesseduca.facilitadores', {
        url: '',
        views: {
          /*'cabecalho': {
            templateUrl: 'views/cabecalho.html',
            controller: 'CabecalhoController'
          },*/
          'conteudo@': {
            templateUrl: 'views/facilitadores-cadastro.html',
            controller: 'FacilitadoresController'
          }
        }
      })
      ;


    $urlRouterProvider.otherwise('/');
  });
