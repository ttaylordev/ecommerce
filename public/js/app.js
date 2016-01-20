angular.module( 'crudApp', [ 'firebase', 'ui.router' ] )
  // inject 'firebase' into the empty array
  .config( function( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/landing' );
    console.log( 'from app.config: app.js is logging' );


    $stateProvider
    // landing state and nested views
      .state( 'landing', {
        url: '/landing',
        templateUrl: './js/views/landing/landingTmpl.html',
        controller: 'landingCtrl',
        // link: function(scope, element, attributes) {
        //   //make sure it does this before it loads up that state
        // }
      } )
      // auth state and nested views
      .state( 'auth', {
        url: '/auth',
        templateUrl: './js/views/auth/authTmpl.html',
        controller: 'authCtrl',
        // link: function(scope, element, attributes) {
        //   //make sure it does this before it loads up that state
        // }
      } )

    // crud state and nested views
    .state( 'crud', {
        url: '/crud',
        templateUrl: './js/views/view1/crudView1Tmpl.html',
        controller: 'crudCtrl',
        // link: function(scope, element, attributes) {
        //
        // }
      } )
      // data state and nested panes/views
      .state( 'rawDataObjects', {
        url: '/rawDataObjects',
        templateUrl: './js/views/view2/rawDataObjectsTmpl.html',
        controller: 'rawDataObjectsCtrl',
        // link: function(scope, element, attributes) {
        //
        //   } // we'll get to this in a bit
      } );


  } );