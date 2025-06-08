import {useState} from 'react';
import PlantGrowthTracker from './components/PlantGrowthTracker';
import AddPlant from './components/AddPlant'
import Footer from './components/Footer';
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

        <Footer />
    </div>
  )
}

export default App;
