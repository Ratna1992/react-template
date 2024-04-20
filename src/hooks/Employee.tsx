import { useDepartment } from './DepartmentContext';
export const Employee = ()=>{

    // Use useDepartment hook to access Department data
  const department = useDepartment();
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: John Doe</p>
      <p>Department: {department.name}</p>
    </div>
  );
}
