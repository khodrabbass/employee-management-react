export default function EmployeeItem({ employee }) {
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.age}</td>
            <td>{employee.salary}</td>
            <td>{employee.department}</td>
            <td>{employee.gender}</td>
            <td>{employee.isFullTime ? "Yes" : "No"}</td>
        </tr>
    );
}