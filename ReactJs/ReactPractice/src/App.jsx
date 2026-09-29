import { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      {isSignUp ? (
        <SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      ) : (
        <SignIn isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      )}
    </div>
  );
}
export default App;
