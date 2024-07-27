import React from 'react';
import Todos from '../apis/Todos';
import { UseFetchAPITodos } from '../apis/UseFetchAPITodos';

export default function Api() {
    return (
        <>
            <h1>Using Axios</h1>
            <Todos />
            <h1>Using Fetch</h1>
            <UseFetchAPITodos />
        </>
    )
}