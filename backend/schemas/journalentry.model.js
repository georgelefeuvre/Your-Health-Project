//declaration of variables and requirements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//declaration of  journal entry schema 
const journalenrtySchema = new Schema({
    date: {
        //change to type: date
        type: String,
        //validation requiring field is populated 
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    entry: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

//creates journalentry mongoose model 
const journalentry = mongoose.model('journalentry', journalenrtySchema);

//exports journalentry model
module.exports = journalentry;