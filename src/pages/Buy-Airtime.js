import { useContext } from "react";
import menuContext from "../context/menuContext";

const BuyAirtime = () => {
    const expandWidth = useContext(menuContext).expandWidth;
    return <div>
         <h1 className="text-center text-2xl mb-5  mt-5">Buy Airtime</h1>
         <form className="text-slate-700 mt-10 lg:mt-0 p-5 bg-slate-100 my-3  mx-5 rounded-3xl">
<label htmlFor="network" className="block font-bold">Network*</label>
<select required id="network" className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`}>
    <option>---------</option>
    <option>MTN</option>
    <option>GLO</option>
    <option>9MOBILE</option>
    <option>AIRTEL</option>

</select>
<label htmlFor="airtimeType" className="block font-bold">Airtime Type*</label>
<select required id="airtimeType" className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3  h-10`}>
    <option>---------</option>
    <option>VTU</option>
    <option>Share and Sell</option>
    <option>awuf4U</option> 
</select>
<p className="mb-10 text-slate-900  text-sm">VTU or Share and Sell</p>
<label htmlFor="phoneNumber" className="block font-bold mb-3">  
    Mobile Number*
</label>
<input id="phoneNumber" required className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3 h-10 mb-10`} type="number" min={0} maxLength={11}/>

<label htmlFor="phoneNumber" className="block font-bold mb-3">  
    Amount*
</label>
<input id="amount" required className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3 h-10 mb-10`} type="number" min={0} maxLength={11}/>

<label htmlFor="amountToPay" className="block font-bold mb-3">  
    Amount to pay <span className="text-slate-900  text-sm">1% Discount </span>*
</label>
<input id="amountToPay" readOnly required className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3 h-10 mb-10 `} type="number" min={0} maxLength={11}/>
<input type='submit' className={`block  ${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} cursor-pointer h-12 rounded-md font-bold bg-blue-900 text-xl py-2 text-white`} value="Buy Now" />
 
         </form>
    </div>
}
export default BuyAirtime;