import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import { Link } from "react-router-dom";
import Header from '../components/header/header'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }
    componentDidMount(){
		if(this.props.login.userLogin.isLoggedIn){
			this.props.history.push('/profile')
		}
	}
	componentWillReceiveProps(nextProps){
		const { isSuccess, isLoggedIn, isError, isLoading } = nextProps.login.userLogin;
		if(isError){
            alert("Login Failed")
		}
		else if(isSuccess || isLoggedIn){
			this.props.history.push('/profile')
		}
	}
    onSubmitLogin(){
        localStorage.setItem("details",JSON.stringify(this.state))
        const { email, password } = this.state;
        this.props.userLoginRequest({email: email, password: password});
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
                                <h1 className="pageHeading">Login</h1>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => this.setState({email: e.target.value})}
                                />
                                <br />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />
                                <br />
                                <button onClick={() => this.onSubmitLogin()} >LOGIN</button>
                                <br />
                               <p className="or"> or</p> <Link to='/signup'><span className="links">Signup</span></Link>
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
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
