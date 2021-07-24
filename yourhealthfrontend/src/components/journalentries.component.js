import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const JournalEntry = (props) => (
    <tr>
      <td>{props.journalentry.date}</td>
      <td>{props.journalentry.time}</td>
      <td>{props.journalentry.entry}</td>
      <td>
        <Link to={"/edit/" + props.journalentry._id}>Edit</Link> |
        <a
          href="/"
          onClick={() => {
            props.deleteJournalEntry(props.journalentry._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
  

  export default class JournalEntriesList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
      super(props);
      this.deleteRecord = this.deleteJournalEntry.bind(this);
      this.state = { journalentries: [] };
    }

    componentDidMount() {
        axios
        .get('http://localhost:8000/journalentries/')
        .then(response => { 
            this.setState({ journalentries: response.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteJournalEntry(id) {
        axios.delete('http://localhost:8000/journalentries/'+id)
        .then(res => console.log(res.data));
        this.setState({
            journalentries: this.state.journalentries.filter(el => el._id !== id)
        })
    }

    journalentrieslist() {
        return this.state.journalentries.map(currentjournalentry => {
        return <JournalEntry journalentry={currentjournalentry} deleteJournalEntry={this.deleteJournalEntry} key={currentjournalentry._id}/>;
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
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.journalentrieslist() }
                    </tbody>
                </table>
            </div>
        )
    }
}
