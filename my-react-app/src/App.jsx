import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './Components/data'
import Tours from './Components/Tours'
function App() {
 const [tours, setTours] = useState(data)
   // !== id means not equal to id . not equal to id show true value
    function removeTour(id) {    
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    } 
  return (
    <div>
      {tours.length === 0 ? (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour}></Tours>
      )}
    </div>
  );
}

export default App
