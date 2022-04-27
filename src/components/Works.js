import { AiFillChrome } from 'react-icons/ai';
import { AiFillCode } from 'react-icons/ai';

const Works = () => {
    return ( 
        <div className="text-white font-mono text-center mt-40 bg-slate-800" id="projects">
            <h1 className="text-3xl mb-5">My recent work</h1>
            <p>(Click on the icon to see the code)</p>
            <div className="flex justify-center flex-col sm:flex-row items-center flex-wrap gap-2 sm:gap-12">
                <div class="flex items-center justify-center mt-10 shadow-2xl h-80 border-2 border-dashed border-slate-300 rounded-2xl">
                    <figure class="group relative max-w-xs cursor-pointer opacity-80 ">
                        <h1>ElonBot</h1>
                        <a class="hover:bg-slate-600" href="https://github.com/kukac001/Elonbot2">
                                    <button><AiFillCode size={70}/></button>
                                </a>
                        <p>Translates Elon Musk's latest tweet into Morse code which is then uploaded to my twitter account</p>
                        <h1 className='mt-5'>Used technologies</h1>
                        <ul className='list-disc mt-3'>
                            <li>Python</li>
                            <li>Twitter api</li>
                        </ul>
                    </figure>
                </div>
                <div class="flex items-center justify-center mt-10 shadow-2xl h-80 border-2 border-dashed border-slate-300 rounded-2xl">
                    <figure class="group relative max-w-xs cursor-pointer opacity-80 ">
                        <h1>TensorFlow LBP operator</h1>
                        <a class="hover:bg-slate-600" href="https://github.com/kukac001/tensorFlowCPU_LBP">
                                    <button><AiFillCode size={70}/></button>
                                </a>
                        <p>TensorFlow custom CPU operator which calculates "Local Binary Pattern" to speed up Neural Networks</p>
                        <h1 className='mt-5'>Used technologies</h1>
                        <ul className='list-disc mt-3'>
                            <li>C++</li>
                            <li>TensorFlow</li>
                        </ul>
                    </figure>
                </div>
                <div class="flex items-center justify-center mt-10 shadow-2xl h-80 border-2 border-dashed border-slate-300 rounded-2xl">
                    <figure class="group relative max-w-xs cursor-pointer opacity-80 ">
                        <h1>This portfolio website</h1>
                        <a class="hover:bg-slate-600" href="https://github.com/kukac001/my_portfolio_v2">
                                    <button><AiFillChrome size={70}/></button>
                                </a>
                        <p>A quick introduction about myself, a collection of my current knowledge and my hobbies</p>
                        <h1 className='mt-5'>Used technologies</h1>
                        <ul className='list-disc mt-3'>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ul>
                    </figure>
                </div>
                <div class="flex items-center justify-center mt-10 shadow-2xl h-80 border-2 border-dashed border-slate-300 rounded-2xl">
                    <figure class="group relative max-w-xs cursor-pointer opacity-80 ">
                        <h1>Albi-soft</h1>
                        <a class="hover:bg-slate-600" href="https://albi-soft.hu/">
                                    <button><AiFillChrome size={70}/></button>
                                </a>
                        <p>My friends and I created a startup to make websites and softwares for companies.</p>
                        <h1 className='mt-5'>Used technologies</h1>
                        <ul className='list-disc mt-3'>
                            <li>React, Next</li>
                            <li>Tailwind</li>
                        </ul>
                    </figure>
                </div>
            </div>
        </div>
    );
}
 
export default Works;