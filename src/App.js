import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header expand={'false'} />
      <Container className='main' fluid>
        <Home />
        {/* <About /> */}
      </Container>
    </div>
  );
}

export default App;