namespace BlingHttp {

    angular.module('BlingHttp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: BlingHttp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('Add', {
                url: '/add',
                templateUrl: '/ngApp/views/add.html',
                controller: BlingHttp.Controllers.AddMovieController,
                controllerAs: 'controller'
            })
            .state('Edit', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/edit.html',
                controller: BlingHttp.Controllers.EditMovieController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
