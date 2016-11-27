angular
  .module('app.common')
  .service('ProjectsService', ProjectsService);

function ProjectsService($http) {
  this.fetchAll = function() {
    return $http
      .get('models/projects.json')
      .then(function(res) {
        return res.data;
      });
  };
}
