import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Container from './components/container/container';

function App() {
  return(
    <div className='App'>
     <Router>
        <Navbar/>
            <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/start" element={<Container />}>
            </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
