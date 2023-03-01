import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <button onClick={toggleVisibility}>{visible ? 'Hide' : 'Show'} list</button>
      {visible && <MovieList />}
    </div>
  );
}

export default App;
