import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/About';
import LeaderBoard from './components/LeaderBoard';
import Settings from './components/Settings';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/leaderboard' element={<LeaderBoard/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  )
}

export default App
