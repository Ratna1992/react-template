import { GreetingProps } from "./template-types"

export const Alert =(props:GreetingProps) =>{

    function displayAlertName(name:string){
        alert(name +" "+ props.msg);
    }

    function displayAlert(){
        alert(props.msg);
    }

    return(
<div>
    <div><button onClick={()=>displayAlertName('Ratna')}>
            Alert!
        </button>
        
        </div>
        <div>
            <button onClick={displayAlert}>
            Alert!
        </button>
        </div>
        </div>
    ) 

}
