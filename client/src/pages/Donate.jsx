import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleDonate = () => {
  if (!amount) return alert("Please enter an amount");

  navigate("/certificate", {
    state: { amount },
  });
};
;


  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Make a Donation</h2>

        <input
          style={styles.input}
          type="number"
          placeholder="Enter amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button style={styles.button} onClick={handleDonate}>
          Donate Securely
        </button>

        <p style={styles.note}>
          * Payment is simulated for demo purposes
        </p>
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
    width: "420px",
    padding: "30px",
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
  note: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#6b7280",
    textAlign: "center",
  },
};

export default Donate;
