import { GreetingProps } from "./template-types";

export const Greeting = (props:GreetingProps) => {
    return <h3>Hello Ratna, {props.msg}!</h3>;
  };