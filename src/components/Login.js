import React from 'react';
import './css/login.scss';
import { Button, Input, Form } from "semantic-ui-react";

import { login } from '../api/auth'
import { storeToken } from '../utils/auth';
import { HOMEPAGE_URL } from '../routes/URLMaps'


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
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );

    }

    handleLogin = () => {
        const {email, password } = this.state;

        login(email, password).then(token => {
            storeToken(token);
            const locationState = this.props.location.state;
            const redirectTo = (locationState && locationState.from) || HOMEPAGE_URL;
            this.props.history.replace(redirectTo);


        })

    }


    render() {
        return (
            
            <div className="login">
                <button>Login</button>

    
                <div className="login_form">
                    
                <h2>Please Login First</h2>
                    <Form method="post">
                        <div className="imgcontainer">
                            <span className="close" title="Close Modal">&times;</span>
                        </div>
    
                        <div className="container">
                            <label><b>Email</b></label>
                            <Input 
                                type="email"
                                placeholder="Enter Email" 
                                name="email"
                                onChange={this.handleChange} 
                                required 
                            />
    
                            <label><b>Password</b></label>
                            <input 
                                type="password"
                                placeholder="Enter Password" 
                                name="password" 
                                onChange={this.handleChange} 
                                required 
                            />
                                
                            <Button 
                            type="submit"
                            onClick={ this.handleLogin }
                            
                            >
                                Login
                            
                            </Button>
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