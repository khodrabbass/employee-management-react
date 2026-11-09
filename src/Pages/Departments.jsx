

import { useState } from 'react';
import DepartmentItem from '../Component/DepartmentItem';
export default function Departments() {
  const departments = [
    "Information Technology",
    "Human Resources",
    "Finance",
    "Marketing",
    "Customer Support",
    "Sales",
    "Operations",
    "Research and Development"
  ];
  const [searchDepartment, setSearchDepartment] = useState('');

  const filteredDepartments = departments.filter((department) =>
    department.toLowerCase().includes(searchDepartment.toLowerCase())
  );
    return (
         <main className="content departments-page">
        <h1>Company Departments</h1>

        <label htmlFor="searchDepartment">Search Department</label>
        <input
            type="text"
            id="searchDepartment"
            placeholder="Search departments..."
            value={searchDepartment}
          onChange={(e) => setSearchDepartment(e.target.value)}
        />

        <h2>Available Departments</h2>

        <ul className="departments-list">
           {filteredDepartments.map((department, index) => (
                        <DepartmentItem key={index} department={{ name: department }} />
                    ))}
        </ul>

       {filteredDepartments.length === 0 && (
    <p className="empty-message">No departments found.</p>
)}
    </main>
    );
}