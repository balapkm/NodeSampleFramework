import ResponseMiddleware from './ResponseMiddleware.js';

class Middleware {
	request = {};
	response = {};
	next = {};

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
	
	callMiddleWare = (req, res, next) => {
		this.request = req.body;
		this.response = res;
		this.next = next;

		/**
		 * call the middleware
		 */
		
		this.index();
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

	/**
	 * call next
	 * @method      callNext
	 * @Author_name G.Balakumaran
	 * @datetime    2020-08-05T10:40:26+0530
	 * @return      {[type]} [description]
	 */
	
	callNext() {
		this.next();
	}
}

export default Middleware;