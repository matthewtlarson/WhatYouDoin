const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const eventSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  time: {
    type: String,
    required: false,
    trim: true,
  },
  date: {
      type: String,
      required: false,
      trim: true,
  },
  title: {
    type: String,
    required: false,
    trim: true,
  },
  commitments: [
    {
      type: String,
      trim: true,
    },
  ],
  flakes: [
    {
      type: String,
      trim: true,
    },
  ],
  theme: {
    type: String,
    trim: true,
  },
  active: {
    type: Boolean,
  },
  eventAuthor: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  private: {
    type: Boolean,
  },
  image: {
    type: String,
    trim: true,
  },
  recaps: [
    {
      image: {
        type: String,
        trim: true,
      },
      eventDescription: {
        type: String,
        trim: true,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});
const Event = model("Event", eventSchema);
module.exports = Event;
