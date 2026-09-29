// import { useState } from "react";

import { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>User Registration Form</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />

      <h1>Info</h1>
      <h1>Name: {name}</h1>
      <h1>email: {email}</h1>
      <h1>password: {password}</h1>
    </div>
  );
}

export default FormComponent;
