import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import Profile from '../modules/profile';
import createStore from '../store/createStore'
import Country from '../modules/country';
import Tictactoe from '../components/game/tictactoe';
import Toe from '../components/game/toe';

class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  shouldComponentUpdate () {
    return false
  }  
  render () {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter >
          <div>
            <Route exact path="/" component={Profile} />
            <Route exact path="/country" component={Country} />
            <Route exact path="/tictactoe" component={Tictactoe} />
            <Route exact path="/toe" component={Toe} />
            </div>
        </HashRouter >
      </Provider>
    )
  }
}

export default App
