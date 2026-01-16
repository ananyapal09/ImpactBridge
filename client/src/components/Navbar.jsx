import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/ngos">NGOs</Link>
    </div>
  );
}

export default Navbar;
