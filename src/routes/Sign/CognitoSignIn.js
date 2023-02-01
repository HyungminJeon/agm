import React, {useState, useContext} from "react";
import "./Sign.css";
import AccountContext from "./Account";
// User pool attributes
// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html



const CognitoSignIn = () =>  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {authenticate} = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email,password)
            .then(data => { console.log("Logged in!",data);
            })
            .catch(err => {
                console.error("Failed to login", err);
            })
    };

    return (
        <div className="Auth-form-container">
            <form onSubmit={onSubmit} className="Auth-form" >
                <div className="Auth-form-content">

                    <div className="form-group mt-3">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            className="form-control mt-1"
                            onChange={(event) => setEmail(event.target.value)}
                        ></input>
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            className="form-control mt-1"
                            onChange={(event) => setPassword(event.target.value)}
                        ></input>
                    </div>

                    <div className="form-group mt-3" style={{textAlign: 'center'}} >
                        <button
                            type={"submit"}
                            className="btn btn-primary"
                        >Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default CognitoSignIn;
