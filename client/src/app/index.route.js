export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('tweets', {
      url: '/tweets',
      templateUrl: 'app/components/tweets.html',
      controller: 'TweetsController',
      controllerAs: 'tweets'
    });

  $urlRouterProvider.otherwise('/');
}
