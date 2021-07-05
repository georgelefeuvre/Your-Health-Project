//declaration of variables and requirements
const router = require('express').Router();
let Journalentry = require('../schemas/journalentry.model');

//Create entry
//if POST request is sent create new  Journal Entry 
router.route('/add').post((req, res) => {
    const date = req.body.date;
    const time = req.body.time;
    const entry = req.body.entry;

    //saves parameters listed above and creates a new entry
    const newEntry = new Journalentry({
        date,
        time,
        entry,
    });

    //save new entry and return as json or return an error
    newEntry.save()
    .then(() => res.json('Entry added successflly'))
    .catch(err => res.status(400).json(err));
    
});

//Read entry
//if GET request is sent return all database entries as json or log error
router.route('/').get((req, res) => {
    Journalentry.find()
    .then(journalentries => res.json(journalentries))
    .catch(err => res.status(400).json(err));
});

//https:localhost:8000/journalentries/<mongdbObjectID> with GET request to return specified entry
router.route('/:id').get((req, res) => {
    Journalentry.findById(req.params.id)
    .then(journalentry => res.json(journalentry))
    .catch(err => res.staus(400).json((err)));
})

//Update entry
//https:localhost:8000/journalentries/update/<mongdbObjectID> with POST request to update specific entry
router.route('/update/:id').post((req, res) => {
    Journalentry.findById(req.params.id)
    .then(journalentry => {
 
        journalentry.date = req.body.date;
        journalentry.time = req.body.time;
        journalentry.entry = req.body.entry;
 
        journalentry.save()
        .then(() => res.json('Entry updated successfully'))
        .catch(err => res.staus(400).json(err));
    })
 })

//Delete entry
//https:localhost:8000/journalentries/<mongdbObjectID> with DELETE request to delete specific entry
router.route('/:id').delete((req, res) => {
    Journalentry.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted successfully'))
    .catch(err => res.staus(400).json(err));
})

//exports the router function for use in other files
module.exports = router;