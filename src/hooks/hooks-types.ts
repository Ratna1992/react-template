import { Department } from "./Department";

export type DepartmentContextProps = {
    children : React.ReactNode;
    department:Department
}

export type EmployeeProps = {
    initialName: string;
}