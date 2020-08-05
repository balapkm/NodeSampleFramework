class ResponseMiddleware {

	constructor () {

	}

	/**
	 * return the final response
	 * @method      returnFinalResposne
	 * @Author_name G.Balakumaran
	 * @datetime    2020-08-04T20:45:09+0530
	 * @param       {[type]} res [description]
	 * @param       {[type]} statusCode [description]
	 * @param       {[type]} data [description]
	 * @param       {bool} errorStatus [description]
	 * @return      {[type]} [description]
	 */
	
	static returnFinalResposne(res, statusCode=200, data={}, errorStatus = false) {
		const response = {
			status : statusCode
		}

		if(errorStatus) {
			response.error = data;
		} else {
			response.data = data;
		}

		res.status(statusCode).json(response);
	}
}

export default  ResponseMiddleware;