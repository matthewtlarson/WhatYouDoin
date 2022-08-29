const { Schema, model } = require("mongoose");
const Group = require("./Group");
const Event = require("./Event");

const bcrypt = require("bcrypt");


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  profilePicture: {
    type: String,
    trim: true,
  },
  area: {
    type: String,
    minlength: 5,
    trim: true,
  },
  birthday: {
    type: String,
  },
  flakeRating: {
    type: Number,
    default: 100,
    min: 0,
    max: 100,
  },
  
  publicRequests: {
    type: String,
    trim: true,
  },
  
  userRequests: 
  {
    type: String,
    trim: true,
  },

  eventsAttended: [
    {
      eventName: {
        type: String,
        trim: true,
      },
      date: Date,
    },
  ],

  connections: [
    {
      selfUsername: {
        type: String,
        maxlength: 30,
        trim: true,
      },
      otherUsername: {
        type: String,
        maxlength: 30,
        trim: true,
      },
      closeFriend: {
        type: Boolean,
        default: false,
      },
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],

  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;