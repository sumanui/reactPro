import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className="container">
                <div className="container">
                    <form action="/action_page.php">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label className="labelClass" htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label className="labelClass" htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <div className="btnDiv">
                            <button type="submit" className="registerbtn">LoginUser</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)