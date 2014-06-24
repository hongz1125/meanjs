//连接数据库
require( './db' );

var express = require( 'express' );
var routes  = require( './routes' );
var http    = require( 'http' );
var path    = require( 'path' );
var app     = express();
var engine  = require( 'ejs-locals' );
var bodyParser = require('body-parser');

// all environments
app.set( 'port', 3000 );
app.engine( 'ejs', engine );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Routes
app.get( /^\/|\/index.html$/,	routes.index );
app.post("/add.html",			routes.add);
app.post("/action.html",function(req,res,next){
	if(req.body.action == "update"){
		routes.update(req,res,next);
	}
	else if(req.body.action == "remove"){
		routes.remove(req,res,next);
	}
});






http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});