const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// create model from schema
// mongoose.model returns instatiated documents
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;