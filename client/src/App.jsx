

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import NGOs from "./pages/NGOs";
// import NGOProfile from "./pages/NGOProfile";
// import Donate from "./pages/Donate";
// import Certificate from "./pages/Certificate";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/ngos" element={<NGOs />} />
//         <Route path="/ngo/:id" element={<NGOProfile />} />
//         <Route path="/donate" element={<Donate />} />
//         <Route path="/certificate" element={<Certificate />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NGOs from "./pages/NGOs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NGOProfile from "./pages/NGOProfile";
import Donate from "./pages/Donate";
import Certificate from "./pages/Certificate";
import Navbar from "./components/Navbar";
import AIAssistant from "./pages/AIAssistant";
import MyDonationTracking from "./pages/MyDonationTracking";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/ngo/1" element={<NGOProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/ai" element={<AIAssistant />} />
         <Route path="/track" element={<MyDonationTracking />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


