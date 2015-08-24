// Namespace for the application
var app = app || {};

// Use mustache-style syntax for underscore templates
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

$(document).ready(function() {
  L.mapbox.accessToken = 'pk.eyJ1IjoidGFubmVyaG9kZ2VzIiwiYSI6Ijk4NzA0Yjk3NDYwNWUwNWE2NGQzNjI1NjczZjQ3ZTEwIn0.xJPxZDCXsZAJ0Nlc8sxteA';
  app.leaflet = L.mapbox.map('map', 'tannerhodges.c032a577');

  // Feedback View that we want visible at all times
  var feedbackView = new app.FeedbackView();
  $('body').append(feedbackView.render().el);

  app.router = new app.Router();
});
