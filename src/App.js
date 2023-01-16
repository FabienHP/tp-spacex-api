import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './styles/reset.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
