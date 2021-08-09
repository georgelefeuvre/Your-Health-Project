//importing dependencies and react components
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateEntry from "./components/createentry.component";
import JournalEntriesList from './components/journalentries.component';
import EditJournalEntry from './components/editjournalentry.component';
import HomePage from './components/homepage.component';
import AboutPage from './components/aboutpage.component';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'

//main page code, will always be displayed to user 
function App() {
  return (
    <Container>
    {/*nav bar below allows for naviagtion between react components*/}
    <Router>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'white'}} to="/Home">Your Health</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link style={{ color: 'White', textDecoration: 'none'}} to="/Create">Create entry</Link></Nav.Link>
      <Nav.Link><Link style={{ textDecoration: 'none', color: 'white'}} to="/View">View Journal</Link></Nav.Link>
      <Nav.Link><Link style={{ textDecoration: 'none', color: 'white'}} to="/About">About page</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <div>
    {/*Route paths below direct the link above to their corresponding react component */}
    <Route path="/"/>
    <Route path="/Home" component={HomePage} />
    <Route path="/Create" component={CreateEntry} />
    <Route path="/View" component={JournalEntriesList} />
    <Route path="/edit/:id" component={EditJournalEntry} />
    <Route path="/About" component={AboutPage}/>
    </div>
    </Router>
    </Container>
  );
}

//exports App for other files to use 
export default App;
