import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyChart from './Components/MyChart/MyChart';
import Reviews from './Components/Reviews/Reviews';





function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/dashboard" element={<MyChart/>}/>
        
      </Routes>

      
    </div>
  );
}

export default App;
