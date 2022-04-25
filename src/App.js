import './App.css';
import MainGrid from './components/MainGrid';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Studies from './components/Studies';
import Works from './components/Works';

function App() {
  return (
    <div className="App w-full h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black relative overflow-auto">
      <Navbar/>
      <MainGrid/>
      <Profile/>
      <Studies/>
      <Works/>
    </div>
  );
}

export default App;
