import { useState } from 'react';
import EmployeeItem from '../Component/EmployeeItem';
export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeeAge, setEmployeeAge] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");
    const [gender, setGender] = useState("");
    const [isFullTime, setIsFullTime] = useState(false);
     
    function handleSubmit(e) {
        e.preventDefault();
         alert(
               "User Added Successfully!\n\n" +
             "employeeName: " + employeeName + "\n" +
             "employeeEmail: " + employeeEmail + "\n" +
             "employeeAge: " + employeeAge + "\n" +
                "salary: " + salary + "\n" +
                "department: " + department + "\n" +
                "gender: " + gender + "\n" +
                "isFullTime: " + (isFullTime ? "Yes" : "No")
        );
        if (!employeeName || !employeeEmail || !employeeAge || !salary || !department || !gender) {
            alert("Please fill in all required fields.");
            return;
        }
       
        setEmployees([...employees, newEmployee]);
        setEmployeeName("");
        setEmployeeEmail("");
        setEmployeeAge("");
        setSalary("");
        setDepartment("");
        setGender("");
        setIsFullTime(false);
    }   
    return (
       
<main className="content employees-page">
    <h1>Employee Registration</h1>

   <form className="employee-form" onSubmit={handleSubmit}>
        <label htmlFor="employeeName">Employee Name</label>
        <input type="text" 
        id="employeeName" 
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        required
        />
        

        <label htmlFor="employeeEmail">Email</label>
        <input type="email" 
        id="employeeEmail" 
        value={employeeEmail}
        onChange={(e) => setEmployeeEmail(e.target.value)}
        required
        />

        <label htmlFor="employeeAge">Age</label>
        <input type="number"
         id="employeeAge" 
         value={employeeAge}
         onChange={(e) => setEmployeeAge(e.target.value)}
         required
         />

        <label htmlFor="salary">Salary</label>
        <input type="number" 
        id="salary" 
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
        />

        <label htmlFor="department">Department</label>
        <select id="department"
         value={department}
         onChange={(e) => setDepartment(e.target.value)}
         required>
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
        </select>

        <p>Gender</p>
        <input type="radio"
         id="male"
          name="gender"
           value="Male"
           checked={gender === "Male"}
             onChange={(e) => setGender(e.target.value)}
            required
           />
        <label htmlFor="male">Male</label>

        <input type="radio" 
        id="female" 
        name="gender" 
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
        required
        />
       
        <label htmlFor="female">Female</label>
 
        <p>
            <input type="checkbox" 
            id="fullTime"
            checked={isFullTime}
            onChange={(e) => setIsFullTime(e.target.checked)}
            />
            <label htmlFor="fullTime">Full-Time Employee</label>
        </p>
            <button type="submit">Add Employee</button>
</form>
    <h2>Registered Employees: {employees.length}</h2>
    
    <table className="employees-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Full-Time</th>
            </tr>
        </thead>
        <tbody id ="employeeTable">
            {employees.map((employee, index) => (
             <EmployeeItem key={index} employee={employee} />
               ))}
        </tbody>
    </table>
</main>

    );
};