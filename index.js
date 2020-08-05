import express from 'express';
import path from 'path';
import session from 'express-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

/**
 * load configuration
 */

import configCommon from './src/Config/config.common.js';
import configRoutes from './src/Config/config.routes.js';

/**
 *  Load MiddleWares
 */
import RequestMiddleware from './src/Middlewares/RequestMiddleware.js';



/**
 * initialize express app
 * @type {[type]}
 */

const __dirname = path.resolve();
const app = express();

/**
 * set the static path
 */

app.use(express.static('public'));

/**
 * body parser
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

/**
 * set session
 * @type {string}
 */

app.use(session({
  	// It holds the secret key for session 
	secret: configCommon.session.secret, 

	// Forces the session to be saved 
	// back to the session store 
	resave: true, 

	// Forces a session that is "uninitialized" 
	// to be saved to the store 
	saveUninitialized: true,
	cookie:{
		maxAge: configCommon.session.sessionTime
	}
}));

/**
 * set Request Middleware
 */

app.use(RequestMiddleware.callMiddleWare)

/**
 * connect the DB
 */
mongoose.connect(configCommon.db.url, configCommon.db.options);

/**
 * set routers dynamically
 */
configRoutes.forEach((route) => {
	const middlewares = [];

	route.middlewares.forEach((middleware) => {
		middlewares.push(middleware.callMiddleWare)
	})

	app[route.method](route.path, middlewares,route.module.callModule);
})

/**
 * listen the server
 * @type {string}
 */
const server = app.listen(configCommon.server.port, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})