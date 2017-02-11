angular
  .module('app.components')
  .component('projects', ProjectsComponent())
  .config(ProjectsComponentConfig);

function ProjectsComponent() {
  return {
    templateUrl: './projects.html',
    controller: 'ProjectsController',
    bindings: {
      projects: '<'
    }
  };
}

function ProjectsComponentConfig($stateProvider) {
  var state = {
    name: 'projects',
    url: '/projects',
    component: 'projects',
    resolve: {
      projects: ['ProjectsService', function(ProjectsService) {
        return ProjectsService.fetchAll();
      }]
    },
    data: {
      pageTitle: 'Projects'
    }
  };

  $stateProvider.state(state);
}
