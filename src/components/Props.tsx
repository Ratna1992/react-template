
import React from 'react';
import Counter from '../classes/Counter';
import { Alert } from '../props/Alert';
import { AlphaList } from '../props/AlphaList';
import { Greeting } from '../props/Greetings';


const Props: React.FC = () => {
  const isLoggedIn:boolean=false
  const alphalist = ['a','b','c','d','e','f']
  return (<>
      <h1>Components & Props in React</h1>
      <Greeting msg='How are You!'/>
      <h1>Life Cycle State in React</h1>
      <Counter/>
      <h1>Handling Events in React</h1>
      <Alert msg='Warning! Shoot out Happening'/>
      <h1>Lists and Keys</h1>
      <AlphaList list={alphalist}/>
  </>

  );
};

export default Props;
