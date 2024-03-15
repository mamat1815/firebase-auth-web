import { SignInFirebase } from "@/services/firebase";
import { useState } from "react";

export function SignIn() {

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <div className="cardSignUp">
        <h1>Login</h1>
        <form onSubmit={() => SignInFirebase(email, password)}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  
  }