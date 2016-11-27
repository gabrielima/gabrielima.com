angular
  .module('app.common')
  .service('PostsService', PostsService);

function PostsService($http) {
  this.fetch = function(slug) {
    return $http
      .get('models/posts/' + slug + '.md')
      .then(function(res) {
        return res.data;
      });
  };

  this.fetchAll = function() {
    return $http
      .get('models/posts.json')
      .then(function(res) {
        return res.data;
      });
  };
}
