import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Registry from './pages/Registry';

function App() {
  return (
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registry" element={<Registry/>}/>
        </Routes>
  );
}

export default App;
