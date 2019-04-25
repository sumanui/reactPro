import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(){
    super();
    this.state={

    }
    this.handleLogout = this.handleLogout.bind(this)
  }


  handleLogout(){
    localStorage.removeItem('user')
    window.location.reload(true)
  }
  render() {
    return (
      <div className="row nav">
        <div className="col-sm-12">
          <div className="col-sm-3">
            <h1 className="heading"></h1>
          </div>
          <div className="col-sm-3">
          
          </div>
          <div className="col-sm-3">
          
          </div>
          <div className="col-sm-1">
            <Link to="/profile"><a href=""><h2 className="signup">Explore</h2></a></Link>
          </div>
          <div className="col-sm-1">
            <Link to="/posts"><a href=""><h2 className="signup">Post</h2></a></Link>
          </div>
          <div className="col-sm-1">
            <a onClick={this.handleLogout}><h2 className="login">Logout</h2></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
