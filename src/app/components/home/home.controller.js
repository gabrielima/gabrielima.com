angular
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
