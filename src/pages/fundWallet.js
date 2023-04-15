import WemaBank from "../images/wema-bank-plc-logo-vector.png"
const FundWallet = () => {
    return<div className="bg-blue-900 md:mx-3 lg:mx-8 mx-auto p-5 md:p-12 text-white rounded-3xl my-24 w-11/12 ">
        <img src={WemaBank} className='w-24' alt="wemaBankLogo"/>
    <h1 className="my-6 text-xl">Account Number: 8870939987</h1>
    <div className="md:flex justify-between my-5 text-lg">
        <div>
        Account Name: SuperJara - olasunkanmiusman1111@gmail.com 
        <br/>
        Bank Name: Wema bank 
        </div>
    <div>
       #50 <br/>
        CHARGE
    </div>
    </div>
    <p className="text-md">AUTOMATED BANK TRANSFER</p>
    <p className="text-sm">Make transfer to this account to fund your wallet</p>
    </div>
}
export default FundWallet;
