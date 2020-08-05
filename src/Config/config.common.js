const config = {};

/**
 * session configuration
 */

config.session = {
	secret : 'framework',
	sessionTime : 5000
}

/**
 * server port
 */

config.server = {
	port : 8081
}

/**
 * basic auth
 */

config.basicAuth = {
	users : {
		admin: 'admin@123'
	}
}

/**
 * DB Configuration
 */
config.db = {
	url : 'mongodb://localhost/frameWork',
	options: {
		useNewUrlParser: true
	}
}

/**
 * Encryptions
 */
config.encryption = {
	status : false
}

export default config;