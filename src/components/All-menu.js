import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import menuContext from "../context/menuContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import BuyData from "./buy-data";
const AllMenu = () =>  { 
    const expandWidth = useContext(menuContext).expandWidth;
return <div>
<Navbar />
<div className="flex">
    <Sidebar/>
    <div className={`text-black ${expandWidth ? 'w-1/3 md:w-2/3 lg:w-full pl-[200px] md:pl-[330px]' : 'w-full pl-28 md:pl-24' }`}>
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/buydata" element={<BuyData />} />
    </Routes>
    </div>
</div>
</div>
}
export default AllMenu;