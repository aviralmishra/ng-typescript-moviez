var app;
(function (app) {
    var common;
    (function (common) {
        var model;
        (function (model) {
            var Movie = (function () {
                function Movie(Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Metascore, imdbRating, imdbVotes, imdbID, Type, Response) {
                    this.Title = Title;
                    this.Year = Year;
                    this.Rated = Rated;
                    this.Released = Released;
                    this.Runtime = Runtime;
                    this.Genre = Genre;
                    this.Director = Director;
                    this.Writer = Writer;
                    this.Actors = Actors;
                    this.Plot = Plot;
                    this.Language = Language;
                    this.Country = Country;
                    this.Awards = Awards;
                    this.Poster = Poster;
                    this.Metascore = Metascore;
                    this.imdbRating = imdbRating;
                    this.imdbVotes = imdbVotes;
                    this.imdbID = imdbID;
                    this.Type = Type;
                    this.Response = Response;
                }
                return Movie;
            }());
            model.Movie = Movie;
        })(model = common.model || (common.model = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
