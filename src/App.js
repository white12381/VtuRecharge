import HomePage from "./pages/home-page";
import Login from "./pages/login";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
const App = () => {
return <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter>
}
export default App;