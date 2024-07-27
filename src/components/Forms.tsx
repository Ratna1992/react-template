import React from 'react';
import RegistrationForm from '../forms/RegistrationForm';
import MyForm from '../forms/FormValidation';
export default function Forms(){
    return(
        <>
        <h1>Registration Form</h1>
        <RegistrationForm/>

        <h1>Form Validation</h1>
        <MyForm/>
        </>
    )
}