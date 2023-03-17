import HomePage from "./pages/home-page";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
const App = () => {
return <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
</Routes>
</BrowserRouter>
}
export default App;