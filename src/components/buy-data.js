import { useContext } from "react";
import menuContext from "../context/menuContext";

const BuyData = () => {
    const expandWidth = useContext(menuContext).expandWidth;
    return <div className="pl-5">
 <h1 className="text-center text-2xl  mt-5">Buy Data Plan</h1>
 <div className="flex  flex-col-reverse lg:flex-row justify-between p-5 bg-slate-100 my-3  mx-5 rounded-3xl">
 <form className="text-slate-700 mt-10 lg:mt-0">
<label htmlFor="network" className="block font-bold">Network*</label>
<select required id="network" className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[300px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`}>
    <option>---------</option>
    <option>MTN</option>
    <option>GLO</option>
    <option>9MOBILE</option>
    <option>AIRTEL</option>

</select>
<label htmlFor="dataType" className="block font-bold">Data Type*</label>
<select id="dataType" required className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[300px] "} pl-3 focus:border-blue-900 mt-3 h-10`}>
<option>---------</option>
<option>SME</option>
<option>Gifting</option>
</select>
<p className="mb-10 text-slate-900  text-sm">Select Plan Type SME or Gifting</p>
<label htmlFor="phoneNumber" className="block font-bold">  
    Mobile Number*
</label>
<input id="phoneNumber" required className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[300px]"} pl-3 h-10 my-3`} type="number" min={0} maxLength={11}/>

<label htmlFor="dataType" className="block font-bold mt-10">Amount*</label>
<select id="dataType" required className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[300px]"} pl-3 focus:border-blue-900 mt-3 h-10`}>
<option>---------</option>
<option>1gb --- </option>
<option>2gb ---</option>
</select>
<input type='submit' className={`block my-10 ${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[300px]"} cursor-pointer h-12 rounded-md font-bold bg-blue-900 text-xl py-2 text-white`} value="Buy Now" />
 </form>
 <div className="text-slate-700">
    <h1 className="-mt-5 mb-2 font-bold text-blue-900 text-lg text-center">Codes for Data Balance:</h1>
    <div>
        <div className="bg-yellow-300 p-2">MTN [SME] *461*4#</div>
        <div className="bg-yellow-300 p-2">MTN [Gifting] *131*4# or *460*260#</div>
        <div className="bg-gray-300 p-2">9mobile [Gifting] *228#</div>
        <div className="bg-orange-200 p-2">Airtel *140#</div>
        <div className="bg-green-200 p-2">Glo *127*0#</div>
    </div>
 </div>
 </div>
     </div>
}

export default BuyData;