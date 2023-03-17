import mtndata from "../images/mtn-data.png"
const MtnDataBundle = ({price,data}) => {
    return  <div className="flex m-5 w-3/4 cursor-pointer">
    <div className="mt-3 -mr-5 rounded-lg bg-white h-12 w-full p-3 hover:bg-blue-900 hover:text-white"> {data} === {price} </div>
    <div className="mt-4">
      <img src={mtndata} alt="mtn data" className="w-10 h-10" />
    </div>
   </div>
}
export default MtnDataBundle;