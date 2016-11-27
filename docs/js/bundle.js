(function(angular){
'use strict';
(function(){
CommonConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$uiViewScrollProvider"];angular
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
})();
(function(){angular
  .module('app.components', [
    'app.common'
  ]);})();
(function(){
CoreConfig.$inject = ["$compileProvider"];
CoreRun.$inject = ["$transitions", "$state", "$rootScope"];angular
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
})();
(function(){
MailService.$inject = ["$http"];angular
  .module('app.common')
  .service('MailService', MailService);

function MailService($http) {
  this.sendContact = function(formData) {
    return $http.post('mail.php');
  };
}
})();
(function(){
PostsService.$inject = ["$http"];angular
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
})();
(function(){
ProjectsService.$inject = ["$http"];angular
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
})();
(function(){angular
  .module('app.components')
  .controller('BlogController', BlogController);

function BlogController() {
  var ctrl = this;
}
})();
(function(){
HomeController.$inject = ["MailService"];angular
  .module('app.components')
  .controller('HomeController', HomeController);

function HomeController(MailService) {
  var ctrl = this;
  
  ctrl.formData = {};
  ctrl.formData.form_status = true;
  ctrl.formData.form_message = '';

  ctrl.formSubmit = function(){
    MailService
      .sendContact(ctrl.formData)
      .then(function(data) {
        if (data !== 'success') {
          ctrl.formData.form_status = false;
          ctrl.formData.form_message = 'An error has occurred';
        } else {
          ctrl.formData.form_status = true;
          ctrl.formData.form_message = 'Message sent. Thank You !';
        }
      });
  };
}
})();
(function(){angular
  .module('app.components')
  .controller('PostController', PostController);

function PostController() {
  var ctrl = this;
  var converter = new showdown.Converter();
  ctrl.post = converter.makeHtml(ctrl.post);
}
})();
(function(){angular
  .module('app.components')
  .controller('ProjectsController', ProjectsController);

function ProjectsController() {
  var ctrl = this;
}
})();
(function(){
BlogComponentConfig.$inject = ["$stateProvider"];angular
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
      posts: function(PostsService) {
        return PostsService.fetchAll();
      }
    },
    data: {
      pageTitle: 'Blog'
    }
  };

  $stateProvider.state(state);
}
})();
(function(){
HomeComponentConfig.$inject = ["$stateProvider"];angular
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
      projects: function(ProjectsService) {
        return ProjectsService.fetchAll();
      },
      posts: function(PostsService) {
        return PostsService.fetchAll();
      },
    },
    data: {
      pageTitle: 'Home'
    }
  };

  $stateProvider.state(state);
}
})();
(function(){
PostComponentConfig.$inject = ["$stateProvider"];angular
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
})();
(function(){
ProjectsComponentConfig.$inject = ["$stateProvider"];angular
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
      projects: function(ProjectsService) {
        return ProjectsService.fetchAll();
      }
    },
    data: {
      pageTitle: 'Projects'
    }
  };

  $stateProvider.state(state);
}
})();
(function(){angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./404.html','<section class="section"><h1 class="section__title h2">404</h1><h2 class="section__title h4">Page not found!</h2></section>');
$templateCache.put('./blog.html','<section class="section"><h1 class="section__title h2">All Posts</h1></section><section class="posts"><div ng-repeat="p in $ctrl.posts" class="posts__item"><a ng-href="#/post/{{ p.slug }}">{{ p.title }}</a> <time>{{ p.datetime | date: \'MMMM d, yyyy\'}}</time></div></section>');
$templateCache.put('./home.html','<section class="section home"><div class="home__dialog"><h1 class="home__title">Gabriel Lima</h1><h2 class="h4 home__subtitle">Web Developer</h2></div></section><section class="section about"><h2 class="section__title">About</h2><div class="about__description"><img src="img/gabrielima.jpg" alt="Gabriel Lima" class="about__picture"><p>A computer science student with 5+ years of experience in web development and computer programming with problem solving skills. Brazilian finalist of the ACM Programming Contest of 2013 and member of the Advanced Programming Techniques Team of the Federal University of Goias for two years. Former researcher at the PixelLab - Computer Vision Laboratory. Has been recently on an exchange program at Temple University, Philadelphia, Pennsylvania, and has experience as a web developer at a startup in the silicon valley.</p><a href="resume.pdf" class="btn about__resume">Resume</a></div></section><section class="section projects--home"><h2 class="section__title">Latest Projects</h2><div class="projects--home__wrapper"><a ng-repeat="p in $ctrl.projects | limitTo: 5" ng-href="{{ p.link }}" class="projects--home__item" ng-style="{ backgroundImage: \'url(\\\'\' + p.image + \'\\\')\' }"><h4>{{ p.name }}</h4></a><a href="#/projects" class="projects--home__all"><span>All Projects +</span></a></div></section><section class="section skills"><h2 class="section__title">Skills</h2><ul class="skills__list"><li class="skill">HTML5</li><li class="skill">CSS3</li><li class="skill">Javascript</li><li class="skill">AngularJS</li><li class="skill">JQuery</li><li class="skill">SASS/LESS</li><li class="skill">PHP</li><li class="skill">NodeJS</li><li class="skill">MySQL</li><li class="skill">Firebase</li><li class="skill">Gulp</li><li class="skill">Git</li><li class="skill">C/C++ STL</li><li class="skill">Adobe Photoshop</li></ul></section><section class="section posts--home"><h2 class="section__title">Latest Posts</h2><div class="posts--home__wrapper"><a href="#" ng-repeat="p in $ctrl.posts" ng-href="#/post/{{ p.slug }}" class="posts--home__item"><p>{{ p.title }}</p><time>{{ p.datetime | date: \'MMMM d, yyyy\' }}</time></a></div><a href="#/blog" class="btn posts--home__all">All Posts +</a></section><section class="section contact" id="contact"><h2 class="section__title">Contact</h2><form class="contact__form" ng-submit="formSubmit()"><div><label for="name">Name</label><input class="contact__input" type="text" name="name" ng-model="$ctrl.formData.name"><label for="email">Email</label><input class="contact__input" type="email" name="email" ng-model="$ctrl.formData.email"><label for="subject">Subject</label><input class="contact__input" type="text" name="subject" ng-model="$ctrl.formData.subject"></div><div><label for="message">Message</label><textarea class="contact__input contact__textarea" name="message" ng-model="$ctrl.formData.message"></textarea><span ng-class="$ctrl.formData.form_status ? \'contact__success\' : \'contact__error\'">{{ $ctrl.formData.form_message }} </span><button type="submit" class="btn contact__submit">Send</button></div></form><a href="mailto:rabeloglr@gmail.com" class="btn contact__email">rabeloglr@gmail.com</a></section>');
$templateCache.put('./post.html','<section class="post"><article ng-bind-html="$ctrl.post"></article><div class="post__info"><a ng-repeat="t in post__tags" ui-sref="tag({ name: t.name })" class="btn">{{ t }}</a></div></section>');
$templateCache.put('./projects.html','<section class="section"><h1 class="section__title h2">All Projects</h1></section><section class="section projects"><a ng-repeat="p in $ctrl.projects" class="projects__item" ng-href="{{ p.link }}"><img ng-src="{{ p.image }}" ng-alt="{{ p.name }}"><h3 class="h4">{{ p.name }}</h3><p class="projects__item__type">{{ p.type }} <span ng-show="{{ !p.online }}">- Currently offline</span></p><p>{{ p.technologies.join(" - ") }}</p></a></section>');}]);})();
(function(){angular
  .module('app', [
    'app.core',
    'app.common',
    'app.components'
  ]);
})();})(window.angular);