import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Header from "../components/header/profileHeader";
import { isUserAlreadyLoggedIn } from "../generic/index";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }
  componentDidMount() {
    const { login, history } = this.props;
    !isUserAlreadyLoggedIn() ? history.push("/") : null;
  }
  componentWillMount() {
    this.props.userBlogRequest();
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        data: nextProps.blog.data
    })
    console.log(nextProps.blog.data);
    
  }
  render() {
      
    const { email, password } = this.state;
    return (
      <div className="login-view container-fluid">
        <Header />
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4" />
              <div className="col-sm-4">
                <h1 className="pageHeading">Explore</h1>
              </div>
              <div className="col-sm-4" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-2" />
            <div className="col-sm-8">
            { this.state.data != {} || this.state.data != [] || this.state.data != undefined ? (this.state.data.map((val, i) => (
                <div className="container" key={i} value={val._id}>
                    <div className="box">
                        <div className="head">Written By: {val.username}</div>
                        <div className="post">
                            <div className="post-title">{val.title}</div>
                            <br />
                            {val.post}
                        </div>
                    </div>
                </div>)
            )) : null }
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    login: state.login,
    blog: state.blog.userBlog
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
