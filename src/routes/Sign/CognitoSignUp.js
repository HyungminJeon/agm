import React, {useState} from "react";
import "./Sign.css";
import UserPool from "./Cognito.js";
import Amplify from 'aws-amplify';
import awsconfig from "../../aws-exports";

// User pool attributes
// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html



    const CognitoSignUp = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [family_name, setFamilyName] = useState("");
        const [given_name, setGivenName] = useState("");
        const [phone_number, setPhoneNumber] = useState("");
        const [address, setAddress] = useState("");

        const onSubmit = (event) => {
            event.preventDefault();

            UserPool.signUp(email, password, [], null,
                (err, data) => {
                if(err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
                });
        };

    function checkPassword() {
        let password = document.getElementById("password").value;
        let hasNumber = /\d/;
        let hasSpecialChar = /[!@#$%^&*]/;
        let hasUpperCase = /[A-Z]/;
        let hasLowerCase = /[a-z]/;

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        if (!hasNumber.test(password)) {
            alert("Password must contain at least one number.");
            return;
        }
        if (!hasSpecialChar.test(password)) {
            alert("Password must contain at least one special character.");
            return;
        }
        if (!hasUpperCase.test(password)) {
            alert("Password must contain at least one uppercase letter.");
            return;
        }
        if (!hasLowerCase.test(password)) {
            alert("Password must contain at least one lowercase letter.");
            return;
        }
    }


    return (
        <div className="Auth-form-container">
            <form onSubmit={onSubmit} className="Auth-form" >
                <div className="Auth-form-content">

                <div className="form-group mt-3">
                    <label htmlFor="family_name">Last Name</label>
                    <input
                        value={family_name}
                        className="form-control mt-1"
                        onChange={(event) => setFamilyName(event.target.value)}
                    ></input>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="given_name">First Name</label>
                    <input
                        value={given_name}
                        className="form-control mt-1"
                        onChange={(event) => setGivenName(event.target.value)}
                    ></input>
                </div>

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
                    <input type="password" id="password" name="password" value={password} onBlur={checkPassword}
                           className="form-control mt-1"
                           onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                        value={phone_number}
                        className="form-control mt-1"
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    ></input>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="address">Address</label>
                    <input
                        value={address}
                        className="form-control mt-1"
                        onChange={(event) => setAddress(event.target.value)}
                    ></input>
                </div>

                <div className="form-group mt-3" style={{textAlign: 'center'}} >
                    <button
                        type={"submit"}
                        className="btn btn-primary"
                    >Submit
                    </button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default CognitoSignUp;
