import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import Header from '../components/header/header'
import { Link } from "react-router-dom";

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }
        this.onSubmitSignUp = this.onSubmitSignUp.bind(this);
    }
    componentWillReceiveProps(nextProps) {
		const { isSuccess, isError } = nextProps.signUp.userSignUp;
		if (isError) {
            alert("Sign Up Failed")
		}
		else if (isSuccess) {
			this.props.history.push('/')
		}
	}
    onSubmitSignUp(){
        const { email, password } = this.state;
        this.props.userSignUpRequest({'email': email, 'password': password});
        console.log(this.state);
        
    }
    render(){   
        const { email, password } = this.state;
        return(
            <div className='login-view container-fluid'>  
                <Header/>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-6 form'>
                            <h1 className="pageHeading">Signup</h1>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => this.setState({email: e.target.value})}
                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />
                                <button onClick={() => this.onSubmitSignUp()} >SIGN UP</button>
                                <br />
                               <p className="or"> or</p> <Link to='/'><span className="links">Login</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        signUp: state.signUp
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
