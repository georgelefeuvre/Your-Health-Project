import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import JournalEntries from './components/journalentries.component';
import CreateEntry from './components/createentry.component';

function App() {
  return (
    <Router>
    <ul className="navbar" id="navbar">
      <li><Link style={{ textDecoration: 'none', padding: '10px', color: 'black', fontSize: '1.5rem' }} to="/">Your Health</Link></li>
      <li><Link style={{ textDecoration: 'none', padding: '10px', color: 'black', position: 'absolute', top: '12px'}} to="/Journal">Your Journal</Link></li>
    </ul>
    <Route path="/" />
    <Route path="/Journal" component={JournalEntries} />
    <Route path="/Journal" component={CreateEntry} />
    </Router>
  );
}

export default App;
