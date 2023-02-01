import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-2_BvE29hZjV",
    ClientId: "3sgce3jqqf69fdgoplk6pqb1ro"
}

export default new CognitoUserPool(poolData)