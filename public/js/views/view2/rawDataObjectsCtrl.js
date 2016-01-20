angular.module('crudApp')
  .controller('rawDataObjectsCtrl', function($scope, mainSvc, crudSvc) { // inject dependancies, $scope, and service objects
    $scope.testrawDataObjectsCtrl = 'rawDataObjectsCtrl is working';
    console.log('rawDataObjectsCtrl: rawDataObjectsCtrl is linking up');
});
