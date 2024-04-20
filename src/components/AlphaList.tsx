import { ListProps } from "./template-types"

export const AlphaList =(props:ListProps)=>{

    return(
        <div>
            {
                props.list.map((ch)=>(
                    <h3 key = {ch}>{ch}</h3>
                ))
            }
        </div>
    )
}