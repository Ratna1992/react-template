import React, { Dispatch } from "react";
import { Department } from "./Department";


export type DepartmentContextProps = {
    children : React.ReactNode;
    department:Department
}

export type EmployeeProps = {
    initialName: string;
}

export type CounterState={
  count:number;
}

export type UpdateAction={
  type:'increment' | 'decrement'
  payLoad:number;
}

export type ResetAction={
  type:'reset'
  }

  export type CounterAction = UpdateAction|ResetAction
  