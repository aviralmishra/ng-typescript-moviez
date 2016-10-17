module app {
  var main = angular.module('moviezApp', [
    'ngRoute',
    'app.common',
    'app.search',
    'app.favourites'
  ]);

  main.config(routeConfig);
  routeConfig.$inject = ["$routeProvider"];

  function routeConfig($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
      .when('/', {
        templateUrl: 'app/search/search.html',
        controller: 'searchCtrl',
        controllerAs: 'pm'
      })
      .when('/search/:query', {
        templateUrl: 'app/search/search.html',
        controller: 'searchCtrl',
        controllerAs: 'pm'
      })
      .when('/favourites', {
        templateUrl: 'app/favourites/favourites.html',
        controller: 'favouritesCtrl',
        controllerAs: 'pm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}
