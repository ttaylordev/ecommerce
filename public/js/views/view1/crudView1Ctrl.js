angular.module( 'crudApp' )
  .controller( 'crudCtrl', function( $scope, crudSvc, mainSvc, productsService, $state ) { // inject dependancies, $scope and Svc's
    //logging and testing
    if ( !$scope.$parent.authData ) {
      console.log( "Hmmm" );
      $state.go( 'landing' );
    }
    console.log( 'crudCtrl is logging inside' );
    $scope.testcrudCtrl = 'crudCtrl is working';
  } );

//logging and testing
// console.log('crudCtrl is logging outside');


/* the controller is where data is stored to variables
    to be accessed on the DOM.
    #scope. is the required prefix for DOM passing
    */
/* the controller also is responsible for running the
    funtions stored elswhere in the object/filestructure
    by assigning it to the $scope. It is a lazy manager,
    who keeps track of work being performed, issues
    commands and readies responses to be delivered to
    the DOM*/