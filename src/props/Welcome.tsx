import { StatusProps } from "./template-types";

export default function Welcome(props:StatusProps){

    return(

        <div>
            <h3>{props.isLoggedIn?'welcome Ratna!':'welcome Guest!'}</h3>
            
        </div>

    )

}