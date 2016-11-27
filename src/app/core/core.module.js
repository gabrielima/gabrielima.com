angular
  .module('app.core', [
    'ui.router',
    'ngMessages',
    'ngSanitize'
  ])
  .config(CoreConfig)
  .run(CoreRun);

function CoreConfig($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}

function CoreRun($transitions, $state, $rootScope) {
  $transitions.onStart({
    to: function (state) {
      // Edit page title
      $rootScope.title = state.data.pageTitle || state.resolve.post.title;

      return true;
    }
  }, function() {});
}
