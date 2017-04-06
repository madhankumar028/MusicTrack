(function() {

    'use strict';

    angular
    .module('app.home')
    .service('HomeService', HomeService);

    function HomeService($http, $q) {

        this.getAllTracks = getAllTracks();
        
        var baseUrl = 'http://104.197.128.152:8000/v1/tracks';

        function getAllTracks() {

            var options = {
                url: '',
                method: 'GET',
                cache: true,
                headers: { 'content-type': 'application/json'}
            },
            deferred = $q.defer();

            function handleSuccess(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            }

            function handleFailure(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            }

            $http(options).success(handleSuccess).error(handleFailure);
        }
    }

}());