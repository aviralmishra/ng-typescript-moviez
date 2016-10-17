var app;
(function (app) {
    var common;
    (function (common) {
        var SearchService = (function () {
            function SearchService($http, $q) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.searchByText = function (query) {
                    return _this.$http.get('http://www.omdbapi.com/?r=json&s=' + encodeURIComponent(query))
                        .then(_this.success)
                        .catch(_this.fail);
                };
                this.searchById = function (imdbID) {
                    return _this.$http.get('http://www.omdbapi.com/?r=json&i=' + imdbID)
                        .then(_this.success)
                        .catch(_this.fail);
                };
                this.success = function (response) { return response.data; };
                this.fail = function (error) {
                    return _this.$q.reject(error.data.description);
                };
            }
            SearchService.$inject = ['$http', '$q'];
            return SearchService;
        }());
        common.SearchService = SearchService;
        angular
            .module('app.common')
            .service('searchService', SearchService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
