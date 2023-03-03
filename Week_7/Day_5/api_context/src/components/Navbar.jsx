import { NavLink } from 'react-router-dom';
//import the hook and the context itself
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.context';

function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className={`Navbar ${theme}`}>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      <NavLink to="/apartments/new">
        <button>Add Apartment</button>
      </NavLink>

      <button onClick={toggleTheme}>Change to {theme === 'light' ? 'dark' : 'light'} mode</button>
    </nav>
  );
}

export default Navbar;
