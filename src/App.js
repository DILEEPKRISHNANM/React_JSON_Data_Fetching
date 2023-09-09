//REST 


import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setState(response.data);

      // Set a timer to clear the data and allow fetching again after 5 seconds
      setTimeout(() => {
        setState([]);
        setIsLoading(false);
      }, 5000);
    });
  };


  return (
    <div className="App">
      <h1>Click me!!!!</h1>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Click!'}
      </button>
      {state.map((obj) => {
        return (
          <div key={obj.id}>
            <h1>{obj.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
