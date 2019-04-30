import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import Profile from '../modules/profile';
import createStore from '../store/createStore'
import Country from '../modules/country';
import Toe from '../components/game/toe';
import Game from '../container/game';
import login from '../container/login';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter >
          <div>
            <Route exact path="/" component={login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/country" component={Country} />
            <Route exact path="/toe" component={Toe} />
            <Route exact path="/playgound" component={Game} />
          </div>
        </HashRouter >
      </Provider>
    )
  }
}

export default App
