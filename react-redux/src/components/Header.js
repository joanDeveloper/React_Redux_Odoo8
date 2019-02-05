import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <nav className="container-flex">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

      </nav>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <nav className="container-flex">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />

          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

      </nav>
      
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <section className="container-flex">
        <Link to="/" className="navbar-brand">
          {this.props.appName.toLowerCase()}
        </Link>

        <LoggedOutView currentUser={this.props.currentUser} />

        <LoggedInView currentUser={this.props.currentUser} />
      </section>
    );
  }
}

export default Header;
