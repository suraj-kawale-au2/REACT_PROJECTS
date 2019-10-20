import React from 'react';
import './sigin-signup.styles.scss';
import SignIn from '../../components/SignIn/signin.component';
import Signup from '../../components/signup/signup.component';

function SignInAndSignUpPage() {
    return (
        <div className="signinandsignup">
            <SignIn></SignIn>
            <Signup></Signup>
        </div>
    )
}

export default SignInAndSignUpPage;
