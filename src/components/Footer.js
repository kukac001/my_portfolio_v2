
const Footer = () =>{
  return (
    <div className="text-white text-mono text-xl flex flex-col justify-end w-full  bg-slate-600">
        <div className="">
        <h1 className="underline">David Daniel Kozma</h1>
            <ul>
                <li className="hover:text-blue-800 duration-500">
                    <a href='#profile'>Profile</a>
                </li>
                <li className="hover:text-blue-800 duration-500">
                    <a href='#education'>Education</a>
                </li>
                <li className="hover:text-blue-800 duration-500">
                    <a href='#technologies'>Technologies</a>
                </li>
                <li className="hover:text-blue-800 duration-500">
                    <a href='#projects'>Projects</a>
                </li>
                <li className="hover:text-blue-800 duration-500">
                    <a href='#end'>Get in touch</a>
                </li>
            </ul>
            
        </div>
        <div><p className="flex justify-center">&#169; Daniel. All right reserved</p></div>
    </div>
  )
}
  
 
export default Footer;