import './App.css';
//Importing an image
import hoverCat from '/download.jpeg';

//Import a component
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello React</h1>
      <hr />
      {3 + 5}
      {/* To pass the prop we declare the name and the value to pass inside */}

      <StudentList>
        <StudentCard
          firstName="Wagner"
          course="Web Dev"
          address={{ city: 'Natal', street: 'DOM avenue' }}
          score={10}
        />
        <hr />
        <StudentCard
          firstName="Vanessa"
          course="UX/UI"
          address={{ city: 'Torres Vedras', street: 'Carnival avenue' }}
          score={10}
        />
      </StudentList>

      <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG" alt="" />
      <img src={hoverCat} alt=" a cat that hovers" />

      {/* 
      We cannot use the words for and class so we use htmlFor and className
      <label htmlFor=""></label> 
      // We use camelCase for some other common methods/words
      onSubmit
      onClick
      backgroundColor
      */}
      <Greeting />
      <ReactPlayer url="https://www.youtube.com/watch?v=zqLEO5tIuYs" playing={true} />
    </div>
  );
}

export default App;
