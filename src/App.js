import './App.css';
import MainGrid from './components/MainGrid';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Studies from './components/Studies';
import Works from './components/Works';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App w-full h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black relative overflow-auto ">
      
      <div class="h-screen flex text-white font-mono ">
            <div class="flex w-0 z-10 items-end">
              <SideBar/>
            </div>
        <div class="flex-1 flex overflow-hidden ">
                <div class="flex-1 overflow-y-scroll">
                <Navbar/>
                <MainGrid/>
                <Profile/>
                <Studies/>
                <Works/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
