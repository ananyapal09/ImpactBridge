import { useState } from "react";

function AIAssistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!query) return alert("Ask something first");

    setLoading(true);

    // 🔹 MOCK AI RESPONSE (SAFE FOR NOW)
    setTimeout(() => {
      setResponse(
        "Based on your interest, Helping Hands is a great NGO focusing on child education. Even a ₹500 donation can help provide books and meals for one child."
      );
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>AI Donation Assistant 🤖</h2>
        <p style={styles.subtitle}>
          Ask AI to help you choose the right NGO
        </p>

        <textarea
          style={styles.textarea}
          placeholder="e.g. I want to help children with ₹500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button style={styles.button} onClick={handleAskAI}>
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {response && (
          <div style={styles.responseBox}>
            <strong>AI Recommendation:</strong>
            <p>{response}</p>
          </div>
        )}
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
    width: "550px",
    padding: "30px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  title: {
    marginBottom: "5px",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#6b7280",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    height: "90px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    marginBottom: "15px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
  },
  responseBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f1f5f9",
    borderRadius: "10px",
    fontSize: "14px",
  },
};

export default AIAssistant;
