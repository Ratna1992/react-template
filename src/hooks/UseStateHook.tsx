import React, { useState } from 'react';
export const UseStateHook = () =>{

    const[count,setCount] = useState<number>(0);
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

      //only updating required field and making the previous state as it is for object
      const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }

    return (

        <div>
    <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>

<p>

</p>
<h4>My {car.brand}</h4>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue Color</button>
        </div>
    )
}