import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    {
      name: "\"V\"",
      email: "afadfdaf@adfdaa.com",
      phone: "07000000000",
      skills: "Breach protocol, Quick hacking, Stealth",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Jackie Welles",
      email: "afadfdaf@adfdaa.com",
      phone: "07000000000",
      skills: "Hits, Street smarts",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Panam Palmer",
      email: "afadfdaf@adfdaa.com",
      phone: "07000000000",
      skills: "Rebellion, Leadership",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
    {
      name: "Johnny Silverhand",
      email: "afadfdaf@adfdaa.com",
      phone: "07000000000",
      skills: "Rock, Blowing things up",
      avatar: "https://i.imgur.com/TUhCrsY.png",
    },
  ]);

  function handleAddNewEmployee() {
    setEmployees((prevState) => {
      return [
        ...prevState,
        {
          name: "Oskar Andersson",
          email: "oskand01@gmail.com",
          phone: "07000000000",
          skills: "Fotboll",
          avatar: "https://i.imgur.com/t9HFQvX.png",
        },
      ];
    });
  }

  return (
    <div>
      <h3>EmployeeList</h3>
      <button onClick={handleAddNewEmployee} className="button">
        Add Employee
      </button>
      {employees.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
