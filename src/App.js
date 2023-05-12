import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Template from './components/Template/template'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header expand={'false'} />
      <Container className='main' fluid>
        {/* <Home /> */}
        <Template />
      </Container>
    </div>
  );
}

export default App;