import './App.css';
import Navbar from './components/navbar'
import Display from './components/Display'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
      <Navbar/>
      <div className="main">
        <Display/>
      </div>
      <div className="foot">
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
