angular.module( 'crudApp' )
  .controller( 'mainCtrl', function( $firebaseObject, $firebaseAuth, $state, mainSvc, $scope ) {
    console.log( 'MainCtrl is logging' );
    $scope.testMainCtrl = 'mainCtrl is working';
    $scope.testMainSvc = mainSvc.getMainSvc();


    var firebaseRoot = "https://dmecommerce.firebaseio.com/data/";
    var ref = new Firebase( firebaseRoot );
    var authObj = $firebaseAuth( ref );


    $scope.login = function( user ) {
      authObj.$authWithPassword( user ).then( function( authData ) {
        console.log( 'login authData', authData );
        $scope.user = user;
        $scope.authData = authData;
        console.log( $scope.user );
        $state.go( 'crud' );
      }, function( error ) {
        alert( error );
      } );
    };
    $scope.register = function( user ) {
      authObj.$createUser( user ).then( function( userData ) {
        console.log( 'register userData', userData );
        $scope.login( user );
      }, function( error ) {
        alert( error );
      } );
    };
  } );



// inject dependancies, $scope, and service objects
/* the controller is where data is stored to variables
    to be accessed on the DOM.
    $scope. is the required prefix for DOM passing
    */
/* the controller also is responsible for running the
    funtions stored elswhere in the object/filestructure
    by assigning it to the $scope. It is a lazy manager,
    who keeps track of work being performed, issues
    commands and readies responses to be delivered to
    the DOM*/