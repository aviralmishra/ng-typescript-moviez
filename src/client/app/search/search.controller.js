var app;
(function (app) {
    var search;
    (function (search) {
        var SearchCtrl = (function () {
            function SearchCtrl($q, $location, $routeParams, _searchService, _favouritesService) {
                this.$q = $q;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this._searchService = _searchService;
                this._favouritesService = _favouritesService;
                this.title = 'Search';
                this.response = false;
                this.query = $routeParams.query;
                this.error = '';
                this.movies = [];
                if (this.query) {
                    var promises = [this.searchTitle()];
                    this.$q.all(promises).then(function () {
                        console.log('Loaded Search Results View.');
                    });
                }
                else {
                    console.log('Loaded Search View.');
                }
            }
            SearchCtrl.prototype.searchTitle = function () {
                var _this = this;
                return this._searchService.searchByText(this.query).then(function (data) {
                    var response = data.Search;
                    if (response) {
                        _this.movies = _this.getTitles(response);
                        _this.response = !!data.Response;
                        _this.error = data.Error;
                    }
                    else {
                        _this.movies = [];
                        _this.response = true;
                        _this.error = data.Error;
                    }
                    _this.$location.path('/search/' + _this.query);
                    return _this.movies;
                });
            };
            SearchCtrl.prototype.addToFavourites = function (favoured) {
                this._favouritesService.addToFavourites(favoured);
            };
            SearchCtrl.prototype.isFavourite = function (imdbID) {
                return this._favouritesService.isFavourite(imdbID);
            };
            SearchCtrl.prototype.getTitles = function (response) {
                var results = response.filter(function (result) {
                    return result.Title && result.Poster !== 'N/A' && result.imdbID !== 'N/A';
                });
                var titles = [];
                (function (searchService, movies) {
                    results.forEach(function (result, index) {
                        searchService.searchById(result.imdbID).then(function (data) {
                            titles.push(data);
                        });
                    });
                }(this._searchService, titles));
                return titles;
            };
            SearchCtrl.$inject = ['$q', '$location', '$routeParams', 'searchService', 'favouritesService'];
            return SearchCtrl;
        }());
        angular
            .module('app.search')
            .controller('searchCtrl', SearchCtrl);
    })(search = app.search || (app.search = {}));
})(app || (app = {}));
