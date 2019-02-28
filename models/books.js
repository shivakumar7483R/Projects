var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	 title: {
		type: String,
		required: true,
	  },
	  author: {
		type: String,
		required: false,
	  },
	  price: {
		type: Number,
		required: true,
	  },
	  email:{ 
		  type: String,
		  required: true,
	  }
});

module.exports = mongoose.model('books', userSchema);