module app.common {
  export interface ISearchService {
    searchByText: (query: string) => ng.IPromise<any>;
    searchById: (imdbID: string) => ng.IPromise<any>;
  }

  export class SearchService
    implements ISearchService {

    static $inject: Array<string> = ['$http', '$q'];
    constructor(private $http: ng.IHttpService,
      private $q: ng.IQService) {

    }

    searchByText: (query: string) => ng.IPromise<any> = (query: string) =>
      this.$http.get('http://www.omdbapi.com/?r=json&s=' + encodeURIComponent(query))
        .then(this.success)
        .catch(this.fail);

    searchById: (imdbID: string) => ng.IPromise<any> = (imdbID: string) =>
      this.$http.get('http://www.omdbapi.com/?r=json&i=' + imdbID)
        .then(this.success)
        .catch(this.fail);

    private success: (response: any) => {} = (response) => response.data;

    private fail: (error: any) => {} = (error) => {
      return this.$q.reject(error.data.description);
    }
  }

  angular
    .module('app.common')
    .service('searchService', SearchService);
}

