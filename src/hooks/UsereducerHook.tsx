import { useReducer } from "react"
import { CounterAction, CounterState } from "./hooks-types";

const initialState = {count:0};

function reducer(state:CounterState,action:CounterAction){

    switch(action.type){
        case 'increment':
            return {count:state.count+action.payLoad}
            case 'decrement':
                return {count:state.count-action.payLoad}
                case 'reset':
                return initialState;
                default:
                    return state;
    }
}

export const UsereducerHook = ()=>{

    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>

            Count : {state.count}
            <button onClick={()=>dispatch({type:'increment',payLoad:10})}>Increment 10</button>
           
            <button onClick={()=>dispatch({type:'decrement',payLoad:10})}>Decrement 10</button>

            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

        </div>
    )

}
