angular
  .module('app.common', [
    'app.core',
    'templates'
  ])
  .config(CommonConfig);

function CommonConfig($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
  var state = {
    name: '404',
    url: '/404',
    templateUrl: './404.html',
    resolve: {},
    data: {
      pageTitle: '404'
    }
  };

  $stateProvider.state(state);

  $urlRouterProvider
    .when('', '/')
    .when('/', '/home')
    .otherwise('/404');
}
