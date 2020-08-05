import Middleware from './Middleware.js';
import configCommon from './../Config/config.common.js';

class RequestMiddleware extends Middleware {

	constructor () {
		super();
	}

	index () {
		if(configCommon.encryption.status) {
			this.request.data = JSON.parse(Buffer.from(this.request.data, 'base64').toString());
		}
		this.callNext();
	}
}

export default new RequestMiddleware();