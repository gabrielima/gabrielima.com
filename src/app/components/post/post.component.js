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
      slug: ['$transition$', function($transition$) {
        return $transition$.params().slug;
      }],
      post: ['PostsService', 'slug', function(PostsService, slug) {
        return PostsService.fetch(slug);
      }]
    },
    data: {
      pageTitle: 'Post'
    }
  };

  $stateProvider.state(state);
}
