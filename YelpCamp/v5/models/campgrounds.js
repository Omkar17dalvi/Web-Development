var mongoose = require("mongoose");

var campSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String,
	comments: [
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});
//Model Setup
module.exports = mongoose.model("Campground",campSchema);