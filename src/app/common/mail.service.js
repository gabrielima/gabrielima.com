angular
  .module('app.common')
  .service('MailService', MailService);

function MailService($http) {
  this.sendContact = function(formData) {
    return $http.post('mail.php');
  };
}
