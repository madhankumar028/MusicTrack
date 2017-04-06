(function() {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    HomeCtrl.$inject = ['HomeService'];

    function HomeCtrl(HomeService) {

        this.title = 'Music Track!';
        this.getAllTracks = getAllTracks();

        function getAllTracks() {
            var tracks;
            tracks = HomeService.getAllTracks();
            tracks.then(function() {

            });
        }
    }
}());
