import {Container} from "react-bootstrap";
import './loginPage.css'
import {useState} from "react";
import LoggedIn from "../components/LoggedIn/LoggedIn";
import LoginForm from "../components/LoginForm/LoginForm";

export function LoginPage() {
    /*const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission
    };*/
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className={"first-part"}>
            <Container>
                <img src="/assets/images/login/model-phone.png" alt="login-image"/>
                {/* <div className="form">
                    <form onSubmit={handleSubmit} className="login-form">
                        <label>
                            <input type="text" value={username}  placeholder={"Email ID"} onChange={(e) => setUsername(e.target.value)  } />
                        </label>
                        <br />
                        <label>
                            <input type="password" value={password} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>*/}
                <div className="form">
                    <>
                        {isLoggedIn ? (
                            <LoggedIn setIsLoggedIn={setIsLoggedIn}/>
                        ) : (
                            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
                        )}
                    </>
                </div>
            </Container>
        </div>
    )
}