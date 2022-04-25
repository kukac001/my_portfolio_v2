import uni from '../images/uni.jpg'

const Studies = () => {
    return ( 
        <div className="text-white font-mono text-center">
            <h1 className="text-3xl mb-5 mt-5">Studies so far</h1>
            <div className="flex justify-center flex-col items-center sm:flex-row">
                <div>
                    <img src={uni} alt="Uni" className="rounded-xl"/>
                </div>
                <div className='sm:ml-3'>
                    <h1  className="text-xl mt-3 sm:text-2xl">University of Pannonia – Veszprem, Hungary</h1>
                    <p>(BSc in Business Informatics)</p>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Studies;