import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <nav className="container-nav">
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
        <img src={`./menu/menu.svg`} width="20" height="20" className="responsive"></img>
      </nav>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <nav className="container-nav">
        <li className="nav-item" id="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item" id="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Profile
          </Link>
        </li>

        <li className="nav-item" id="nav-item">
          <Link
            to={`/`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />

          </Link>
        </li>

        <li className="nav-item" id="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        
        
        <input type="checkbox" id="spoiler1"></input>
        <label htmlFor="spoiler1"><img src={`./menu/menu.svg`} width="20" height="20" className="responsive"></img></label>
        <div className="spoiler">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/settings" className="nav-link">Profile</Link>
          <Link
            to={`/`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />

          </Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
      
    );
  }
  return null;
};

class Header extends React.Component {
  render() {
    return (
      <section className="">
        <LoggedOutView currentUser={this.props.currentUser} />
        <LoggedInView currentUser={this.props.currentUser} />
      </section>
    );
  }
}
export default Header;
