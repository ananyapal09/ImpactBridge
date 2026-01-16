// import { Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="min-h-screen bg-white text-slate-900">
//       <nav className="p-6 border-b flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-blue-600">ImpactBridge</h1>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
//       </nav>
      
//       <main className="flex flex-col items-center justify-center mt-20">
//         <h2 className="text-5xl font-extrabold mb-4">Transparent Giving.</h2>
//         <p className="text-gray-500 text-lg">Your impact, verified and visible.</p>
//       </main>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Causes from './pages/Causes';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;