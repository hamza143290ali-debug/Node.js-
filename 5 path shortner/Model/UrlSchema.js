const { Schema, model } = require("mongoose");

// schema creation
const urlSchema = new Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },

  originalUrl: {
    type: String,
    required: true,
  },
});

// create model from schema
const URL = model("URL", urlSchema);

// export model
module.exports = URL;
