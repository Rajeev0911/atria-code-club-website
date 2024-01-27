import React from 'react'

const Signup = () => {
    return (
        <div className="main-body">
            <div className="inner-body">
                <div className="image-page">
                    <div className="aec-name">ATRIA CODE CLUB</div>
                    <div className="image"><img src="ACC_IMG.jpeg" alt="img" /></div>
                </div>
                <div className="signup-page">
                    <div className="signup-page-container">
                        <form action="/user_details.html" method="post">
                            <div className="heading"><span>Sign up</span></div>
                            <div className="details">
                                <div className="input-div"><span>Name:</span> <input className="input" id="name" type="text" name="username" /></div>
                                <div className="input-div"><span>E-mail:</span> <input className="input" id="email" type="text" name="email" /></div>
                                <div className="input-div"><span>Password:</span> <input className="input" id="password" type="text" name="password" /></div>
                                <div className="input-div"><span>Institution:</span><input className="input" id="institution" type="text" name="institution" /></div>
                            </div>
                            <div className="sign-up-btn"><button type="submit" id="submitbtn">Sign up</button></div>
                        </form>
                        <div className="login-other-methods"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup