//imports react components from react and axios for http requests to node server
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from "react-bootstrap";

//
const JournalEntry = (props) => (
    <tr>{/*form for data to be viewed in with edit and delete links */}
      <td>{props.journalentry.date}</td>
      <td>{props.journalentry.time}</td>
      <td>{props.journalentry.entry}</td>
      <td>
        <Link className="btn btn-secondary"style={{textDecoration: 'none'}}to={"/edit/" + props.journalentry._id}>Edit </Link>
        <a href="/View" className="btn btn-secondary" style={{textDecoration: 'none', margin: '4px'}} onClick={() => {alert("Entry deleted successfully!");props.deleteJournalEntry(props.journalentry._id);}}>Delete</a>
      </td>
    </tr>
  );

  //exports JournalEntriesList component for use 
  export default class JournalEntriesList extends Component {
     constructor(props) {
      super(props);
      this.deleteRecord = this.deleteJournalEntry.bind(this);
      this.state = { journalentries: [] };
    }

    //method to call axios to send get request so data can be loaded for viewing in this component
    componentDidMount() {
        axios
        .get('http://localhost:8000/journalentries/')
        .then(response => { 
            this.setState({ journalentries: response.data });
        })//sets the react state to match response from node server
        .catch((error) => {
            console.log(error);
        })
    }

    //method to call axios to send a delete request to the node server that will then delete the data from mongodb
    deleteJournalEntry(id) {
        axios.delete('http://localhost:8000/journalentries/'+id)
        .then(res => console.log(res.data));
        this.setState({//sets the current state to match the data sent by the node server from mongodb 
            journalentries: this.state.journalentries.filter(el => el._id !== id)//sets the react state for all entries except the entry that has been deleted 
        })
    }

    //function that will be called in the main component render to display current data and call delete function
    journalentrieslist() {
        //method to set and map the react state to return elements in the journalentries array to be displayed in form
        return this.state.journalentries.map(currentjournalentry => {
        //returns JournalEntry component
        return <JournalEntry journalentry={currentjournalentry} 
        deleteJournalEntry={this.deleteJournalEntry} 
        key={currentjournalentry._id}/>;
    })
}

    //renders the form for data to be displayed in
    render() {
        return (
            <Container>
                <br></br>
            <div>
                <h3>Your Journal Entries</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Entry</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody> {/*calls the journalentriesList function */}
                        { this.journalentrieslist() }
                    </tbody>
                </table>
            </div>
            </Container>
        )
    }
}
