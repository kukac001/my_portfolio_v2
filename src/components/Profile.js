import { AiFillSetting } from 'react-icons/ai';
import { AiFillWechat } from 'react-icons/ai';
import { AiFillSliders } from 'react-icons/ai';
import { AiFillUnlock } from 'react-icons/ai';

const Profile = () => {
    return ( 
        <div className='bg-slate-600 mt-10 text-white font-mono text-center'>
            <h1 className="text-3xl mb-5">A quick introduction</h1>
        <div className="flex justify-center flex-col sm:flex-row items-center" id="profile">
            <div className="m-1 h-52 w-10/12 flex flex-col bg-slate-300 text-black rounded-xl items-center shadow-2xl mb-5 sm:w-4/12">
                <div className="mt-5">
                    <AiFillSetting size={56}/>
                </div>
                <div>
                    <h1 className="text-xl font-black tracking-widest lg:text-3xl">Efficiency</h1>
                </div>
                <div>
                    <p className="text-sm mt-5 lg:text-lg">Always want to find the most efficient solution for my problems.</p>
                </div>
            </div>
            <div className="m-1 h-52 w-10/12 flex flex-col bg-slate-300 text-black rounded-xl items-center shadow-2xl mb-5 sm:w-4/12">
            <div className="mt-5">
                    <AiFillWechat size={56}/>
                </div>
                <div>
                    <h1 className="text-xl font-black tracking-widest lg:text-3xl">Beloved</h1>
                </div>
                <div>
                    <p className="text-sm mt-5 lg:text-lg">Spending quality times with my loved ones. asdasdasdasdasdasd</p>
                </div>
            </div>
            <div className="m-1 h-52 w-10/12 flex flex-col bg-slate-300 text-black rounded-xl items-center shadow-2xl mb-5 sm:w-4/12">
            <div className="mt-5">
                    <AiFillSliders size={56}/>
                </div>
                <div>
                    <h1 className="text-xl font-black tracking-widest lg:text-3xl">Investment</h1>
                </div>
                <div>
                    <p className="text-sm mt-5 lg:text-lg">Investing in myself, also in crypto, stocks and commodities.</p>
                </div>
            </div>
            <div className="m-1 h-52 w-10/12 flex flex-col bg-slate-300 text-black rounded-xl items-center shadow-2xl mb-5 sm:w-4/12">
            <div className="mt-5">
                    <AiFillUnlock size={56}/>
                </div>
                <div>
                    <h1 className="text-xl font-black tracking-widest lg:text-3xl">Health</h1>
                </div>
                <div>
                    <p className="text-sm mt-5 lg:text-lg">Maintaining my health, both physically and mentally.</p>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Profile;