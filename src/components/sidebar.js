import LogoutIcon from "../icon/logoutsvg"
import { useContext } from "react"
import menuContext from "../context/menuContext"
import HomeIcon from "../icon/HomeIcon"
import DataIcon from "../icon/dataIcon"
import CallIcon from "../icon/callIcon"
import PaymentIcon from "../icon/PaymentIcon"
import WalletIcon from "../icon/WalletIcon"
import PricingIcon from "../icon/PricingIcon"
import { Link } from "react-router-dom"
const Sidebar = () => {
const navbarClick = useContext(menuContext).navbarClick;
const expandWidth = useContext(menuContext).expandWidth;
const setExpandWidth = useContext(menuContext).setExpandWidth;  
const mouseEnter = () => {
    setExpandWidth(true);
}
const mouseLeave = () => {
    if(!navbarClick){
    setExpandWidth(false);
    }
}
return <div className={`bg-slate-700  h-[100vh] fixed top-18  font-bold flex flex-col  space-y-14 pt-14 ${expandWidth ? 'w-1/2 md:w-1/3 lg:w-80' : 'w-20' }   overflow-auto`}  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
<Link to='/dashboard' className="text-white mx-auto cursor-pointer flex space-x-4 hover:bg-slate-500/50 p-3 hover:rounded-lg">
    <div> 
    <HomeIcon className="w-10 h-10 mx-auto"/>
    </div>
    <div className={`text-lg ${expandWidth ? 'block' : 'hidden'}`}>
        Dashboard
    </div>
</Link>
<Link to='/buydata' className="mx-auto cursor-pointer flex space-x-4 hover:bg-slate-500/50 p-3 hover:rounded-lg"> 
    <DataIcon className="w-10 h-10 mx-auto" />
    <div className={`text-white text-lg mt-1 ${expandWidth ? 'block' : 'hidden'}`}>
        Buy Data
    </div>
</Link>
<div className="mx-auto cursor-pointer flex space-x-4 hover:bg-slate-500/50 p-3 hover:rounded-lg"> 
    <CallIcon className="w-10 h-10 mx-auto"/>
    <div className={`text-white text-lg mt-1 ${expandWidth ? 'block' : 'hidden'}`}>
        Buy Airtime
    </div>
</div>
<div className="mx-auto cursor-pointer flex space-x-4 hover:bg-slate-500/50 p-3 hover:rounded-lg"> 
    <PaymentIcon  className="w-10 h-10 mx-auto" />
    <div className={`text-white text-lg mt-1 ${expandWidth ? 'block' : 'hidden'}`}>
        Utilities Payment
    </div>
</div>
<div className="mx-auto cursor-pointer flex space-x-4 hover:bg-slate-500/50 p-3 hover:rounded-lg"> 
    <WalletIcon className="w-10 h-10 mx-auto" />
    <div className={`text-white text-lg mt-1 ${expandWidth ? 'block' : 'hidden'}`}>
        Fund Wallet
    </div>
</div>
<div className="mx-auto cursor-pointer flex space-x-4 hover:bg-slate-500/50 p-3 hover:rounded-lg">
    {/* <img src={pricing} alt="pricing-icon" className="w-10 h-10 mx-auto" /> */}
    <PricingIcon className="w-10 h-10 mx-auto" />
    <div className={`text-white text-lg mt-1 ${expandWidth ? 'block' : 'hidden'}`}>
        Pricing
    </div>
</div>
<div className="mx-auto cursor-pointer flex space-x-4 hover:bg-slate-500/50 p-3 hover:rounded-lg">
    <LogoutIcon  className="w-10 h-10 mx-auto" />
    <div className={`text-white text-lg mt-1 ${expandWidth ? 'block' : 'hidden'}`}>
        Logout
    </div>
</div>

</div>
}
export default Sidebar;