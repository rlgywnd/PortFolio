import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Home from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
