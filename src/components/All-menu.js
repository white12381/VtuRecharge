import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import menuContext from "../context/menuContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import BuyData from "../pages/buy-data";
import BuyAirtime from "../pages/Buy-Airtime";
import Electricity from "../pages/Electricity";
import CableSubscription from "../pages/cable-subscription";
const AllMenu = () =>  { 
    const expandWidth = useContext(menuContext).expandWidth;
return <div>
<Navbar />
<div className="flex">
    <Sidebar/>
    <div className={`  ${expandWidth ? 'w-52 md:w-2/3 lg:w-full ml-[190px] lg:ml-[320px] md:ml-[258px]' : 'w-full  md:ml-20' }`}>
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/buydata" element={<BuyData />} />
        <Route  path="/buyairtime" element={<BuyAirtime/>} />
        <Route path="/electricity" element={<Electricity/>} />
        <Route path="/cablesubscription" element={<CableSubscription/>} />
    </Routes>
    </div>
</div>
</div>
}
export default AllMenu;