import './App.css';
import MainGrid from './components/MainGrid';
import Profile from './components/Profile';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App w-full h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black relative overflow-auto">
      <Navbar/>
      <MainGrid/>
      <Profile/>
    </div>
  );
}

export default App;
