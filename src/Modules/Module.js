import ResponseMiddleware from './../Middlewares/ResponseMiddleware.js';
import configRoutes from './../Config/config.routes.js';

class Module {
	OinputData = {};
	response = {};

	constructor() {
	}

	/**
	 * call router
	 * @method
	 * @Author_name G.Balakumaran
	 * @datetime    2020-08-04T20:46:40+0530
	 * @param       {[type]} req [description]
	 * @param       {[type]} res [description]
	 * @param       {Function} next [description]
	 * @return      {[type]} [description]
	 */
	
	callModule = (req, res, next) => {
		this.OinputData = req.body.data;
		this.response = res;

		/**
		 * call actions based on route config
		 */
		
		const currentPath = configRoutes.filter(route => (route.path === req.path))[0];
		if(typeof currentPath.actionName !== 'undefined' && currentPath.actionName !== '') {
			this[currentPath.actionName]();
		} else {
			this.index();
		}
	}

	/**
	 * set response
	 * @method
	 * @Author_name G.Balakumaran
	 * @datetime    2020-08-04T20:46:48+0530
	 * @param       {[type]} statusCode [description]
	 * @param       {[type]} data [description]
	 * @param       {[type]} errorStatus [description]
	 * @return      {[type]} [description]
	 */
	
	setResponse = (data, statusCode, errorStatus) => {
		ResponseMiddleware.returnFinalResposne(this.response,statusCode, data, errorStatus);
	}
}

export default Module;