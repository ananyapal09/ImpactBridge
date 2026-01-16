import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>
          Join ImpactBridge and start contributing
        </p>

        <input style={styles.input} placeholder="Full Name" />
        <input style={styles.input} placeholder="Email address" />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
        />

        <select style={styles.input}>
          <option>Select Role</option>
          <option>Donor</option>
          <option>NGO</option>
        </select>

        <button style={styles.button}>Register</button>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
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
    marginBottom: "8px",
    fontSize: "24px",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: "25px",
    fontSize: "14px",
    color: "#6b7280",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    background: "#fff",
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
  footerText: {
    marginTop: "20px",
    fontSize: "14px",
    textAlign: "center",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Register;
