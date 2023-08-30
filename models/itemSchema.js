const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  policyCoverage: {type:String,required: true},
  deductible: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = itemSchema;
