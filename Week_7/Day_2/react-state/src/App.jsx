// Package/ react imports
import { useState } from 'react';
//Imports for CSS
import './App.css';

//Import Components
import Counter from './components/Counter';
import List from './components/List';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';

function App() {
  let [theme, setTheme] = useState('light');
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  //Handler functions
  const handleTheme = (e) => {
    //console.log(e.target.value);
    //theme = e.target.value;
    setTheme(e.target.value);
    console.log(theme);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={`App ${theme}`}>
        <select onChange={handleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        {/* <List /> */}
        {/* <Counter /> */}
        <button onClick={toggleVisibility}>{visible ? 'Hide' : 'Show'} list</button>
        {visible && <MovieList />}
      </div>
    );
  }
}

export default App;
