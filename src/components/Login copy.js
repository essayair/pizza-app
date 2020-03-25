import React from 'react';
import { Button, Input, Form, Message } from "semantic-ui-react";
import './css/login.scss';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null,
            isLoading: false,
        };
    }

    handleChange = event => {
        const key = event.target.email;
        const value = event.target.value;
        this.setState({ [key]: value } );

    }


    render() {
        return (
            
            <div className="login">
                <h2>Login Form</h2>
                <button>Login</button>

    
                <div className="login_form">
                    
                    <Form method="post">
                        <div className="imgcontainer">
                            <span className="close" title="Close Modal">&times;</span>
                        </div>
    
                        <div className="container">
                            <label for="email"><b>Email</b></label>
                            <Input 
                                type="email"
                                placeholder="Enter Email" 
                                name="email"
                                onChange={this.handleChange} 
                                required 
                            />
    
                            <label for="psw"><b>Password</b></label>
                            <Input 
                                type="password"
                                placeholder="Enter Password" 
                                name="password" 
                                onChange={this.handleChange} 
                                required 
                            />
                                
                            <button type="submit">Login</button>
                            <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                        </div>
    
                            <div className="container" >
                                <button type="button" className="cancelbtn">Cancel</button>
                                {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
                            </div>
                    </Form>
                </div>
    
            </div>
        )
    }
    
}




export default Login;