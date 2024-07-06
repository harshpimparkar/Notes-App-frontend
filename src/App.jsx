import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-account" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
