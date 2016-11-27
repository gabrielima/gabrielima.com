angular
  .module('app.components')
  .component('post', PostComponent())
  .config(PostComponentConfig);

function PostComponent() {
  return {
    templateUrl: './post.html',
    controller: 'PostController',
    bindings: {
      slug: '<',
      post: '<'
    }
  };
}

function PostComponentConfig($stateProvider) {
  var state = {
    name: 'post',
    url: '/post/:slug',
    component: 'post',
    resolve: {
      slug: function($transition$) {
        return $transition$.params().slug
      },

      post: function(PostsService, slug) {
        return PostsService.fetch(slug);
      }
    },
    data: {}
  };

  $stateProvider.state(state);
}
