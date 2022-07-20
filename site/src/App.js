import './App.css'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
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
      </Routes>
      </Container>
      </main>
      </Router>
    </div>
  );
}

export default App;
