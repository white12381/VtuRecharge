 import HambergMenuIcon from "../icon/HambergMenuIcon";
import { useContext} from "react";
import menuContext from "../context/menuContext"; 
import ThreedotIcon from "../icon/ThreedotIcon";
const Navbar = () => { 
const navbarClick = useContext(menuContext).navbarClick;
const setNavbarClick = useContext(menuContext).setNavbarClick; 
const expandWidth = useContext(menuContext).expandWidth;
const setExpandWidth = useContext(menuContext).setExpandWidth;  
    const toggleMenuClick = () => { 
        if(!navbarClick){
             setExpandWidth(true); 
             setNavbarClick(true);
        }
        else{ 
            setExpandWidth(false); 
            setNavbarClick(false);
            }   
    }
return <div className={`bg-blue-900 flex space-x-20 md:space-x-0 md:justify-between sticky top-0 left-0 w-full text-white pt-6`}>
    <div className={`border-b-2 bg-blue-800/75 p-4   border-0  h-18 ${expandWidth ? 'w-2/3 md:w-1/3 lg:w-80' : 'w-20' }`} id='menu'>     <ThreedotIcon  onClick={toggleMenuClick} className={`w-10 h-8 cursor-pointer ${expandWidth ? 'hidden' : 'block' }`} />
    <div className={`space-x-16  ${expandWidth ? 'flex' : 'hidden'}`} id="hambergMenu">
        <div className={`text-xl hidden md:block`}>Welcome</div>
        <div>
            <HambergMenuIcon className='w-10 h-10 cursor-pointer' onClick={toggleMenuClick} /> 
        </div>
    </div>
    </div>
    <div className="text-right  cursor-pointer text-md px-2 md:px-10 pt-4 hidden md:block" id="logout">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-8 h-8 inline-block fill-white"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 511.99">
<path fill-rule="nonzero" d="M256 0c70.68 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.32 512 256s-28.66 134.69-74.98 181.01C390.7 483.33 326.68 511.99 256 511.99s-134.7-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.7 74.98-181.02C121.3 28.66 185.32 0 256 0zm-19.16 136.45c0-10.57 8.59-19.16 19.16-19.16s19.16 8.59 19.16 19.16V199c0 10.57-8.59 19.16-19.16 19.16s-19.16-8.59-19.16-19.16v-62.55zm72.94 52.45c-8.17-6.65-9.42-18.69-2.78-26.87 6.65-8.17 18.7-9.42 26.87-2.77 14.26 11.56 25.88 26.2 33.8 42.84 7.67 16.11 11.97 34.14 11.97 53.12 0 34.14-13.85 65.06-36.21 87.42l-1.17 1.08c-22.31 21.74-52.77 35.13-86.26 35.13-34.06 0-64.99-13.86-87.38-36.26-22.41-22.31-36.26-53.23-36.26-87.37 0-18.89 4.29-36.86 11.94-52.97 7.93-16.69 19.53-31.36 33.71-42.9 8.17-6.65 20.22-5.4 26.86 2.77 6.65 8.18 5.4 20.22-2.77 26.87-9.76 7.95-17.76 18.06-23.22 29.57-5.25 11.04-8.2 23.49-8.2 36.66 0 23.56 9.57 44.89 24.99 60.32 15.38 15.47 36.72 24.99 60.33 24.99 23.16 0 44.13-9.18 59.44-24.05l.89-.94c15.42-15.43 24.99-36.76 24.99-60.32 0-13.15-2.96-25.59-8.23-36.66a85.591 85.591 0 0 0-23.31-29.66zm102.97-89.65C372.64 59.15 317.21 34.33 256 34.33c-61.21 0-116.64 24.82-156.75 64.92-40.1 40.11-64.92 95.54-64.92 156.75 0 61.21 24.82 116.63 64.92 156.74 40.11 40.1 95.54 64.92 156.75 64.92 61.21 0 116.64-24.82 156.75-64.92 40.1-40.11 64.92-95.53 64.92-156.74 0-61.21-24.82-116.64-64.92-156.75z"/>
</svg>
        Logout
    </div>
    <div className={`text-2xl block mt-3 md:hidden`}>Welcome</div>
</div>
}

export default Navbar;
