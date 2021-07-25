//imports react components from react and axios for http requests to node server
import React, { Component } from "react";
import axios from "axios";

//exports EditJournalEntry component for use
export default class EditJournalEntry extends Component {
    //required for react components  
    constructor(props) {
        super(props);

        //Sets the state of the
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeEntry = this.onChangeEntry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //to set current state of the mongodb data
        this.state = {
            date: '',
            time: '',
            entry: ''
        }
    }

    //
    componentDidMount() {
        axios.get('http://localhost:8000/journalentries/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    date: response.data.date,
                    time: response.data.time,
                    entry: response.data.entry
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

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

    onSubmit(e) {
        e.preventDefault();

        const createentry = {
            date: this.state.date,
            time: this.state.time,
            entry: this.state.entry
        }

        console.log(createentry)

        axios.post('http://localhost:8000/journalentries/update/' + this.props.match.params.id, createentry)
            .then(res => console.log(res.data));
            window.location = '/View';
    }

    render() {
        return (
            <div>
                <h1>Edit Journal Entry</h1>
                <form onSubmit={this.onSubmit}>
                    <div><label>Date: </label>
                        <input type="text" required value={this.state.date} onChange={this.onChangeDate} />
                    </div>
                    <div><label>Time: </label>
                        <input type="text" required value={this.state.time} onChange={this.onChangeTime} />
                    </div>
                    <div><label>Entry: </label>
                        <input type="text" required value={this.state.entry} onChange={this.onChangeEntry} />
                    </div>
                    <div>
                        <input type="submit" value="Edit Your Entry" />
                    </div>
                </form>
            </div>
        )
    }
}
