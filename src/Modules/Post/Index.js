import Module from './../Module.js';
import PostModel from './../../Models/Post.js';

class PostIndexModule extends Module {
	constructor() {
		super();
	}

	/**
	 * get module data
	 * @method      getModuleData
	 * @Author_name G.Balakumaran
	 * @datetime    2020-08-04T19:06:56+0530
	 */
	
	async index () {
		let posts = await PostModel.find().select('title body status');
		this.setResponse(posts);
	}

	async addPost() {
		var post = await PostModel({
		  title: this.OinputData.title,
		  body: this.OinputData.body,
		  status : false
		}).save();

		this.setResponse("Post inserted successfully..");
	}

	async updatePost() {
		var post = await PostModel.findOneAndUpdate({_id:this.OinputData.id}, {
		  title: this.OinputData.title,
		  body: this.OinputData.body,
		  status : true
		});

		this.setResponse("Post Updated successfully..");
	}
}

export default new PostIndexModule();