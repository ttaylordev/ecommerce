angular.module( 'crudApp' )
  .controller( 'crudCtrl', [ '$scope', 'crudSvc', 'mainSvc', 'productsService', function( $scope, crudSvc, mainSvc, productsService ) {

    // various connectivity tests between angular files
    // console.log( 'crud Control is logging' );
    // console.log( $scope );
    // console.log( $scope.$parent );
    // $scope.checkIt = "check it out";
    // $scope.logFromSvc = crudSvc.testcrudSvc();
    // console.log( $scope.logFromSvc );


    $scope.createSomething = function() {
      console.log( 'at least the create button is receiving a click event' );
      return productsService.postProducts();
    };

    $scope.retrieveSomething = function() {
      console.log( 'at least the retrieve button is receiving a click event' );
      return productsService.getProduct();

    };

    $scope.updateSomething = function() {
      console.log( 'at least the update button is receiving a click event' );
      return productsService.updateProduct();
    };

    $scope.deleteSomething = function() {
      console.log( 'at least the delete button is receiving a click event' );
      return productsService.deleteProduct();
    };



    $scope.sendMessage = function() {
      $scope.messages.$add( {
        userId: $scope.$parent.user.email,
        time: Firebase.ServerValue.TIMESTAMP,
        text: $scope.typeMessage
      } );

    };
  } ] );