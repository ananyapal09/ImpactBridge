// import { Link } from "react-router-dom";

// function NGOs() {
//   const ngos = [
//     {
//       id: 1,
//       name: "Helping Hands",
//       desc: "Education for underprivileged children",
//     },
//     {
//       id: 2,
//       name: "Green Earth",
//       desc: "Environmental protection & tree plantation",
//     },
//   ];

//   return (
//     <div className="container">
//       <h2 style={{ marginBottom: "20px" }}>Verified NGOs</h2>

//       {ngos.map((ngo) => (
//         <div key={ngo.id} className="card">
//           <h3>{ngo.name}</h3>
//           <p style={{ color: "#6b7280" }}>{ngo.desc}</p>
//           <Link to={`/ngo/${ngo.id}`}>View NGO</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default NGOs;

import { Link } from "react-router-dom";

function NGOs() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Verified NGOs</h2>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          maxWidth: "500px",
        }}
      >
        <h3>Helping Hands</h3>
        <p>Education for underprivileged children</p>

        <Link to="/ngo/1">View NGO →</Link>
      </div>
    </div>
  );
}

export default NGOs;