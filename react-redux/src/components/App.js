import agent from '../agent';
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Article from '../components/Article';
import Device from '../components/DeviceDetail';
import DevicesByCategory from '../components/DevicesByCategory';
import Editor from '../components/Editor';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ProfileFavorites from '../components/ProfileFavorites';
import Register from '../components/Register';
import Settings from '../components/Settings';
import { store } from '../store';
import Footer from '../components/Home/Footer';
import AlertDialogSlide from '../components/Dialog';
import { push } from 'react-router-redux';
//import {app} from '../components/testVue';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    /*var data = null;
    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://localhost:8069/user");
    xhr.setRequestHeader('Content-Type','text/xml');
    xhr.setRequestHeader("Authorization", "Bearer token asdasdasd");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader('access-control-allow-headers','origin, x-csrftoken, content-type,authorization, accept');
    xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS');
    xhr.setRequestHeader('Access-Control-Max-Age',1000);

    xhr.send();*/
    const token = window.localStorage.getItem('jwt');
     console.log("TOKEN APP",token);
     this.props.onLoad(token ? agent.User.current(token) : null, token);

  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/devices/category/:slug" component={DevicesByCategory} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/device/:slug" component={Device} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
          </Switch>

          <Footer appName={this.props.appName} />
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
