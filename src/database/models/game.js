const { Schema, model } = require('mongoose')

const GameSchema = new Schema({
	players: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	winner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	point_diference: {
		type: Number,
		required: true,
	}
},{
	versionKey: false,
	timestamps: false,
})

module.exports = model('Game', GameSchema)
