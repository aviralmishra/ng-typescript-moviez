module app.favourites {
    interface IFavouritesCtrl {
        title: string;
        favourites: app.common.model.IMovie[];

        getFavourites: () => app.common.model.IMovie[];
        goBack: () => void;
    }

    class FavouritesCtrl implements IFavouritesCtrl {
        title: string;
        favourites: app.common.model.IMovie[];

        static $inject: Array<string> = ['$window', 'favouritesService'];
        constructor(private $window: ng.IWindowService,
            private _favouritesService: app.common.FavouritesService) {

            this.title = "My Favourites";
            this.favourites = _favouritesService.getFavourites();

            console.log('Loaded My Favourites View.');
        }

        getFavourites() {
            this.favourites = this._favouritesService.getFavourites();
            return this.favourites;
        }

        goBack() {
            this.$window.history.back();
        }
    }

    angular
        .module('app.favourites')
        .controller('favouritesCtrl', FavouritesCtrl);
}
