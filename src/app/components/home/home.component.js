angular
  .module('app.components')
  .component('home', HomeComponent())
  .config(HomeComponentConfig);

function HomeComponent() {
  return {
    templateUrl: './home.html',
    controller: 'HomeController',
    bindings: {
      projects: '<',
      posts: '<'
    }
  };
}

function HomeComponentConfig($stateProvider) {
  var state = {
    name: 'home',
    url: '/home',
    component: 'home',
    resolve: {
      projects: ['ProjectsService', function(ProjectsService) {
        return ProjectsService.fetchAll();
      }],
      posts: ['PostsService', function(PostsService) {
        return PostsService.fetchAll();
      }],
    },
    data: {
      pageTitle: 'Home'
    }
  };

  $stateProvider.state(state);
}
