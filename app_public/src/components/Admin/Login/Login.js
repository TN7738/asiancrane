import React, { useState } from 'react';
import './login.scss';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    if(document.cookie.indexOf('user') != -1){
        history.push("/admin/userdata");
    }
    const onSubmit = (e) => {
        e.preventDefault();

        let userData = {
            username: username,
            password: password
        };

        axios.get('http://localhost:3000/api/adminlist')
            .then(res => {
                let foundFlag = false;
                res.data.forEach(elem => {
                    if (elem.username == userData.username && elem.password == userData.password) {
                        foundFlag = true;
                        userData = { ...userData, firstName: elem.firstName, lastName: elem.lastName };
                        return;
                    }
                });
                if (foundFlag) {
                    const cookies = new Cookies();
                    cookies.set('user', userData);
                    history.push("/admin/userdata");
                }
            });
    };
    return (
        <div className='loginbox-wrap'>
            <div className='container'>
                <div className='logo-wrap'>
                    <img src="../images/acs-logo.jpg" alt="Logo" />
                </div>
                <form onSubmit={e => { onSubmit(e) }}>
                    <input type="username" className="usernameid" name="username" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required />
                    <input type="password" className="password" name="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                    <input type="submit" className="login-btn" value="Login"></input>
                </form>
            </div>
        </div>
    );
}
    
export default Login;