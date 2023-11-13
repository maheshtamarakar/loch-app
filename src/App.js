import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<PageNotFound/>} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
