import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

//component within journalentries.component to create table for entries to be displayed in 
const JournalEntry = props => {
    <tr>
        <td>{props.journalentry.date}</td>
        <td>{props.journalentry.time}</td>
        <td>{props.journalentry.entry}</td>
        <td>
            <Link to={"/edit/"+props.journalentry._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteJournalEntry(props.journalentry._id) }}>delete</a>
        </td>
    </tr>
}

export default class JournalEntries extends Component {
    constructor(props) {
        super(props);

        this.deleteJournalEntry = this.deleteJournalEntry.bind(this);
        this.state = {journalentry: []};
    }

    componentDidMount() {
        axios.get('https://localhost:8000/journalentries')
        .then(res => {
            this.setState({ journalentry: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    //method to delete journal entries by MongoDB ID and reset the state of the journal entries component
    deleteJournalEntry(id) {
        axios.delete('http://localhost:8000/journalentries/'+id)
        .then(res => console.log(res.data));
        
        this.setState({
            journalentry: this.state.journalentry.filter(el => el._id !== id)
        })
    }

    //returns Journalentry component to table
    JournalEntries() {
        return this.state.journalentry.map(currentjournalentry => {
            return <JournalEntry 
            journalentry={currentjournalentry} 
            deleteJournalEntry={this.deleteJournalEntry} 
            key={currentjournalentry._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h2>Your Journal Entries</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Entry</th>
                    </tr>
                    </thead>
                    <tbody>{ this.JournalEntries() }</tbody>
                </table>
            </div>
        )
    }
}


