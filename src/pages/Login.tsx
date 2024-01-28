import React from 'react'
import './Login.css'
import ACC_IMG from './ACC_IMG.jpeg'

const Login = () => {
  return (
    <div className="outer-div">
        <div className="inner-div">
            <div className="image-page"><img src={ACC_IMG} alt="logo"/></div>
            <div className="login-page">
                <div className="login-page-container">
                    <form action="">
                        <div className="login-div heading">
                            <h2>Login</h2>
                        </div>
                        <div className="login-div email">
                            <span>Email: <input type="text"/></span>
                        </div>
                        <div className="login-div password">
                            <span>Password: <input type="text"/></span>
                        </div>
                        <div className="login-div options">
                            <span><a href="">Forgot Password?</a></span>
                        </div>
                        <div className="login-div login-btn">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login