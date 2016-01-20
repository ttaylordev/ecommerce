//npm init
//npm install express body-parser cors mongojs --save
var express = require( 'express' );
var mongojs = require( 'mongojs' );
var bodyParser = require( 'body-parser' );
var cors = require( 'cors' );
var mongodb = require( 'mongodb' ); //.ObjectId; works too.

var ObjectId = mongodb.ObjectId;
var app = express();
app.use( bodyParser.json() );
app.use( express.static( __dirname + '/public' ) ); // loads my index.html from the public folder
var nodePort = 3000;

//how to connect to database:
// localhost:3000/api/product
// run mongod
var db = mongojs( 'products', [ 'product' ] );
console.log( 'running' );
//express serves as a backend framework providing a bunch ofhelper functions that reduce the amount of code that we need to write.


/*##############ENDPOINTS##############*/

// POST
app.post( '/api/product', function( req, res ) {
  var dataToInsert = req.body;
  db.product.insert( dataToInsert, function( err, result ) {
    if ( err ) {
      res.status( 500 ).end();
    }
    res.send( result );
  } );
  console.log( 'posting' );
  // res.end();
} );

// inside the find function there are constraints to restrict what the user will recieve. like #limit:10

// GET
app.get( '/api/product', function( req, res ) {
  db.product.find( {}, function( err, result ) {
    res.send( result );
  } );
  console.log( 'getting' );
  // res.end();
} );

// GET BY ID
app.get( '/api/product/:id', function( req, res ) {
  var idToGet = ObjectId( req.params.id );
  db.product.find( {
    _id: idToGet
  }, function( err, result ) {
    if ( err || result.n === 0 ) {
      req.status( 500 ).send( 'GET failed' );
    }
    res.send( result );
  } );
  console.log( 'getting' );
  // res.end();
} );


// DELETE
app.delete( '/api/product/:id', function( req, res ) {
  var idToDelete = ObjectId( req.params.id );
  db.product.remove( {
    _id: idToDelete
  }, function( err, result ) {
    if ( err || result.n === 0 ) {
      res.status( 500 ).send( "Failed to delete" );
    }
    console.log( 'deleting' );
    res.send( "Successfully deleted record" );
  } );
  // res.end();
} );

// PUT
app.put( '/api/product/:id', function( req, res ) {
  var idToModify = ObjectId( req.params.id );
  var updateObject = {
    query: {
      _id: idToModify
    },
    update: req.body,
    new: false
  };
  db.product.findAndModify( updateObject, function( err, result ) {
    if ( err ) {
      res.status( 500 ).send( "PUT failed" );
    }
    console.log( 'putting' );
    res.send( updateObject );
  } );
  // res.end();
} );


app.listen( 3000, function() {} );