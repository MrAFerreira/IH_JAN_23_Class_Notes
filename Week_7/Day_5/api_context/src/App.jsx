import './App.css';
import { Routes, Route } from 'react-router-dom';
import Apartments from './pages/Apartments';
import AddApartment from './pages/AddApartment';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme.context';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={'App ' + theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Apartments />} />
        <Route path="/apartments/new" element={<AddApartment />} />
      </Routes>
    </div>
  );
}

export default App;
