import React from 'react'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div className="container">
                <form action="/action_page.php">
                    <div class="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                        <button type="submit" class="registerbtn">Login</button>
                    </div>

                    <div class="container signin">
                        <p>Already have an account? <a href="#">Sign in</a>.</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login