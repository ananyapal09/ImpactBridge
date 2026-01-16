import { useNavigate } from "react-router-dom";

function NGOProfile() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Helping Hands</h2>
        <p style={styles.category}>Education & Child Welfare</p>

        <p style={styles.desc}>
          Helping Hands is a verified NGO working towards providing quality
          education to underprivileged children across India.
        </p>

        <div style={styles.stats}>
          <div>
            <h3>₹1,25,000</h3>
            <p>Total Raised</p>
          </div>
          <div>
            <h3>320+</h3>
            <p>Donors</p>
          </div>
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
