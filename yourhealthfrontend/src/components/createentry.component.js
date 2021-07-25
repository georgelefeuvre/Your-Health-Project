//imports react components from react and axios for http requests to node server
import React, { Component } from "react";
import axios from "axios";

//exports CreateEntry react component so it can be used in the application 
export default class CreateEntry extends Component {
    constructor(props) {
        //required for react components
        super(props);
        
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeEntry = this.onChangeEntry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //to set the current state of mongodb data
         this.state = {
            date: '',
            time: '',
            entry: ''
        }
    }

        //function to update the state of date to whatever was entered into the date field
        onChangeDate(e) {
            this.setState({
                date: e.target.value
            });
        }

        //same as above for other fields
        onChangeTime(e) {
            this.setState({
                time: e.target.value
            });
        }

        onChangeEntry(e) {
            this.setState({
                entry: e.target.value
            });
        }

        //submit function adds createentry variable to be posted via axios to the node server
        onSubmit(e) {
            e.preventDefault();

            const createentry = {
                date: this.state.date,
                time: this.state.time,
                entry: this.state.entry
            }

            //logs current data, used for testing if data can be submitted successfully
            console.log(createentry)

            //axios post request with destnation URL
            axios.post('http://localhost:8000/journalentries/add', createentry)
                .then(res => console.log(res.data));
                window.location = '/View';
        }
    
    //what is rendered in this react component
    render() {
        return (
            <div>{/*Create Entry form for data to be entered into */}
                <h1>Create a New Journal Entry</h1>
                <form onSubmit={this.onSubmit}>{/*when form is submitted call onSubmit function */}
                    <div><label>Date: </label>
                        <input type="text" required value={this.state.date} onChange={this.onChangeDate}/> 
                    </div>
                    <div><label>Time: </label>
                        <input type="text" required value={this.state.time} onChange={this.onChangeTime}/> 
                    </div>
                    <div><label>Entry: </label>
                        <input type="text" required value={this.state.entry} onChange={this.onChangeEntry}/> 
                    </div>
                    <div>
                        <input type="submit" value="Create Your Entry"/>
                    </div>
                </form>
            </div>
        )
    }
}
