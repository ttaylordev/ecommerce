angular.module( 'crudApp' )
  .directive( 'dbObjectsDir', function( mainSvc ) { // inject dependancies, $scope, and service objects
    // console.log('dbObjectsDir is logging');
    return {
      restrict: 'E',
      templateUrl: './js/directives/dbObjects/dbObjectsTmpl.html',
      controller: 'dbObjectsCtrl'
        // link: function(scope, element, attributes){
        //
        // }
    };
  } );