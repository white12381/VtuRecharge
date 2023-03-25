import { useContext } from "react";
import menuContext from "../context/menuContext";

const Electricity = () => {
    const expandWidth = useContext(menuContext).expandWidth;
    return <div>
         <h1 className="text-center text-2xl mb-5  mt-5">Electricity Payment</h1>
         <form className="text-slate-700 mt-10 lg:mt-0 p-5 bg-slate-100 my-3  mx-5 rounded-3xl">
<label htmlFor="discoName" className="block font-bold">Disco name*</label>
<select required id="discoName" className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`}>
    <option>---------</option>
    <option>Ikeja Electric</option>
    <option>Eko Electric</option>
    <option>Abuja Electric</option>
    <option>Kano Electric</option>
    <option>Enugu Electric</option>
    <option>Port Harcourt Electric</option>
    <option>Ibadan Electric</option>
    <option>Kaduna Electric</option>
    <option>Jos Electric</option>
    <option>Benin Electric</option>
    <option>Yola Electric</option>



</select>
<label htmlFor="meterNumber" className="block font-bold">Meter Number*</label>
<input required type='number' id="meterNumber" maxLength={11} className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`} />

<label htmlFor="meterType" className="block font-bold">Meter Type*</label>
<select required id="meterType" className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`}>
<option>----</option>
<option>Prepaid</option>
<option>Postpaid</option>
</select>
<label htmlFor="amountType" className="block font-bold">Amount Type*</label>
<input type='number' className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`} />
<label htmlFor="customerPhoneNumber" className="block font-bold">Customer Number*</label>
<input type={"number"} maxLength={11} id='customerPhoneNumber' className={`${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`} />
<input type='submit' className={`block  ${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} cursor-pointer h-12 rounded-md font-bold bg-blue-900 text-xl py-2 text-white`} value="Buy Now" />
</form>
    </div>
}

export default Electricity;