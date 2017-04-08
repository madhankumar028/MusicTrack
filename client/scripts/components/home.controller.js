(function() {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    HomeCtrl.$inject = ['HomeService'];

    function HomeCtrl(HomeService) {

        var self = this;
        self.title = 'Music Track!';
        self.getAllTracks = getAllTracks;

        function getAllTracks() {
            var tracks = HomeService.getAllTracks();
            tracks.then(function(response){
                console.log(response.data);
            });
        }

        self.getAllTracks();
    }
}());
