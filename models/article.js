var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will add the Currency type to the Mongoose Schema types
//require('mongoose-currency').loadType(mongoose);
//var Currency = mongoose.Types.Currency;


var articleSchema = new Schema({
	title:{
		type: String,
		required: true,
		unique: true
	},
	Author:{
		type: String
	},
	labels:{. // ?? labels should be in a centeral management
		type: [String]
	},
	categories:{	// ?? categories should be in a centeral management
		type: [String]
	},
	content:{
		type: String,
		required: true
	},
	created:{
		type: Date,
		required: true
	},
	updated:{
		type: Date
	},
	viewed:{
		type: Number,
		min: 0
	},
	liked:{
		type: Number,
		min: 0
	},
	shared:{
		Facebook:{
			type: Number,
			min: 0 
		}
	}
});

// create a model
var Article = mongoose.model('Article',articleSchema);

module.exports = Article;