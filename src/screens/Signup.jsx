import {useState} from "react";
import database from "../firebase";
import {useHistory} from "react-router-dom";

function Signup() {
    const history = useHistory();

    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();

    function createAccount(e) {
        e.preventDefault();

        database.collection("users").doc().set({
            email: emailInput,
            password: passwordInput
        }).then(r => {
            history.push("/chats")
        })
    }

    return (
        <>
            <form id="signup">
                <input type="email" onChange={e => setEmailInput(e.target.value)}/>
                <input type="password" onChange={e => setPasswordInput(e.target.value)}/>
                <button type="submit" onClick={createAccount}>
                    SignUp
                </button>
            </form>
        </>
    )
}

export default Signup;