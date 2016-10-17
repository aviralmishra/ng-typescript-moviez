var app;
(function (app) {
    var favourites;
    (function (favourites) {
        var FavouritesCtrl = (function () {
            function FavouritesCtrl($window, _favouritesService) {
                this.$window = $window;
                this._favouritesService = _favouritesService;
                this.title = "My Favourites";
                this.favourites = _favouritesService.getFavourites();
                console.log('Loaded My Favourites View.');
            }
            FavouritesCtrl.prototype.getFavourites = function () {
                this.favourites = this._favouritesService.getFavourites();
                return this.favourites;
            };
            FavouritesCtrl.prototype.goBack = function () {
                this.$window.history.back();
            };
            FavouritesCtrl.$inject = ['$window', 'favouritesService'];
            return FavouritesCtrl;
        }());
        angular
            .module('app.favourites')
            .controller('favouritesCtrl', FavouritesCtrl);
    })(favourites = app.favourites || (app.favourites = {}));
})(app || (app = {}));
