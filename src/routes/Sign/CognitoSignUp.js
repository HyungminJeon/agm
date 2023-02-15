import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Sign.css";
import UserPool from "./Cognito.js";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import Amplify from 'aws-amplify';
//import awsconfig from "../../aws-exports";
//import background from "./wallpaperflare.com_wallpaper.jpg";

// User pool attributes
// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html




const CognitoSignUp = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [family_name, setFamilyName] = useState("");
    const [given_name, setGivenName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    
    const attributeList = [];
        attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));
        attributeList.push(new CognitoUserAttribute({ Name: 'family_name', Value: family_name }));
        attributeList.push(new CognitoUserAttribute({ Name: 'given_name', Value: given_name }));
        attributeList.push(new CognitoUserAttribute({ Name: 'phone_number', Value: phone_number }));
        attributeList.push(new CognitoUserAttribute({ Name: 'address', Value: address }));

    const onSubmit = (event) => {
        event.preventDefault();


      UserPool.signUp(email, password, attributeList, null,
        (err, data) => {
        if(err) {
            console.error(err);
        } else {
            console.log(data);
        }
        });
    };

    const samePassword = (password2) => {
        if (password !== "" && password2 !== "" ) {
            if (password !== password2) {
                alert("Passwords dosen't match");
            }
        } 
    }
    
    function validatePassword(password) {
        let isValid = true;
      
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
          isValid = false;
        }
      
        if (!password.match(/[a-z]/)) {
            alert("Password must contain at least one lowercase letter");
          isValid = false;
        }
      
        if (!password.match(/[A-Z]/)) {
            alert("Password must contain at least one uppercase letter");
          isValid = false;
        }
      
        if (!password.match(/\d/)) {
            alert("Password must contain at least one number");
          isValid = false;
        }
        return isValid
      }
    
    return (
        <section style={{height: '100%', backgroundSize: 'cover',backgroundImage: `url('https://images.unsplash.com/photo-1629053791347-4aeaf3bc3192?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80')`}}
        >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{borderRadius :50 }} >
                <div class="card-body p-5" style={{borderRadius :30, color:'black', backgroundImage: `url(  )`}}> 
                    <h5 class="text-uppercase text-center mb-5">Create an account</h5>
                    <form onSubmit={onSubmit}>
                    
                    <div class="form-outline mb-4">
                        <input type="text" id="given_name" class="form-control form-control-md"
                            value={given_name}
                            onChange={(event) => setGivenName(event.target.value)} 
                        />
                        <label class="form-label" for="given_name">First Name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="text" id="family_name" class="form-control form-control-md"
                            value={family_name}
                            onChange={(event) => setFamilyName(event.target.value)} 
                        />
                        <label class="form-label" for="family_name">Last Name</label>
                    </div>

                    
                    <div class="form-outline mb-4">
                        <input type="email" name="email" class="form-control form-control-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label class="form-label" for="email">Email</label>
                    </div>
                    
                    <div class="form-outline mb-4">   
                        <input type="password" id="password" name="password" class="form-control form-control-md" value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <label class="form-label" for="password">Password</label>
                    </div>  

                    <div class="form-outline mb-4">
                        <input type="password" id="password2"  name="password" class="form-control form-control-md" value={password2}
                            onChange={(event) => setPassword2(event.target.value)}
                            onBlur={(event) => {samePassword(event.target.value) }}
                        />
                        <label class="form-label" for="password">Confirm your password</label>
                    </div>
                    


                    <div class="form-outline mb-3">
                        <input type="text" id="phone_number" class="form-control form-control-md" 
                        value={phone_number}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        ></input>
                        <label class="form-label" for="phone_number">Phone Number</label>
                    </div>

                    <div class="form-outline mb-3" style={{width: '100%', maxWidth : '22rem'}}>
                        <input type="text" id="phone" class="form-control" data-mdb-input-mask="+48 999-999-999" />
                        <label class="form-label" for="phone">Phone number with country code</label>
                    </div>

                    
                    <div className="form-outline mb-4">
                        <input type="text" id="address" class="form-control form-control-md"  value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        ></input>
                            <label class="form-label" for="address">Address</label>
                    </div>
                    

                    <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                        <label class="form-check-label" for="form2Example3g">
                        I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                        </label>
                    </div>

                    <div class="d-flex justify-content-center" style={{textAlign: 'center'}}>
                        <button type="submit"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={(event) => validatePassword(password)} 
                        >Register</button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                        class="fw-bold text-body"><u>Login here</u></a></p>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </section>
        
    )
}


export default CognitoSignUp;
