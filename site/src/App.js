import './App.css'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
      <main>
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Container>
      </main>
      </Router>
    </div>
  );
}

export default App;
