import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateEntry from "./components/createentry.component";
import JournalEntriesList from './components/journalentries.component';
import EditJournalEntry from './components/editjournalentry.component';
import './App.css';


function App() {
  return (
    <Router>
      <div>
    <ul className="navbar" id="navbar">
      <li><Link style={{ textDecoration: 'none', padding: '10px', color: 'black', fontSize: '1.5rem' }} to="/">Your Health</Link></li>
      <li><Link style={{ textDecoration: 'none', padding: '10px', color: 'black', position: 'absolute', top: '12px'}} to="/Create">Your Journal</Link></li>
    </ul>
    <Route path="/" component={JournalEntriesList} />
    <Route path="/Create" component={CreateEntry} />
    <Route path="/edit/:id" component={EditJournalEntry}/>
    </div>
    </Router>
  );
}

export default App;
