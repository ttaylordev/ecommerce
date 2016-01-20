angular.module('crudApp')
  .service('dbObjectsSvc', function() {

    this.testdbObjectsSvc = function(){
      var dbObjectsSvcIsLoading = 'dbObjectsSvc is loading';
      // console.log('From: dbObjectsSvc via dbObjectsCtrl: dbObjectsSvc is logging');
      return dbObjectsSvcIsLoading;
    };

  });


  // most functions are stored from the service, similar to a model/view structure
  // the service is injected(passed) as a dependancy into the controller
  // the functions are called/initialized by the controller object
  // the controller injects them into the DOM using $scope.
