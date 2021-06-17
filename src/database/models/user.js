const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	wins: {
		type: Number,
		default: 0,
	},
	numberPlayer: {
		type: Number,
		required: true
	}
},{
	versionKey: false,
	timestamps: false,
})

module.exports = model('User', UserSchema)
