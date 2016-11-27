angular
  .module('app.components')
  .controller('PostController', PostController);

function PostController() {
  var ctrl = this;
  var converter = new showdown.Converter();
  ctrl.post = converter.makeHtml(ctrl.post);
}
