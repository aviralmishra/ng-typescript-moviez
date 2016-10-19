var app;
(function (app) {
    var favourites;
    (function (favourites) {
        var FavouritesCtrl = (function () {
            function FavouritesCtrl($window, _favouritesService, _logger) {
                this.$window = $window;
                this._favouritesService = _favouritesService;
                this._logger = _logger;
                this.title = "My Favourites";
                this.favourites = _favouritesService.getFavourites();
                this.activate('Loaded My Favourites View.');
            }
            FavouritesCtrl.prototype.getFavourites = function () {
                this.favourites = this._favouritesService.getFavourites();
                return this.favourites;
            };
            FavouritesCtrl.prototype.goBack = function () {
                this.$window.history.back();
            };
            FavouritesCtrl.prototype.activate = function (msg) {
                this._logger.info(msg);
            };
            FavouritesCtrl.$inject = ['$window', 'favouritesService', 'logger'];
            return FavouritesCtrl;
        }());
        angular
            .module('app.favourites')
            .controller('favouritesCtrl', FavouritesCtrl);
    })(favourites = app.favourites || (app.favourites = {}));
})(app || (app = {}));
