var app;
(function (app) {
    var common;
    (function (common) {
        var FavouritesService = (function () {
            function FavouritesService() {
                this.favourites = [];
            }
            FavouritesService.prototype.getFavourites = function () {
                return this.favourites;
            };
            FavouritesService.prototype.addToFavourites = function (favoured) {
                if (!this.isFavourite(favoured.imdbID)) {
                    this.favourites.push(favoured);
                }
            };
            FavouritesService.prototype.isFavourite = function (imdbID) {
                return this.favourites.some(function (fav) {
                    return fav.imdbID === imdbID;
                });
            };
            return FavouritesService;
        }());
        common.FavouritesService = FavouritesService;
        angular
            .module('app.common')
            .service('favouritesService', FavouritesService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
