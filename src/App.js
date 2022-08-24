
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Home  from './components/Home';
import Result from './components/Result';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/:category/:id" element={<Result/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
