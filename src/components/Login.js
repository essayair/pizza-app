import React from 'react';

import './css/login.scss';

const Login = () => {

    return (
            
        <div className="login">
            <h2>Login Form</h2>
            <button>Login</button>


            <div className="login_form">
                
                <form method="post">
                    <div className="imgcontainer">
                        <span className="close" title="Close Modal">&times;</span>
                    </div>

                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                            
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                        <div className="container" >
                            <button type="button" className="cancelbtn">Cancel</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                </form>
            </div>

        </div>
    )
}




export default Login;