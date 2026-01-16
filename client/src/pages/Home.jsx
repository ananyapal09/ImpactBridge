// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="container">
//       <div className="card" style={{ textAlign: "center", padding: "60px" }}>
//         <h1 style={{ fontSize: "36px" }}>
//           Transparent Donations. <span style={{ color: "#2563eb" }}>Real Impact.</span>
//         </h1>

//         <p style={{ marginTop: "15px", color: "#6b7280", fontSize: "18px" }}>
//           Donate to verified NGOs, track funds live, and receive instant certificates.
//         </p>

//         <div style={{ marginTop: "30px" }}>
//           <Link to="/ngos" className="btn">
//             Explore NGOs
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>ImpactBridge</h1>
      <p>Transparent donations. Real impact.</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/ngos">View NGOs</Link>
      </div>
    </div>
  );
}

export default Home;

