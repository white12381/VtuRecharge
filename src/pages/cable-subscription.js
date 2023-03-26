import { useContext } from "react";
import menuContext from "../context/menuContext";

const CableSubscription = () => {
    const submitButton = useContext(menuContext).submitButton;
    const formInput = useContext(menuContext).formInput;
    const expandWidth = useContext(menuContext).expandWidth;
    const changeCableName = (e) => {
        const cableName = e.target.value;
        const Dstv = document.querySelectorAll('.DStv')
        const Startime = document.querySelectorAll('.Startime');
        const GOTV = document.querySelectorAll('.GOTV');
        if(cableName === 'DSTV'){
            Dstv.forEach(dstv => {
                if(dstv.classList.contains('hidden')){ dstv.classList.remove('hidden')}
            });
            GOTV.forEach(gotv => {
                if(!gotv.classList.contains('hidden')){gotv.classList.add('hidden')}
            });
            Startime.forEach( startime => {
                if(!startime.classList.contains('hidden')){startime.classList.add('hidden')};
            })
        }
        else if(cableName === 'GOTV'){
            Dstv.forEach(dstv => {
                if(!dstv.classList.contains('hidden')){ dstv.classList.add('hidden')}
            });
            GOTV.forEach(gotv => {
                if(gotv.classList.contains('hidden')){gotv.classList.remove('hidden')}
            });
            Startime.forEach( startime => {
                if(!startime.classList.contains('hidden')){startime.classList.add('hidden')};
            })
        }

        else if(cableName === 'STARTIME'){
            Dstv.forEach(dstv => {
                if(!dstv.classList.contains('hidden')){ dstv.classList.add('hidden')}
            });
            GOTV.forEach(gotv => {
                if(!gotv.classList.contains('hidden')){gotv.classList.add('hidden')}
            });
            Startime.forEach( startime => {
                if(startime.classList.contains('hidden')){startime.classList.remove('hidden')};
            })
        }

        else{
            Dstv.forEach(dstv => {
                if(!dstv.classList.contains('hidden')){ dstv.classList.add('hidden')}
            });
            GOTV.forEach(gotv => {
                if(!gotv.classList.contains('hidden')){gotv.classList.add('hidden')}
            });
            Startime.forEach( startime => {
                if(!startime.classList.contains('hidden')){startime.classList.add('hidden')};
            })
        }
    }
    return <div>
        <h1 className="text-center text-2xl mb-5  mt-5">{ expandWidth ?"CableSub" :"Cable Subscription" }</h1>
        <div className="text-slate-700 mt-10 lg:mt-0 p-5 bg-slate-100 my-3  mx-5 rounded-3xl flex flex-col-reverse lg:flex-row md:space-x-5">
        <form className="mt-10">
            <label className="formlabel" htmlFor="cableName">Cablename*</label>
            <select required id="cableName" className={formInput} onChange={changeCableName}>
                <option>------</option>
                <option>DSTV</option>
                <option>GOTV</option>
                <option>STARTIME</option>
            </select>
            <label className="formlabel" htmlFor="smartCardNumber">Smart Card number / IUC number*</label>
            <input type={'text'} id='smartCardNumber' className={formInput} />
            <label className="formlabel" htmlFor="cablePlan">Cableplan*</label>
            <select required id="cablePlan" className={formInput}>
                    <option>-----</option>
                    <option className="GOTV hidden">Gotv  Smallie-Monthly = #980</option>
                    <option className="GOTV hidden">Gotv   Jinja = #1900</option>
                    <option className="GOTV hidden">Gotv  Smallie-Quarterly = #2700</option>
                    <option className="GOTV hidden">Gotv Jolli = #2900</option>
                    <option className="GOTV hidden">Gotv Max = #4300</option>
                    <option className="GOTV hidden">Gotv  Smallie - Yearly = #7500</option>
                    <option className="DStv hidden">Dstv Padi = #2200</option>
                    <option className="DStv hidden">Dstv HDPVR Access Service = #2725</option>
                    <option className="DStv hidden">Dstv ExtraView Access = #3000</option>
                    <option className="DStv hidden">Dstv  Yanga = #3050</option>
                    <option className="DStv hidden">Dstv Padi + ExtraView = #4500</option>
                    <option className="DStv hidden">Dstv  Yanga + ExtraView = #5200</option>
                    <option className="DStv hidden">Dstv  Confam = #5400</option>
                    <option className="DStv hidden">Dstv  Asia = #6450</option>
                    <option className="DStv hidden">Dstv  Confam + ExtraView = #7300</option>
                    <option className="DStv hidden">Dstv Compact = #9200</option>
                    <option className="DStv hidden">Dstv Compact + ExtraView = #12200</option>
                    <option className="DStv hidden">Dstv  Compact Plus = #14600</option>
                    <option className="DStv hidden">Dstv  Compact Plus - ExtraView = #17500</option>
                    <option className="DStv hidden">Dstv  Premium Asia = #20800</option>
                    <option className="DStv hidden">Dstv Premium + ExtraView = #21400 </option>
                    <option className="DStv hidden">Dstv  Premium = #22000</option>
                    <option className="DStv hidden">Dstv  French = #26000</option>
                    <option className="Startime hidden">Nova - 95Naira - 1 Day = #95</option>
                    <option className="Startime hidden">Basic - 170 Naira -1 Day = #170</option>
                    <option className="Startime hidden">Smart - 220 Naira -1 Day = #220</option>
                    <option className="Startime hidden">Nova - 330 Naira - 1 Day = #330</option>
                    <option className="Startime hidden">Classic -350 Naira - 1 Day = #350 </option>
                    <option className="Startime hidden">Super - 450 Naira - 1 Day = #450</option>
                    <option className="Startime hidden">Basic - 650 Naira - 1 Week = #650</option>
                    <option className="Startime hidden">Smart - 800 - 1 Week = #800</option>
                    <option className="Startime hidden">Nova - 1000 Naira - 1 Month = #1000</option>
                    <option className="Startime hidden">Classic - 1400 Naira - 1 Week = #1400</option>
                    <option className="Startime hidden">Super 1650 Naira - 1 Week = #1650</option>
                    <option className="Startime hidden">Basic - 1950 Naira - 1 Month = #1950 </option>
                    <option className="Startime hidden">Smart - 2800 Naira - 1 Month = #2800</option>
                    <option className="Startime hidden">Classic -2950 Naira - 1 Month = #2950</option>
                    <option className="Startime hidden">Super - 5200 Naira - 1 Month = #5250</option>
            </select>
            <input type={'submit'} value='Buy Now' className={submitButton} />
        </form>
        <div className={`${expandWidth ? 'text-sm md:text-3xl': 'text-3xl'} leading-loose`}>
        You can contact DSTV hidden/GOtv hidden's customers care unit on 01-2703232/08039003788 or the toll free lines: 08149860333, 07080630333, and 09090630333 for assistance,  hiddenS's customers care unit on (094618888, 014618888)

        </div>
        </div>
    </div>
}
export default CableSubscription;