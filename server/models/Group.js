const { Schema, model } = require('mongoose');

const groupSchema = new Schema({

    title: {
        type: String,
        default: 'Untitled Group',
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            min: 2
        }
    ],
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
});
const Group = model('Group', groupSchema);
module.exports = Group;