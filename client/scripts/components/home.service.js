/**
*Author MadhankumarJ<madhankumar028@gmail.com>
*
*/
(function() {

    'use strict';

    angular
    .module('app.home')
    .service('HomeService', HomeService);

    function HomeService($http, $q) {

        var self = this;

        self.getAllTracks = getAllTracks;
        
        var baseUrl = `http://104.197.128.152:8000/v1/tracks`;

        function getAllTracks() {

            var options = {
                url: `http://104.197.128.152:8000/v1/tracks`,
                method: 'GET',
                cache: true,
                headers: { 'content-type': 'application/json'}
            },
            deferred = $q.defer();

            $http(options)
            .then(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    }

}());