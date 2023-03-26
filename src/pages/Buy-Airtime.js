import { useContext } from "react";
import menuContext from "../context/menuContext";

const BuyAirtime = () => { 
    const submitButton = useContext(menuContext).submitButton;
    const formInput = useContext(menuContext).formInput;
    return <div>
         <h1 className="text-center text-2xl mb-5  mt-5">Buy Airtime</h1>
         <form className="text-slate-700 mt-10 lg:mt-0 p-5 bg-slate-100 my-3  mx-5 rounded-3xl">
<label htmlFor="network" className="formlabel">Network*</label>
<select required id="network" className={formInput}>
    <option>---------</option>
    <option>MTN</option>
    <option>GLO</option>
    <option>9MOBILE</option>
    <option>AIRTEL</option>

</select>
<label htmlFor="airtimeType" className="formlabel">Airtime Type*</label>
<select required id="airtimeType" className={formInput}>
    <option>---------</option>
    <option>VTU</option>
    <option>Share and Sell</option>
    <option>awuf4U</option> 
</select>
<p className="bottomlabel">VTU or Share and Sell</p>
<label htmlFor="phoneNumber" className="formlabel">  
    Mobile Number*
</label>
<input id="phoneNumber" required className={ formInput} type="number" min={0} maxLength={11}/>

<label htmlFor="phoneNumber" className="formlabel">  
    Amount*
</label>
<input id="amount" required className={ formInput} type="number" min={0} maxLength={11}/>

<label htmlFor="amountToPay" className="formlabel">  
    Amount to pay <span className="text-slate-900  text-sm">1% Discount </span>*
</label>
<input id="amountToPay" readOnly required className={ formInput} type="number" min={0} maxLength={11}/>
<input type='submit' className={submitButton} value="Buy Now" />
 
         </form>
    </div>
}
export default BuyAirtime;