angular.module( 'crudApp' )
  .service( 'mainSvc', function( $firebaseObject, $firebaseArray, $firebaseAuth ) {
    var baseUrl = 'https://dmecommerce.firebaseio.com/data';

    console.log( 'mainSvc is logging from within itself' );
    // console.log('mainSvc is logging from: mainSvc.');
    this.getMainSvc = function() {
      var mainSvc = 'mainSvc is loading';
      return mainSvc;
    };

  } );
//
//     this.loggedIn = function() {};
//
//     var firebaseRoot = "https://dmecommerce.firebaseio.com/data";
//     var ref = new Firebase( firebaseRoot );
//     var authObj = $firebaseAuth( ref );
//     // Assign authObj to scope for inline calls in the view
//     this.authObj = authObj;
//     // Use $onAuth listener to keep this.authData synced. Also sync scope.user.
//     authObj.$onAuth( function( authData ) {
//       this.authData = authData;
//       if ( authData ) { // Set up user object if authData present
//         var userRef = new Firebase( firebaseRoot + '/users/' + authData.uid ),
//           user = $firebaseObject( userRef );
//         user.$loaded().then( function( user ) { // Wait for user to be loaded before setting user details
//           user.lastLogin = new Date().toString();
//           user.$save();
//         } );
//       }
//     } );
//   } );
//
angular.module( 'crudApp' ) // singleton
  .factory( 'productsService', function( $http ) {
    console.log( 'logging within factory, productsService' );
    return {
      getProduct: function() {
        return $http.get( 'api/product' )
          .then( function( response ) {
            return response.data;
          } );
      },
      postProduct: function() {
        return $http.post( 'api/product' )
          .then( function( response ) {
            return response.data;
          } );
      },
      putProduct: function() {
        return $http.put( 'api/product' )
          .then( function( response ) {
            return response.data;
          } );
      },
      gdeleteProduct: function() {
        return $http.delete( 'api/product' )
          .then( function( response ) {
            return response.data;
          } );
      },
      // put
      // delete
    };

  } );
///$http creates a protocl message that gets sent out.
// recieves it and parses the recieved string into a response object.
// .data is a property on that response object

// in a service, you use this alot, in a factory, you return an object


// most functions are stored from the service, similar to a model/view structure
// the service is injected(passed) as a dependancy into the controller
// the functions are called/initialized by the controller object
// the controller injects them into the DOM using $scope.