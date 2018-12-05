import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Header from "../components/header/profileHeader";
import { isUserAlreadyLoggedIn } from "../generic/index";

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        body: ""
    };
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount() {
    console.log(isUserAlreadyLoggedIn());
    
    const { login, history } = this.props;
    !isUserAlreadyLoggedIn() ? history.push("/") : null;
  }
  componentWillMount() {
    
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  handlePost(e) {
    e.preventDefault();
    let a =  JSON.parse(localStorage.getItem("details"));
    let details = {
      email: a.email,
      title: this.state.title,
      body: this.state.body
    }
    this.props.postRequest(details);
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
                <h1 className="pageHeading">Create Post</h1>
              </div>
              <div className="col-sm-4" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <input type="text" className="title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} placeholder="Title"/>
              <textarea type="text" className="post-body" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} minLength="500" placeholder="Body of Post"></textarea>
              <button type="button" onClick={(e) => this.handlePost(e)}>Publish</button>
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
    post: state.post.post
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
