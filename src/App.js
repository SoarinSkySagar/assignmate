import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/posts' element={<Posts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
