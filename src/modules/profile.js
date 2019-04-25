import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Header from "../components/header/profileHeader";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList:[],
      todoSwitch:"",
      inputState:""
    };
  }

  componentWillMount() {
    var url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ todoList: data });
      })
      .catch(error => console.log(error))
  }

  handleChange(id,e){
    var todoList=this.state.todoList
    for(var i=0;i<todoList.length; i++){
      if(todoList[i].id== id){
        todoList[i].title = e.target.value
      }
    }
    this.setState({
      todoList:todoList
    })
  }

  edit(id){
    var todoList=this.state.todoList
    for(var i=0; i<todoList.length; i++){
      if(todoList[i].id == id){
        this.setState({
          todoSwitch:id
        })
      }
    }
  }
  deleteTodo(e){
    var id = e.target.id;
    var x = this.state.todoList.filter(d => {
      return id != d.id
    })
    this.setState({
      todoList : x
    })
  }


  render() {
    return (
      <div className="login-view container-fluid">
        <Header />
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-2" />
            <div className="col-sm-8">
            <ul>
              {this.state.todoList.map((data, key) => (
              <li key={key} >
                {this.state.todoSwitch !=data.id? <label>
                  {data.title}
                </label>:<input type="text" value={data.title} onChange={e=> this.handleChange(`${data.id}`,e) }/>}
                <button type="button" id={data.id} onClick={(e)=> this.edit(`${data.id}`)}>
                   Edit
                </button>
                <button type="button" id={data.id} onClick={(e)=> this.deleteTodo(e)}>
                   Delete
                </button>
              </li>
              ))}
            </ul>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    blog: state.blog.userBlog
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
