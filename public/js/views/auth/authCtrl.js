angular.module( 'crudApp' )
  .controller( 'authCtrl', function( $scope, mainSvc ) { // inject dependancies, $scope and Svc's
    console.log( 'authCtrl is logging inside' );
    $scope.testauthCtrl = 'authCtrl is working';




  } );





console.log( 'authCtrl is logging outside' );

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