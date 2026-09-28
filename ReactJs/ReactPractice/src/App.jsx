// import { useState } from "react";
import { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      {isSignUp ? <SignIn /> : <SignUp />}

      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Go to Sign In" : "Go to Sign Up"}
      </button>
    </div>
  );
}
export default App;
