import HomePage from "./pages/home-page"; 
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AllMenu from "./components/All-menu";
const App = () => {
return <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register/>} />
<Route path="/*" element={<AllMenu/>} />
</Routes>
</BrowserRouter>
}
export default App;