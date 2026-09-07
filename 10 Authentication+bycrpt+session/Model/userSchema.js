const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  useremail: {
    type: String,
    required: true,
    unique: true,
  },
  userpassword: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Userinfo= model("userinfo", userSchema);

module.exports = Userinfo;
