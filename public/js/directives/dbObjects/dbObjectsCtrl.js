angular.module( 'crudApp' )
  .controller( 'dbObjectsCtrl', function( $scope, $state, $firebaseObject, dbObjectsSvc, mainSvc, $interval ) { // inject dependancies, $scope, and service objects
    // @@@@@@@@@@@@@@@@@@@ Testing for connectivity@@@@@@@@@@@@@@@@@@@
    // @@    // adding/logging tests for dbObjectsCtrl to the DOM      @@
    // @@    // $scope.testdbObjectsCtrl = 'dbObjectsCtrl is working';    @@
    // @@    // console.log('dbObjectsCtrl is logging');               @@
    // @@    // adding tests for dbObjectsSvc to the DOM               @@
    // @@    // this.testdbObjectsSvc = dbObjectsSvc.testdbObjectsSvc();     @@
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // Obtain a reference to the dbObjects element
    // using its id.
    if ( !$scope.$parent.authData ) {
      console.log( "Hmmm" );
      $state.go( 'landing' );
    }

    //  declaring global variables
    var cursorStatus = mainSvc.getCursorStatus();

  } );

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