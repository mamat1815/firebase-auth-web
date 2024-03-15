import { SignUpFirebase } from "@/services/firebase";
import { useState } from "react";

export function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            
            <div className="cardSignUp">
                <h1>Sign Up</h1>
                <form onSubmit={() => SignUpFirebase(email,password)}>
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
                <button type="submit">Sign Up</button>
                </form>
            </div>

        </>
    )

}