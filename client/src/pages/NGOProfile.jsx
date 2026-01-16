import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NGOProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  // Amount coming back after donation
  const donatedAmount = location.state?.amount;

  // Total donation tracker
  const [totalRaised, setTotalRaised] = useState(125000);

  // 🔹 Update total when user donates
  useEffect(() => {
    if (donatedAmount) {
      setTotalRaised((prev) => prev + Number(donatedAmount));
    }
  }, [donatedAmount]);

  // 🔹 Simulate live donations
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalRaised((prev) => prev + Math.floor(Math.random() * 300));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Fund utilization data (mock – NGO controlled)
  const utilization = [
    { title: "School Supplies", percent: 40 },
    { title: "Midday Meals", percent: 25 },
    { title: "Teacher Support", percent: 20 },
    { title: "Infrastructure", percent: 15 },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Helping Hands</h2>

        {/* Trust Badge */}
        <span style={styles.badge}>✔ Verified NGO</span>

        <p style={styles.category}>Education & Child Welfare</p>

        <p style={styles.desc}>
          Helping Hands is a verified NGO working towards providing quality
          education to underprivileged children across India.
        </p>

        {/* Donation Tracker */}
        <div style={styles.stats}>
          <div style={styles.statBox}>
            <h3>₹{totalRaised.toLocaleString()}</h3>
            <p>Total Raised</p>
          </div>
          <div style={styles.statBox}>
            <h3>320+</h3>
            <p>Donors</p>
          </div>
        </div>

        {/* 🔥 Fund Utilization Tracker */}
        <div style={styles.utilizationSection}>
          <h3 style={{ marginBottom: "15px" }}>Fund Utilization</h3>

          {utilization.map((item, index) => (
            <div key={index} style={styles.utilItem}>
              <div style={styles.utilHeader}>
                <span>{item.title}</span>
                <span>{item.percent}%</span>
              </div>

              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${item.percent}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}

          <p style={styles.updateNote}>
            Last updated by NGO: 2 days ago
          </p>
        </div>

        <button
          style={styles.button}
          onClick={() => navigate("/donate")}
        >
          Donate Now
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
    padding: "35px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "28px",
    marginBottom: "5px",
  },
  badge: {
    display: "inline-block",
    background: "#dcfce7",
    color: "#166534",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "500",
    marginBottom: "15px",
  },
  category: {
    color: "#2563eb",
    fontWeight: "500",
    marginBottom: "20px",
  },
  desc: {
    color: "#4b5563",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  statBox: {
    padding: "15px",
    background: "#f9fafb",
    borderRadius: "10px",
    width: "45%",
    textAlign: "center",
  },
  utilizationSection: {
    marginBottom: "30px",
  },
  utilItem: {
    marginBottom: "15px",
  },
  utilHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginBottom: "5px",
  },
  progressBar: {
    width: "100%",
    height: "10px",
    background: "#e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "#22c55e",
    borderRadius: "8px",
  },
  updateNote: {
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "10px",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default NGOProfile;
