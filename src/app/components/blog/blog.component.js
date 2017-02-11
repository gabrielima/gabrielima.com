angular
  .module('app.components')
  .component('blog', BlogComponent())
  .config(BlogComponentConfig);

function BlogComponent() {
  return {
    templateUrl: './blog.html',
    controller: 'BlogController',
    bindings: {
      posts: '<'
    }
  };
}

function BlogComponentConfig($stateProvider) {
  var state = {
    name: 'blog',
    url: '/blog',
    component: 'blog',
    resolve: {
      posts: ['PostsService', function(PostsService) {
        return PostsService.fetchAll();
      }]
    },
    data: {
      pageTitle: 'Blog'
    }
  };

  $stateProvider.state(state);
}
