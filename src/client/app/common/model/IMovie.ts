module app.common.model {
  export interface IMovie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    Response: string;
  }

  export class Movie implements IMovie {

    constructor(public Title: string,
      public Year: string,
      public Rated: string,
      public Released: string,
      public Runtime: string,
      public Genre: string,
      public Director: string,
      public Writer: string,
      public Actors: string,
      public Plot: string,
      public Language: string,
      public Country: string,
      public Awards: string,
      public Poster: string,
      public Metascore: string,
      public imdbRating: string,
      public imdbVotes: string,
      public imdbID: string,
      public Type: string,
      public Response: string) {
    }
  }
}
