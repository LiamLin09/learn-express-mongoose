var mongoose = require('mongoose');
const author = require('./author');
const genre = require('./genre');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.type.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    ISBN: {type: String, required: true},
    genre: [{type: Schema.type.ObjectId, ref: 'Genre'}],
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
