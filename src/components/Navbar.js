import logoDaniel from '../images/logoDaniel.PNG'
import { useState } from "react"

const Navbar = () =>{
    let Links =[
      {name:"PROFILE",link:"#profile"},
      {name:"EDUCATION",link:"/"},
      {name:"PREVIOUS JOBS",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full top-0 left-0 bg-slate-300'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <img src={logoDaniel} alt="Logo" className="w-2/12"/>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`mr-6 md:flex md:items-center  bg-slate-400 md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className=' font-mono hover:text-blue-800 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}
  
 
export default Navbar;