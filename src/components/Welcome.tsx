import { StatusProps } from "./template-types";

export const Welcome = (props:StatusProps)=>{

    return(

        <div>
            <h3>{props.isLoggedIn?'welcome Ratna!':'welcome Guest!'}</h3>
        </div>

    )

}