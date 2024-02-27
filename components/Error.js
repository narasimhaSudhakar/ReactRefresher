import { Link, useRouteError } from "react-router-dom";

export const Error = () => {
    let err = useRouteError()
    console.log(err,"---",err.error)
  return (
    <div>
      <h1>Oops !!!</h1>
      <h2>Something went wrong</h2>
      <h1>ErrorStatus = {err.status}, ErrorMsg = {err.statusText}</h1>
      <h1>ErrorData = {err.data}{}</h1>
      <Link to="/">Home</Link>
    </div>
   
  );
};
