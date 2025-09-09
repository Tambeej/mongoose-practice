const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  hair: { type: String, required: true },
  eyes:  { type: String, required: true },
  weight:       { type: Number, required: true },
  height:       { type: Number, required: true },
  salary:       { type: Number, required: true },
  numKids:       { type: Number, required: true },
  kids:{type:Array, default:[]}
});

module.exports = mongoose.model("Person", personSchema);
