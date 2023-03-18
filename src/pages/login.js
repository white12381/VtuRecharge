import { Link } from "react-router-dom";

const Login = () => {
return <div className="bg-blue-900 h-[100vh] pt-20">
<div className="bg-white md:w-2/3 lg:w-[35%] h-[470px] rounded-3xl mx-5 md:mx-auto">
    <div className=" text-center text-2xl py-12 font-semibold">Sign In</div>
<form className="ml-14 w-2/3">
    <label className="block" htmlFor="Username">Username*</label>
    <input type="text" className="border border-blue-900 w-full h-10 mt-2  p-3" id="Username" required />
    <label className="block mt-6" htmlFor="Password">Password*</label>
    <input type="password" id="Password" className="border border-blue-900 w-full h-10 mt-2  p-3" required />
<div className="flex justify-between mt-8">
    <div className="text-blue-900 font-semibold cursor-pointer mt-3">Forgot Password ?</div>
    <button type="submit" className="bg-blue-900 text-white p-4">Sign In</button>
</div>
</form>
<p className="text-center mt-6">
    Don't have an account yet ? <Link to='/register' className="cursor-pointer font-semibold text-blue-900">Sign Up</Link>
</p>
</div>
</div>
}
export default Login;