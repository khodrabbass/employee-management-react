import { Link } from "react-router-dom";
export default function Home() {
    return (
        
<main className="content home-page">
    <section className="hero">
        <h1>Employee Management System</h1>

        <p>
            Welcome to the Employee Management System.
            Manage employees and explore company departments.
        </p>

        <Link to="/employees" className="primary-btn">
            Manage Employees
        </Link>
    </section>
</main>

    );
};