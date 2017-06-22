export default routesConfig

/** @ngInject */
/**
 * configure routes
 * @param {angular.ui.IStateProvider} $stateProvider
 * @param {angular.ui.IUrlRouterProvider} $urlRouterProvider
 * @param {angular.ILocationService} $locationProvider
 */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!')
  $urlRouterProvider.otherwise('/')

  $stateProvider
    // .state('app', {url: '/', component: 'app'})
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controllerAs: 'postsCtrl',
      controller: 'PostsController'})

    .state('comments', {
      url: '/comments/:id',
      templateUrl: 'partials/comments.html',
      controllerAs: 'commentsCtrl',
      controller: 'CommentsController'})
}
