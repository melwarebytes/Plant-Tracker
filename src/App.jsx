import {useState} from 'react';
import PlantGrowthTracker from './components/PlantGrowthTracker';
import AddPlant from './components/AddPlant'
import './App.css';

function App() {
  const[page, setPage] = useState('dashboard');
  return(
    <div>
        <nav className='navbar'>
            <button onClick={() => setPage('dashboard')}>Plant Dashbord</button>
            <button onClick={() => setPage('add')}>Add Plant</button>
        </nav>
        {page === 'dashboard' ? <PlantGrowthTracker /> : <AddPlant />}
    </div>
  )
}

export default App;
