import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MyDonationTracking() {
  const location = useLocation();
  const { amount, ngo, donationId } = location.state || {};

  const [steps, setSteps] = useState([
    {
      title: "Donation received by NGO",
      status: "done",
      time: "10:32 AM",
    },
    {
      title: "Funds allocated for supplies",
      status: "done",
      time: "2:10 PM",
    },
    {
      title: "Supplies distributed",
      status: "pending",
      time: "Pending",
    },
    {
      title: "Impact report shared",
      status: "pending",
      time: "Pending",
    },
  ]);

  // Simulate NGO updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setSteps((prev) =>
        prev.map((step, index) =>
          index === 2
            ? { ...step, status: "done", time: "Next Day 9:30 AM" }
            : step
        )
      );
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>My Donation Tracking</h2>

        <p><strong>Donation ID:</strong> {donationId}</p>
        <p><strong>NGO:</strong> {ngo}</p>
        <p><strong>Amount:</strong> ₹{amount}</p>

        <div style={{ marginTop: "25px" }}>
          {steps.map((step, index) => (
            <div key={index} style={styles.step}>
              <span
                style={{
                  ...styles.statusDot,
                  background:
                    step.status === "done" ? "#22c55e" : "#e5e7eb",
                }}
              ></span>

              <div>
                <p style={{ fontWeight: "500" }}>{step.title}</p>
                <p style={styles.time}>{step.time}</p>
              </div>
            </div>
          ))}
        </div>
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
  step: {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    marginBottom: "20px",
  },
  statusDot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    marginTop: "5px",
  },
  time: {
    fontSize: "12px",
    color: "#6b7280",
  },
};

export default MyDonationTracking;
