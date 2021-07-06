//declaration of variables and requirements
const mongoose = require ('mongoose');
const express = require ('express');
const cors = require ('cors');
require('dotenv').config();

//MongoDB connection Url with .env file link for security
const URL = process.env.CONNECTION_URL;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection

//if there is an error connecting to the database log an error
db.on('error', (err) => {
    console.log(err)
})

//once the database connection has been established log message 
db.once('open', () => {
    console.log("Database Connection Established");
})

//creates express application
const app = express()

//specifies port for express server to run on 
const PORT = process.env.PORT || 8000

//allows middleware to parse json 
app.use(cors());
app.use(express.json());

//stating required files for routes
const journalentryRouter = require('./CRUD/journalentry')

//specifies the page the link will route to 
app.use('/journalentries', journalentryRouter);

//uses PORT variable to run server on desired port and logs if successful 
app.listen(PORT, () => {
console.log(`Server running on ${PORT}`)
})
