import Middleware from './Middleware.js';

class TestMiddleware extends Middleware {

	constructor () {
		super();
	}

	index () {
		this.callNext();
	}
}

export default new TestMiddleware();