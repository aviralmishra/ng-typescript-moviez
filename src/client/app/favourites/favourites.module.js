var app;
(function (app) {
    var favourites;
    (function (favourites) {
        angular.module('app.favourites', ['app.common']);
    })(favourites = app.favourites || (app.favourites = {}));
})(app || (app = {}));
