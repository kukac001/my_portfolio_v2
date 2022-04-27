import Dani from '../images/dani.jpg'
import Typical from 'react-typical';

const MainGrid = () => {
    return ( 
        <div className="w-11/12  flex rounded-3xl font-mono text-white mt-5 text-2xl m-auto">
            <div className="flex flex-col justify-center items-center w-max-xs md:flex-row">
                <img src={Dani} alt="Logo" className="rounded-3xl w-3/5 mt-5 md:w-2/5 md:mb-5"/>
                <h1 className="text-xl bg-slate-400 sm:text-4xl mt-5 mb-5 md:ml-5">David Daniel Kozma</h1>
                <p className="text-lg ml-5 md:text-5xl">
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                            'Hello 👋', 1000,
                            'Welcome to my portfolio website!', 5000
                        ]}
                    />
                </p>
            </div>
        </div>
    );
}
 
export default MainGrid;