import Dani from '../images/dani.jpg'

const MainGrid = () => {
    return ( 
        <div className="w-11/12 h-3/5 bg-white bg-opacity-10 flex rounded-3xl border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-md font-mono text-white mt-5 text-2xl m-auto">
            <div className="grid grid-cols-2">
                <div className=''>
                    <h1 className="text-xl bg-slate-400 sm:text-4xl">David Daniel Kozma</h1>
                    <div className='grid grid-cols-3 mt-2  text-sm sm:text-base'>
                        <div className=''>
                            <p className=''><a href="#profile">Profile</a></p>
                        </div>
                        <div>
                            <p className='ml-4 sm:ml-0'><a href="#profile">Education</a></p>
                        </div>
                        <div>
                            <p className='ml-12 sm:ml-0'><a href="#profile">Technologies</a></p>
                        </div>
                    </div>
                </div>
                <div className='flex m-auto justify-center'>
                    <img src={Dani} alt="Logo" className="rounded-3xl bg-red-100 w-4/5 md:w-3/5 xl:w-2/5"/>
                </div>
            </div>
        </div>
    );
}
 
export default MainGrid;