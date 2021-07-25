//importing dependencies and react components
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateEntry from "./components/createentry.component";
import JournalEntriesList from './components/journalentries.component';
import EditJournalEntry from './components/editjournalentry.component';
import HomePage from './components/homepage.component';
import './App.css';

//main page code, will always be displayed to user 
function App() {
  return (
    //nav bar below allows for naviagtion between react components
    <Router>
      <div>
    <ul className="navbar" id="navbar"> {/*code below controlls link positions on nav bar and other styling */}  
      <li><Link style={{ textDecoration: 'none', padding: '10px', color: 'black', fontSize: '1.5rem' }} to="/Home">Your Health</Link></li>
      <li><Link style={{ textDecoration: 'none', padding: '10px', color: 'black', position: 'absolute', top: '12px'}} to="/Create">Create Entry</Link></li>
      <li><Link style={{ textDecoration: 'none', padding: '10px', color: 'black', position: 'absolute', top: '12px', left: '300px'}} to="/View">View Journal</Link></li>  
    </ul>
    {/*Route paths below direct link above to their corresponding react component */}
    <Route path="/"/>
    <Route path="/Home" component={HomePage} />
    <Route path="/Create" component={CreateEntry} />
    <Route path="/View" component={JournalEntriesList} />
    <Route path="/edit/:id" component={EditJournalEntry} />
    </div>
    </Router>
  );
}

//exports App for other files to use 
export default App;
