import { Link } from "react-router-dom";
export default function Navbar() {
    return (
      <nav className="navbar">
    <h2>Employee Portal</h2>

    <div className="nav-links">
       <Link to  = "/">Home</Link> 
          <Link to="/departments"> Departments</Link> 
            <Link to="/employees"> Employees</Link>
    </div>
</nav> 
    );
};