import { Link } from "react-router-dom";
const Register = () => {
return <div className="bg-blue-900 py-20">
    <div className="bg-white md:w-2/3 lg:w-[35%]  rounded-3xl mx-5 md:mx-auto py-10">
    <div className=" text-center text-2xl py-12 font-semibold">Sign Up</div>
<form className="ml-14 w-2/3">
    <label className="block" htmlFor="FullName">FullName*</label>
    <input type="text" className="border border-blue-900 w-full h-10 mt-2  p-3" id="FullName" required />
    <label className="block mt-6" htmlFor="Username">Username*</label>
    <input type="text" className="border border-blue-900 w-full h-10 mt-2  p-3" id="Username" required />
    <label className="block mt-6" htmlFor="Email">Email*</label>
    <input type="email" className="border border-blue-900 w-full h-10 mt-2  p-3" id="Email" required />
    <label className="block mt-6" htmlFor="Phone">Phone*</label>
    <input type="number" className="border border-blue-900 w-full h-10 mt-2  p-3" id="Phone" maxLength="11" minLength="11" required />
    <label className="block mt-6" htmlFor="Address">Address*</label>
    <input type="text" className="border border-blue-900 w-full h-10 mt-2  p-3" id="Address" required />
    <label className="block mt-6" htmlFor="Password">Password*</label>
    <input type="password" id="Password" minLength='8' className="border border-blue-900 w-full h-10 mt-2  p-3" required />
    <p className="text-blue-900 text-sm">min_lenght-8 mix characters [i.e tunde123]</p>
    <label className="block mt-6" htmlFor="ConfirmPassword">Confirm Password*</label>
    <input type="password" id="ConfirmPassword" minLength='8' className="border border-blue-900 w-full h-10 mt-2  p-3" required />
    <p className="text-blue-900 text-sm">Enter same password as before </p>
    <input type="checkbox" className="mt-6 mr-2" required />
    <label className="text-blue-900 font-bold">I Agree the terms and conditions</label>
    <button type="submit" className="bg-blue-900 mt-6 text-white p-3 mx-auto block">Sign Up</button>
</form>
<p className="text-center mt-6">
    Already a member? <Link to='/login' className="cursor-pointer font-semibold text-blue-900">Sign In</Link>
</p>
    </div>
</div>
}
export default Register;