import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home' 
import Coding from './components/Coding/Coding'
import Trades from './components/Trades/Trades'
import Occupations from './components/Occupations/Occupations'
import Occupation from './components/Occupation/Occupation'
import Contact from './components/Contact/Contact'
import Job from './components/job/job'
import Schools from './components/Schools/Schools'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/coding' element={ <Coding /> }></Route>
        <Route path='/trades' element={ <Trades /> }></Route>
        <Route path="occupations/:keyword/" element={<Occupations />} />
        <Route path="occupation/:code" element={<Occupation />} />
        <Route path='/contact' element={ <Contact /> }></Route>
        <Route path="jobs/:trade/" element={<Job />} />
        <Route path="/schools/:trade" element={<Schools />} />
        {/*<Route path="job/:title/:id" element={<JobDescription />} />
        <Route path="/schools/:trade" element={<Schools />} /> */}
      </Routes>   
    </div>
  );
}

export default App;
