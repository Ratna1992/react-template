import React, { useState } from 'react';
import { EmployeeData } from './EmployeeData';

const RegistrationForm: React.FC = () => {
  const [employee, setEmployee] = useState<EmployeeData>({
    name: '',
    email: '',
    age: 0
  });

 // Function to handle changes in input fields and update state
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Use spread operator to preserve other properties and update only the changed property
    setEmployee({
      ...employee,
      [name]: value,
    });
  };
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(employee); // You can send the form data to your server here

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input placeholder="Enter Name " type="text" name="name" value={employee.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input placeholder="Enter Email " type="email" name="email" value={employee.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input placeholder="Enter Age "type="number" name="age" value={employee.age} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
