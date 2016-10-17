module app.common {
    export interface IFavouritesService {
        favourites: app.common.model.IMovie[];

        getFavourites: () => app.common.model.IMovie[];
        addToFavourites: (favoured: app.common.model.IMovie) => void;
        isFavourite: (imdbID: string) => boolean;
    }

    export class FavouritesService
        implements IFavouritesService {
        favourites: app.common.model.IMovie[];

        constructor() {
            this.favourites = [];
        }

        getFavourites() {
            return this.favourites;
        }

        addToFavourites(favoured: app.common.model.IMovie) {
            if (!this.isFavourite(favoured.imdbID)) {
                this.favourites.push(favoured);
            }
        }

        isFavourite(imdbID: string) {
            return this.favourites.some(function(fav) {
                return fav.imdbID === imdbID;
            });
        }
    }

    angular
        .module('app.common')
        .service('favouritesService', FavouritesService);
}
