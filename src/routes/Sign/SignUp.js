import React from 'react';
import {Account} from "./Account.js";
import CognitoSignUp from "./CognitoSignUp.js";
import {Status} from "./Status";

const SignUp = () => {
    return (
        <Account>
            <Status />
                <CognitoSignUp />
        </Account>
    )
}

export default SignUp;
