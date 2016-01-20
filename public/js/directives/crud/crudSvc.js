angular.module( 'crudApp' )
  .service( 'crudSvc', function( $firebaseObject, $firebaseArray, $firebaseAuth, mainSvc ) {
    var baseUrl = 'https://dmecommerce.firebaseio.com/data';
    console.log( 'crudSvc is logginf from within itself' );
    this.testcrudSvc = function() {
      var crudSvcIsLoading = 'crudSvc is  loading via crudCtrl';
      // console.log('From: crudSvc via crudCtrl: crudSvc is logging');
      return crudSvcIsLoading;
    };

    this.getMessages = function( location ) {
      var messagesRef = new Firebase( baseUrl + "/crud-message/" + location );
      var messages = $firebaseArray( messagesRef );
      return messages;
    };

    //
    // this.removeMessage = function(message) {
    //   messages.$remove(message);
    // };

  } );