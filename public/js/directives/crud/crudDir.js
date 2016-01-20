angular.module( 'crudApp' )
  .directive( 'crudDir', function( mainSvc, crudSvc ) {

    console.log( 'crudDir is logging' );

    return {
      restrict: 'E',
      templateUrl: './js/directives/crud/crudTmpl.html',
      controller: 'crudCtrl',
      link: function( scope, element, attributes ) {
        // console.log(attributes);
        scope.messages = crudSvc.getMessages( attributes.room );
      }
    };
  } );