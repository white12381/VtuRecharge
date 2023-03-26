import { useContext } from "react";
import menuContext from "../context/menuContext";

const Electricity = () => {
    const submitButton = useContext(menuContext).submitButton;
    const formInput = useContext(menuContext).formInput;
    return <div>
         <h1 className="text-center text-2xl mb-5  mt-5">Electricity Payment</h1>
         <form className="text-slate-700 mt-10 lg:mt-0 p-5 bg-slate-100 my-3  mx-5 rounded-3xl">
<label htmlFor="discoName" className="formlabel">Disco name*</label>
<select required id="discoName" className={formInput}>
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
<label htmlFor="meterNumber" className="formlabel">Meter Number*</label>
<input required type='number' id="meterNumber" maxLength={11} className={formInput} />

<label htmlFor="meterType" className="formlabel">Meter Type*</label>
<select required id="meterType" className={formInput}>
<option>----</option>
<option>Prepaid</option>
<option>Postpaid</option>
</select>
<label htmlFor="amountType" className="formlabel">Amount Type*</label>
<input type='number' className={formInput} />
<label htmlFor="customerPhoneNumber" className="formlabel">Customer Number*</label>
<input type={"number"} maxLength={11} id='customerPhoneNumber' className={formInput} />
<input type='submit' className={submitButton} value="Buy Now" />
</form>
    </div>
}

export default Electricity;