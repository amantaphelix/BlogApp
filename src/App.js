
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Addb from './components/Addb';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/><br/><br/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Addb' element={<Addb/>}/>
      </Routes>
    </div>
  );
}

export default App;
