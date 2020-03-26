import React from 'react';
import Auth from './useAuth';


const Login = () => {
    const auth= Auth();
    const handleSignIn=()=>{
        auth.signInWithGoogle()
        .then(res=>{
            // console.log('redirect');
            window.location.pathname='/review';
        })
    }
    const handleSignOut= ()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname='/';
        })
    }
    return (
        <div>
            <h1>Login Here</h1>
           { auth.user ? <button onClick={handleSignOut}>Sign Out</button> :
            <button onClick={handleSignIn}>Google Login</button>}
        </div>
    );

};

export default Login;