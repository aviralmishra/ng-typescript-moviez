var app;
(function (app) {
    var search;
    (function (search) {
        angular.module('app.search', ['app.common']);
    })(search = app.search || (app.search = {}));
})(app || (app = {}));
