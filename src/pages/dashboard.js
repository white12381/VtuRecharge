const Dashboard = () => {
    return <div>
 <div className="bg-blue-900 px-16 border-0 border-t-2 border-slate-700 text-white py-20">
 <div className="text-xl font-bold mb-6">   Welcome to VtuRecharge.com </div>
 <div className="flex justify-between">
 <div>
    <p className="inline">Referral Link: </p>
    <p className="inline font-thin text-[14px]">https://{window.location.hostname}/signup/?referal=olasjs </p>
    <div className="inline bg-slate-700 text-[14px] px-3 cursor-pointer p-1 rounded-3xl">copy</div>
 </div>
 <div className="bg-yellow-300 p-2 px-4 -mt-5 mr-20 cursor-pointer rounded-3xl text-2sm ">
    Fund Wallet
 </div>
 </div>
 </div>
    </div>
}

export default Dashboard;