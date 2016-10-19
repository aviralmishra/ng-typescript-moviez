var app;
(function (app) {
    var common;
    (function (common) {
        angular.module('app.common', [])
            .constant('toastr', toastr);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
