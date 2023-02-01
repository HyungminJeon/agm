import React from 'react';
import Account from "./Account.js";
import CognitoSignIn from "./CognitoSignIn";

const SignIn = () => {
    return (
        <Account>
            <CognitoSignIn />
        </Account>
    )
}

export default SignIn;
