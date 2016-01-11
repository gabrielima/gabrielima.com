(function(){
  'use strict';

  angular
    .module('portfolio', ['ngRoute', 'ngSanitize'])
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$routeProvider'];
  appRun.$inject = ['$rootScope'];

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        title: 'Home'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        title: 'Projects'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        title: 'Blog'
      })
      .when('/post/:slug', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        title: ''
      })
      .otherwise({
        redirectTo: '/'
      })
  }

  function appRun($rootScope) {
    $rootScope
      .$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
      });
  }

}());

(function(){
  'use strict';

  angular
    .module('portfolio')
    .service('TitleService', TitleService);

  TitleService.$inject = ['$rootScope'];

  function TitleService($rootScope) {
    var func = {
      setTile: function(title){
        $rootScope.title = title;
      }
    }

    return func;
  }

}());

(function(){
  'use strict';

  angular
    .module('portfolio')
    .controller('BlogCtrl', BlogCtrl);

  BlogCtrl.$inject = ['$scope', '$http', 'TitleService'];

  function BlogCtrl($scope, $http, TitleService) {
    TitleService.setTile = 'Blog';

    $scope.posts = {};

    $http
      .get('models/posts.json')
      .then(function(d){
        $scope.posts = d.data.posts;
      });
  }

}());

(function(){
  'use strict';

  angular
    .module('portfolio')
    .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = ['$scope', '$http', 'TitleService'];

  function LandingCtrl($scope, $http, TitleService) {
    TitleService.setTile = 'Home';

    $scope.formData = {};
    $scope.formData.form_status = true;
    $scope.formData.form_message = '';

    $scope.projects = {};
    $scope.posts = {};

    $http
      .get('models/projects.json')
      .then(function(d){
        $scope.projects = d.data.projects;
      });

    $http
      .get('models/posts.json')
      .then(function(d){
        $scope.posts = d.data.posts;
      });


    $scope.form_submit = function(){
      $http
        .post('send.php', $scope.formData)
        .then(function(data) {
          if (data !== 'success') {
            $scope.formData.form_status = false;
            $scope.formData.form_message = 'An error has occurred';
          } else {
            $scope.formData.form_status = true;
            $scope.formData.form_message = 'Message sent. Thank You !';
          }
        });
    }
  }

}());

(function(){
  'use strict';

  angular
    .module('portfolio')
    .controller('PostCtrl', PostCtrl);

  PostCtrl.$inject = ['$scope', '$http', '$routeParams', 'TitleService'];

  function PostCtrl($scope, $http, $routeParams, TitleService) {
    var slug = $routeParams.slug;
    var converter = new showdown.Converter();

    $http
      .get('models/posts/' + slug + '.md')
      .then(function(d){
        $scope.content = converter.makeHtml(d.data);
      });

    $http
      .get('models/posts.json')
      .then(function(d){
        var post = d.data.posts.filter(function(p){
          return p.slug === slug;
        });
        $scope.post_tags = post[0].tags;
        TitleService.setTile = post[0].title;
      });
  }

}());

(function(){
  'use strict';

  angular
    .module('portfolio')
    .controller('ProjectsCtrl', ProjectsCtrl);

  ProjectsCtrl.$inject = ['$scope', '$http', 'TitleService'];

  function ProjectsCtrl($scope, $http, TitleService) {
    TitleService.setTile = 'Projects';

    $scope.projects = {};

    $http
      .get('models/projects.json')
      .then(function(d){
        $scope.projects = d.data.projects;
      });
  }

}());

