(function() {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    HomeCtrl.$inject = [];

    function HomeCtrl() {

        this.title = 'Music Track!';        
    }
}());
