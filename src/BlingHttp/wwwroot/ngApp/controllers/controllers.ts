namespace BlingHttp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;
        public search;

        constructor(movieService: BlingHttp.Services.MovieService) {
            this.movies = movieService.listMovies();
        };


        //public fetch() {
        //    if (this.search) {
        //        this.$http.get(`/api/movies/search/${this.search}`)
        //            .then((response) => { this.movies = response.data; })
        //    }


    }
    
    export class AddMovieController {
        public newMovie; 

        public addMovie() {
            this.movieService.saveMovie(this.newMovie).then(() => this.$state.go
                ("Home"));

        }

        constructor(private movieService: BlingHttp.Services.MovieService,
            private $state: ng.ui.IStateService) { }
    }

    export class EditMovieController {
        public movie;

        public editMovie() {
            this.movieService.saveMovie(this.movie).then(
                () => this.$state.go("Home")
            );
        }

        constructor(
            private movieService: BlingHttp.Services.MovieService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ) { 
            this.movie = movieService.getMovie($stateParams['id']);
           
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
