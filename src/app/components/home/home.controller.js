angular
  .module('app.components')
  .controller('HomeController', HomeController);

function HomeController(MailService, $window, $scope) {
  var ctrl = this;

  ctrl.limitProjects = 3;
  ctrl.formData = {};
  ctrl.formData.form_status = true;
  ctrl.formData.form_message = '';

  ctrl.$onInit = function() {
    limitProjects();

    angular.element($window).bind('resize', function() {
      limitProjects();
      $scope.$apply();
    });
  };

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

  function limitProjects() {
    ctrl.limitProjects = 3;

    if ($window.innerWidth > 660) {
      ctrl.limitProjects = 5;
    }

    if ($window.innerWidth > 768) {
      ctrl.limitProjects = 7;
    }
  }
}
