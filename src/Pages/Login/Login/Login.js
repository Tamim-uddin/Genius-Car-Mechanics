import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle} = UseAuth();
    return (
        <div id="login">
            <h2>PLease Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google SIgn In</button>
        </div>
    );
};

export default Login;