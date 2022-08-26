const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema ({
    
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    commitments: [
        {
            type: String,
            trim: true
        },
    ],
    flakes: [
        {
            type: String,
            trim: true,
        }
    ],
    theme: {
        type: String,
        trim: true
    },
    active: {
        type: Boolean
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    private: {
        type: Boolean
    },
    image: {
        type: String,
        trim: true
    },
    recaps: [
        {
            image: {
                type: String,
                trim: true
            },
            eventDescription: {
                type: String,
                trim: true,
                required: true
            },
        }
    ]
});
const Event = model('Event', eventSchema);
module.exports = Event;