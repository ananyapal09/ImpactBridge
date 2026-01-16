// import { useLocation } from "react-router-dom";

// function Certificate() {
//   const location = useLocation();
//   const amount = location.state?.amount || "—";

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>Certificate of Appreciation</h2>

//         <p>This is to certify that</p>

//         <h3 style={styles.name}>Ananya</h3>

//         <p>
//           has generously donated <strong>₹{amount}</strong> towards
//           social welfare through <strong>ImpactBridge</strong>.
//         </p>

//         <p style={styles.date}>
//           {new Date().toDateString()}
//         </p>

//         <button style={styles.button} onClick={() => window.print()}>
//           Download Certificate
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#f9fafb",
//   },
//   card: {
//     width: "600px",
//     padding: "40px",
//     background: "#fff",
//     borderRadius: "16px",
//     border: "2px dashed #2563eb",
//     textAlign: "center",
//   },
//   heading: {
//     marginBottom: "20px",
//   },
//   name: {
//     color: "#2563eb",
//     margin: "10px 0",
//   },
//   date: {
//     marginTop: "20px",
//     color: "#6b7280",
//   },
//   button: {
//     marginTop: "25px",
//     padding: "12px 20px",
//     background: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//   },
// };

// export default Certificate;

import { useLocation, useNavigate } from "react-router-dom";

function Certificate() {
  const location = useLocation();
  const navigate = useNavigate();

  const amount = location.state?.amount || "—";

  // For demo purposes (backend will generate this later)
  const donationId = "DBT" + Math.floor(1000 + Math.random() * 9000);
  const ngoName = "Helping Hands";

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Certificate of Appreciation</h2>

        <p>This is to certify that</p>

        <h3 style={styles.name}>Ananya</h3>

        <p>
          has generously donated <strong>₹{amount}</strong> towards
          social welfare through <strong>ImpactBridge</strong>.
        </p>

        <p style={styles.meta}>
          Donation ID: <strong>{donationId}</strong>
        </p>

        <p style={styles.date}>
          {new Date().toDateString()}
        </p>

        {/* Download Certificate */}
        <button style={styles.button} onClick={() => window.print()}>
          Download Certificate
        </button>

        {/* Track Donation */}
        <button
          style={styles.trackButton}
          onClick={() =>
            navigate("/track", {
              state: {
                amount,
                donationId,
                ngo: ngoName,
              },
            })
          }
        >
          Track My Donation
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9fafb",
  },
  card: {
    width: "600px",
    padding: "40px",
    background: "#fff",
    borderRadius: "16px",
    border: "2px dashed #2563eb",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  name: {
    color: "#2563eb",
    margin: "10px 0",
  },
  meta: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#374151",
  },
  date: {
    marginTop: "20px",
    color: "#6b7280",
  },
  button: {
    marginTop: "25px",
    padding: "12px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
  trackButton: {
    marginTop: "15px",
    padding: "12px 20px",
    background: "#22c55e",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Certificate;
