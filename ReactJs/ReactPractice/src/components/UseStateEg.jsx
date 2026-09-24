import { useState } from "react";

function UseStateEg() {
  const [name, setName] = useState("Gowri");

  const [age, setAge] = useState(24);

  const [place, setPlace] = useState("Bangalore");

  const [isDeveloper, setIsDeveloper] = useState(true);

  function changeValues() {
    setName("Gowri Shankar");
    setAge(30);
    setPlace("Coimbatore");
    setIsDeveloper(false);
  }

  return (
    <div>
      <h1>Hello I am {name}</h1>

      <p>My age is {age}</p>

      <p>I am from {place}</p>

      <p>Developer: {isDeveloper ? "Yes" : "No"}</p>

      <button onClick={changeValues}>Click me</button>
    </div>
  );
}
export default UseStateEg;
