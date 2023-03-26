import { useContext } from "react";
import menuContext from "../context/menuContext";

const BuyData = () => { 
    const submitButton = useContext(menuContext).submitButton;
    const formInput = useContext(menuContext).formInput;
    return <div>
 <h1 className="text-center text-2xl  mt-5">Buy Data Plan</h1>
 <div className="flex  flex-col-reverse lg:flex-row justify-between p-5 bg-slate-100 my-3  mx-5 rounded-3xl">
 <form className="text-slate-700 mt-10 lg:mt-0">
<label htmlFor="network" className="formlabel">Network*</label>
<select required id="network" className={formInput}>
    <option>---------</option>
    <option>MTN</option>
    <option>GLO</option>
    <option>9MOBILE</option>
    <option>AIRTEL</option>

</select>
<label htmlFor="dataType" className="formlabel">Data Type*</label>
<select id="dataType" required className={formInput}>
<option>---------</option>
<option>SME</option>
<option>Gifting</option>
</select>
<p className="bottomlabel">Select Plan Type SME or Gifting</p>
<label htmlFor="phoneNumber" className="formlabel">  
    Mobile Number*
</label>
<input id="phoneNumber" required className={formInput} type="number" min={0} maxLength={11}/>

<label htmlFor="dataType" className="formlabel">Amount*</label>
<select id="dataType" required className={formInput}>
<option>---------</option>
<option>1gb --- </option>
<option>2gb ---</option>
</select>
<input type='submit' className={submitButton} value="Buy Now" />
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