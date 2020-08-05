/**
 * Modules
 */

import PostIndexModule from '../Modules/Post/Index.js';

/**
 * MiddleWares
 */

import TestMiddleware from './../Middlewares/TestMiddleware.js';

const routes = [
	{
		path : '/post',
		method : 'post',
		middlewares : [TestMiddleware],
		module : PostIndexModule
	},
	{
		path : '/post/add',
		method : 'post',
		middlewares : [TestMiddleware],
		module : PostIndexModule,
		actionName: 'addPost'
	},
	{
		path : '/post/update',
		method : 'post',
		middlewares : [TestMiddleware],
		module : PostIndexModule,
		actionName: 'updatePost'
	}
];

export default routes;