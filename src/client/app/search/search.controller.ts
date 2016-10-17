module app.search {
  interface ISearchCtrl {
    title: string;
    response: boolean;
    query: string;
    error: string;
    movies: app.common.model.IMovie[];

    searchTitle: () => ng.IPromise<Array<app.common.model.IMovie>>;
    addToFavourites: (favoured: app.common.model.IMovie) => void;
    isFavourite: (imdbID: string) => boolean;
  }

  interface ISearchParams extends ng.route.IRouteParamsService {
    query: string;
  }

  class SearchCtrl
    implements ISearchCtrl {

    title: string;
    response: boolean;
    query: string;
    error: string;
    movies: app.common.model.IMovie[];

    static $inject: Array<string> = ['$q', '$location', '$routeParams', 'searchService', 'favouritesService'];
    constructor(private $q: ng.IQService,
      private $location: ng.ILocationService,
      private $routeParams: ISearchParams,
      private _searchService: app.common.SearchService,
      private _favouritesService: app.common.FavouritesService) {

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
      } else {
        console.log('Loaded Search View.');
      }
    }

    searchTitle() {
      return this._searchService.searchByText(this.query).then((data) => {

        let response = data.Search;

        if (response) {
          this.movies = this.getTitles(response);
          this.response = !!data.Response;
          this.error = data.Error;
        } else {
          this.movies = [];
          this.response = true;
          this.error = data.Error;
        }
        this.$location.path('/search/' + this.query);

        return this.movies;
      });
    }

    addToFavourites(favoured: app.common.model.IMovie) {
      this._favouritesService.addToFavourites(favoured);
    }

    isFavourite(imdbID: string) {
      return this._favouritesService.isFavourite(imdbID);
    }

    private getTitles(response) {
      var results = response.filter(function (result) {
        return result.Title && result.Poster !== 'N/A' && result.imdbID !== 'N/A';
      });

      let titles: app.common.model.IMovie[] = [];

      (function (searchService, movies) {
        results.forEach(function (result, index) {
          searchService.searchById(result.imdbID).then((data) => {
            titles.push(data);
          });
        });
      } (this._searchService, titles));

      return titles;
    }
  }
  angular
    .module('app.search')
    .controller('searchCtrl', SearchCtrl);
}


