namespace BlingHttp.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        public saveMovie(movie) {
            return this.MovieResource.save(movie).$promise;
        }

        public getMovie(id) {
            return this.MovieResource.get({id:id});
        }
        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies/:id');
        }
    }

    angular.module('BlingHttp').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('BlingHttp').service('myService', MyService);
    }
