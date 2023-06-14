import './App.css';
import ManFac from './components/ManFac';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
function App() {
 
  return (
    <div>
      <Router>
        <Routes>      
          <Route path='/' element={<Login/>} exact/>
          <Route path='/manFac' element={<ManFac/>} />        
          <Route path='/dashboard' element={<Landing/>} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
