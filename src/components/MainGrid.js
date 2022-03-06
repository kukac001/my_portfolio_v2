import Dani from '../images/dani.jpg'
import Tilt from 'react-parallax-tilt';

const MainGrid = () => {
    return ( 
        <div className="w-11/12 h-3/5 bg-white bg-opacity-10 grid grid-cols-12 gap-4 text-3xl rounded-3xl border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-md font-mono text-white text-center justify-center content-center mx-auto mt-5 text-2xl">
            <div className="col-span-3 row-span-6 pt-5">
                <img src={Dani} alt="Logo" className="w-3/5 mx-auto rounded-3xl"/>
                <h1 className="mt-5 ">David Daniel Kozma</h1>
            </div>
            
            <div className="col-span-9 row-span-6">
                <h1>asd</h1>
                <h1>asd</h1>
                <h1>asd</h1>
                <h1>asd</h1>
                <h1>asd</h1>
            </div>
          
        </div>
    );
}
 
export default MainGrid;