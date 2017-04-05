/**
 * Music Track Application
 * Author MadhankumarJ <madhankumar028@gmail.com>
 * 
 */

(function() {

    'use strict';

    angular
    .module('app', [
                    'ui.router',
                    'ngResource',

                    'app.home'                 
                    ])
    .config(Config);

    Config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function Config($urlRouterProvider, $stateProvider) {
        
        $stateProvider
        .state('home', {
            name: '/home',
            url: '/home',
            templateUrl: 'client/views/home.html',
            controller: 'HomeController as HomeCtrl'
        });

        // Default Route
        $urlRouterProvider.otherwise('/home');        
    }
}())