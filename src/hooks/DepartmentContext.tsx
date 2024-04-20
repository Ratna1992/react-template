import React, { createContext, useContext } from 'react';
import { DepartmentContextProps } from './hooks-types';
import { Department } from './Department';


// Create a context for Department
const DepartmentContext = createContext<Department | undefined>(undefined);

//export context to use DepartmentContext
export const useDepartment = () => {
  const context = useContext(DepartmentContext);
  if (!context) {
    throw new Error('useDepartment must be used within a DepartmentProvider');
  }
  return context;
};

// Component that provides Department data
export const DepartmentProvider = (props:DepartmentContextProps)=>{
  return <DepartmentContext.Provider value={props.department}>{props.children}</DepartmentContext.Provider>;
}