import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { SiCodewars } from 'react-icons/si';

const SideBar = () => {
    return ( 
        <div class="flex flex-col h-72">

            
            <a class="hover:bg-slate-600" href="https://www.linkedin.com/in/david-daniel-kozma-647838220/">
                <button><AiOutlineLinkedin size={42}/></button>
            </a>
            <a class="hover:bg-slate-600 mt-3" href="https://github.com/kukac001">
                <button><FiGithub size={42}/></button>
            </a>
            <a class="hover:bg-slate-600 mt-3" href="https://www.codewars.com/users/kukac001">
                <button><SiCodewars size={42}/></button>
            </a>
            
        </div>
    );
}
 
export default SideBar;