import LogoutIcon from "../icon/logoutsvg"
import { useContext } from "react"
import menuContext from "../context/menuContext"
import HomeIcon from "../icon/HomeIcon"
import DataIcon from "../icon/dataIcon"
import CallIcon from "../icon/callIcon"
import PaymentIcon from "../icon/PaymentIcon"
import WalletIcon from "../icon/WalletIcon"
import PricingIcon from "../icon/PricingIcon"
import Avatar from "../images/avatar.png" 
import { Link } from "react-router-dom"
const Sidebar = () => {
const navbarClick = useContext(menuContext).navbarClick;
const expandWidth = useContext(menuContext).expandWidth;
const setExpandWidth = useContext(menuContext).setExpandWidth;  
const sidebarMenu = `text-md ${expandWidth ? 'block' : 'hidden'}`;
const mouseEnter = () => {
    setExpandWidth(true);
}
const mouseLeave = () => {
    if(!navbarClick){
    setExpandWidth(false);
    }
}
return <div className={`bg-slate-700 text-white transition-all duration-500 ease-linear  lg:h-5/6 h-[90vh] fixed top-18  font-bold flex flex-col  space-y-10 py-10 ${expandWidth ? 'w-58 md:w-92 lg:w-80' : 'w-20' }  ${expandWidth ? 'flex' : 'hidden md:flex'}  overflow-auto`}  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
<div className="flex  overflow-x-visible w-10 space-x-4">
<img src={Avatar}  className='w-12 h-12' alt="Avatar"/>
<div className={`word-all ${sidebarMenu} ${expandWidth ? 'flex-col' : 'hidden'}`}>
    <h1>Olasunkanmiusman1111@gmail.com</h1>
    <div>Balance : #99.99</div>

</div>
</div>
<Link to='/dashboard' className="sidebarMenuItems">
    <div> 
    <HomeIcon className="sideBarIcons"/>
    </div>
    <div className={sidebarMenu}>
        Dashboard
    </div>
</Link>
<Link to='/buydata' className="sidebarMenuItems"> 
    <DataIcon className="sideBarIcons" />
    <div className={sidebarMenu}>
        Buy Data
    </div>
</Link>
<Link to='/buyairtime' className="sidebarMenuItems"> 
    <CallIcon className="sideBarIcons"/>
    <div className={sidebarMenu}>
        Buy Airtime
    </div>
</Link>
<details> 
   <summary className="sidebarMenuItems">
    <PaymentIcon  className="sideBarIcons" />
    <div className={sidebarMenu}>
        Utilities Payment
    </div>
    </summary>
    <div className={`text-center flex flex-col space-y-7 mt-7  ${expandWidth ? 'block' : 'hidden'}`}>
       <Link to='/electricity'> Electricity Payment </Link>
       <Link to='/cablesubscription' > Cable Subscription </Link>
    </div>
</details>
<div className="sidebarMenuItems"> 
    <WalletIcon className="sideBarIcons" />
    <Link className={sidebarMenu} to='/fundwallet'>
        Fund Wallet
    </Link>
</div>
<div className="sidebarMenuItems"> 
    <PricingIcon className="sideBarIcons" />
    <div className={sidebarMenu}>
        Pricing
    </div>
</div>
<div className="sidebarMenuItems">
    <LogoutIcon  className="sideBarIcons" />
    <div className={sidebarMenu}>
        Logout
    </div>
</div>

</div>
}
export default Sidebar;