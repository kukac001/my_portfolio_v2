import './App.css';
import MainGrid from './components/MainGrid';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Studies from './components/Studies';
import Works from './components/Works';
import SideBar from './components/SideBar';
import Chart from './components/Chart';
import Email from './components/Email';
import Footer from './components/Footer';

function App() {
  const data = {
    chartData: {
      labels: [
        "C, Java, Android Studio, SQL",
        "",
        "",
        "",
        "Python",
        "",
        "",
        "",
        "HTML, CSS, JavaScript, React, Tailwind CSS",
        "",
        "",
        "",
        "Got my first developer job",
      ],
      data: [
        1,
        2.215,
        2.22,
        2.25,
        4.2,
        4.3,
        4.5,
        3,
        3.3,
        5,
        2.325,
        2.325,
        10,
      ],
    },
  };
  

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
                <Chart info={data}/>
                <div className='bg-slate-800'>
                  <Works/>
                  <Email/>
                </div>
                <Footer/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
