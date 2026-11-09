import Navbar from "./Component/Navbar";
import './App.css';
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Departments from "./Pages/Departments";
import Employees from "./Pages/Employees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Footer />
    </Router>
  );
}