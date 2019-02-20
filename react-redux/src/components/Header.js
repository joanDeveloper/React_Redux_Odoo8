import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <nav className="container-nav font-family__coiny">
        <li className="nav-item" id="nav-item">
          <img
            width="25"
            height="25"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzQ2MzgzNjsiIGQ9Ik01MDAuNDUsNDY0LjczN2wtMTUxLjI3MywyMi43NTZsLTE1MS4yNzMtMjIuNzU2YzAtMjguNjcyLDAtMzg4LjMxMiwwLTQxNy40NzNsMTUxLjI3My0yMi43NTYgIEw1MDAuNDUsNDcuMjYzVjQ2NC43Mzd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzZGQzVENjsiIGQ9Ik01MDAuNDUsNDcuMjYzSDE5Ny45MDRjMC0wLjI2MiwwLTAuNTAxLDAtMC43MTdDMTk3LjkwNCwyMC45NDYsMjE4Ljg1LDAsMjQ0LjQ1LDBoMjA5LjQ1NCAgIGMyNS42LDAsNDYuNTQ3LDIwLjk0Niw0Ni41NDcsNDYuNTQ2VjQ3LjI2M3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2RkM1RDY7IiBkPSJNNTAwLjQ1LDQ2NS40NTRjMCwyNS42LTIwLjk0Nyw0Ni41NDYtNDYuNTQ3LDQ2LjU0NkgyNDQuNDVjLTI1LjYsMC00Ni41NDYtMjAuOTQ2LTQ2LjU0Ni00Ni41NDYgICBjMC0wLjIwNSwwLTAuNDQ0LDAtMC43MTdINTAwLjQ1VjQ2NS40NTR6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDI0RDsiIGQ9Ik0zODEuMTUzLDIxMS43MTNjLTIuODYyLDAtNS42NTYtMS40MzktNy4yNjktNC4wNTNjLTIuNDc2LTQuMDExLTEuMjMxLTkuMjY4LDIuNzc4LTExLjc0MyAgYzE1LjYxMy05LjYzNywyNC45MzMtMjYuMzI3LDI0LjkzMy00NC42NDVjMC0yOC45MDMtMjMuNTE2LTUyLjQxOS01Mi40Mi01Mi40MTljLTE4LjQxNiwwLTM1LjcwMiw5Ljg1MS00NS4xMTUsMjUuNzEgIGMtMi40MDUsNC4wNTQtNy42MzksNS4zODktMTEuNjkzLDIuOTgyYy00LjA1My0yLjQwNS01LjM4Ny03LjY0LTIuOTgyLTExLjY5M2MxMi40NzEtMjEuMDEyLDM1LjM4My0zNC4wNjUsNTkuNzkxLTM0LjA2NSAgYzM4LjMxNiwwLDY5LjQ4NiwzMS4xNzEsNjkuNDg2LDY5LjQ4NWMwLDI0LjI4MS0xMi4zNDksNDYuNC0zMy4wMzUsNTkuMTY4QzM4NC4yMzEsMjExLjMwMiwzODIuNjgxLDIxMS43MTMsMzgxLjE1MywyMTEuNzEzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzY3LjA2NCwzODEuNDc4bC0zMy43OTktMS42MTdsLTEuNjE3LTMzLjc5OWM5Ljc4My05Ljc4MywyNS42MzItOS43ODMsMzUuNDE2LDAgICBTMzc2Ljg0OCwzNzEuNjk0LDM2Ny4wNjQsMzgxLjQ3OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzMxLjY1LDM0Ni4wNjJsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzNDEuNDM0LDMyMC40MjksMzQxLjQzMiwzMzYuMjc4LDMzMS42NSwzNDYuMDYyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5OUQ4ODsiIGQ9Ik0yOTYuMjM0LDMxMC42NDZsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzMDYuMDE3LDI4NS4wMTMsMzA2LjAxNywzMDAuODYzLDI5Ni4yMzQsMzEwLjY0NnoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojRkFENEM2OyIgZD0iTTI2MC44MTgsMjc1LjIzMWwxMDQuNjk0LTEwNC42OTRjOS43ODMtOS43ODMsOS43ODMtMjUuNjMyLDAtMzUuNDE2cy0yNS42MzItOS43ODMtMzUuNDE2LDAgIGMwLDAtMTQ2LjI2NCwxNDYuMjY0LTE2OS4zNDYsMTY5LjM0NmMtMjMuNzgyLDIzLjc4Mi0zMy41MzMsNTYuMTU2LTI4LjY5Nyw4Ny4wMjZMMTEuNTUsNTEyaDE2Ni42NjNsMzcuMTczLTM3LjE3MyAgYzMwLjg2OSw0LjgzNiw2My4yNDUtNC45MTUsODcuMDI2LTI4LjY5N2MyNi41MjUtMjYuNTI1LDY0LjY1Mi02NC42NTIsNjQuNjUyLTY0LjY1MkwyNjAuODE4LDI3NS4yMzF6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
            alt="logotipo de la empresa" />
        </li>
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
        <input type="checkbox" id="spoiler1"></input>
        <label htmlFor="spoiler1"><img src={`./menu/menu.svg`} width="20" height="20" className="responsive"></img></label>
        <nav className="spoiler container-flex__column" style={{ width: "33%" }}>
          <li className="nav-item" id="nav-item">
            <img
              width="25"
              height="25"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzQ2MzgzNjsiIGQ9Ik01MDAuNDUsNDY0LjczN2wtMTUxLjI3MywyMi43NTZsLTE1MS4yNzMtMjIuNzU2YzAtMjguNjcyLDAtMzg4LjMxMiwwLTQxNy40NzNsMTUxLjI3My0yMi43NTYgIEw1MDAuNDUsNDcuMjYzVjQ2NC43Mzd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzZGQzVENjsiIGQ9Ik01MDAuNDUsNDcuMjYzSDE5Ny45MDRjMC0wLjI2MiwwLTAuNTAxLDAtMC43MTdDMTk3LjkwNCwyMC45NDYsMjE4Ljg1LDAsMjQ0LjQ1LDBoMjA5LjQ1NCAgIGMyNS42LDAsNDYuNTQ3LDIwLjk0Niw0Ni41NDcsNDYuNTQ2VjQ3LjI2M3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2RkM1RDY7IiBkPSJNNTAwLjQ1LDQ2NS40NTRjMCwyNS42LTIwLjk0Nyw0Ni41NDYtNDYuNTQ3LDQ2LjU0NkgyNDQuNDVjLTI1LjYsMC00Ni41NDYtMjAuOTQ2LTQ2LjU0Ni00Ni41NDYgICBjMC0wLjIwNSwwLTAuNDQ0LDAtMC43MTdINTAwLjQ1VjQ2NS40NTR6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDI0RDsiIGQ9Ik0zODEuMTUzLDIxMS43MTNjLTIuODYyLDAtNS42NTYtMS40MzktNy4yNjktNC4wNTNjLTIuNDc2LTQuMDExLTEuMjMxLTkuMjY4LDIuNzc4LTExLjc0MyAgYzE1LjYxMy05LjYzNywyNC45MzMtMjYuMzI3LDI0LjkzMy00NC42NDVjMC0yOC45MDMtMjMuNTE2LTUyLjQxOS01Mi40Mi01Mi40MTljLTE4LjQxNiwwLTM1LjcwMiw5Ljg1MS00NS4xMTUsMjUuNzEgIGMtMi40MDUsNC4wNTQtNy42MzksNS4zODktMTEuNjkzLDIuOTgyYy00LjA1My0yLjQwNS01LjM4Ny03LjY0LTIuOTgyLTExLjY5M2MxMi40NzEtMjEuMDEyLDM1LjM4My0zNC4wNjUsNTkuNzkxLTM0LjA2NSAgYzM4LjMxNiwwLDY5LjQ4NiwzMS4xNzEsNjkuNDg2LDY5LjQ4NWMwLDI0LjI4MS0xMi4zNDksNDYuNC0zMy4wMzUsNTkuMTY4QzM4NC4yMzEsMjExLjMwMiwzODIuNjgxLDIxMS43MTMsMzgxLjE1MywyMTEuNzEzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzY3LjA2NCwzODEuNDc4bC0zMy43OTktMS42MTdsLTEuNjE3LTMzLjc5OWM5Ljc4My05Ljc4MywyNS42MzItOS43ODMsMzUuNDE2LDAgICBTMzc2Ljg0OCwzNzEuNjk0LDM2Ny4wNjQsMzgxLjQ3OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzMxLjY1LDM0Ni4wNjJsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzNDEuNDM0LDMyMC40MjksMzQxLjQzMiwzMzYuMjc4LDMzMS42NSwzNDYuMDYyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5OUQ4ODsiIGQ9Ik0yOTYuMjM0LDMxMC42NDZsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzMDYuMDE3LDI4NS4wMTMsMzA2LjAxNywzMDAuODYzLDI5Ni4yMzQsMzEwLjY0NnoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojRkFENEM2OyIgZD0iTTI2MC44MTgsMjc1LjIzMWwxMDQuNjk0LTEwNC42OTRjOS43ODMtOS43ODMsOS43ODMtMjUuNjMyLDAtMzUuNDE2cy0yNS42MzItOS43ODMtMzUuNDE2LDAgIGMwLDAtMTQ2LjI2NCwxNDYuMjY0LTE2OS4zNDYsMTY5LjM0NmMtMjMuNzgyLDIzLjc4Mi0zMy41MzMsNTYuMTU2LTI4LjY5Nyw4Ny4wMjZMMTEuNTUsNTEyaDE2Ni42NjNsMzcuMTczLTM3LjE3MyAgYzMwLjg2OSw0LjgzNiw2My4yNDUtNC45MTUsODcuMDI2LTI4LjY5N2MyNi41MjUtMjYuNTI1LDY0LjY1Mi02NC42NTIsNjQuNjUyLTY0LjY1MkwyNjAuODE4LDI3NS4yMzF6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
              alt="logotipo de la empresa" />
          </li>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </nav>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <nav className="container-nav font-family__coiny">
        <li className="nav-item" id="nav-item" tabIndex="0">
          <img
            width="25"
            height="25"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzQ2MzgzNjsiIGQ9Ik01MDAuNDUsNDY0LjczN2wtMTUxLjI3MywyMi43NTZsLTE1MS4yNzMtMjIuNzU2YzAtMjguNjcyLDAtMzg4LjMxMiwwLTQxNy40NzNsMTUxLjI3My0yMi43NTYgIEw1MDAuNDUsNDcuMjYzVjQ2NC43Mzd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzZGQzVENjsiIGQ9Ik01MDAuNDUsNDcuMjYzSDE5Ny45MDRjMC0wLjI2MiwwLTAuNTAxLDAtMC43MTdDMTk3LjkwNCwyMC45NDYsMjE4Ljg1LDAsMjQ0LjQ1LDBoMjA5LjQ1NCAgIGMyNS42LDAsNDYuNTQ3LDIwLjk0Niw0Ni41NDcsNDYuNTQ2VjQ3LjI2M3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2RkM1RDY7IiBkPSJNNTAwLjQ1LDQ2NS40NTRjMCwyNS42LTIwLjk0Nyw0Ni41NDYtNDYuNTQ3LDQ2LjU0NkgyNDQuNDVjLTI1LjYsMC00Ni41NDYtMjAuOTQ2LTQ2LjU0Ni00Ni41NDYgICBjMC0wLjIwNSwwLTAuNDQ0LDAtMC43MTdINTAwLjQ1VjQ2NS40NTR6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDI0RDsiIGQ9Ik0zODEuMTUzLDIxMS43MTNjLTIuODYyLDAtNS42NTYtMS40MzktNy4yNjktNC4wNTNjLTIuNDc2LTQuMDExLTEuMjMxLTkuMjY4LDIuNzc4LTExLjc0MyAgYzE1LjYxMy05LjYzNywyNC45MzMtMjYuMzI3LDI0LjkzMy00NC42NDVjMC0yOC45MDMtMjMuNTE2LTUyLjQxOS01Mi40Mi01Mi40MTljLTE4LjQxNiwwLTM1LjcwMiw5Ljg1MS00NS4xMTUsMjUuNzEgIGMtMi40MDUsNC4wNTQtNy42MzksNS4zODktMTEuNjkzLDIuOTgyYy00LjA1My0yLjQwNS01LjM4Ny03LjY0LTIuOTgyLTExLjY5M2MxMi40NzEtMjEuMDEyLDM1LjM4My0zNC4wNjUsNTkuNzkxLTM0LjA2NSAgYzM4LjMxNiwwLDY5LjQ4NiwzMS4xNzEsNjkuNDg2LDY5LjQ4NWMwLDI0LjI4MS0xMi4zNDksNDYuNC0zMy4wMzUsNTkuMTY4QzM4NC4yMzEsMjExLjMwMiwzODIuNjgxLDIxMS43MTMsMzgxLjE1MywyMTEuNzEzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzY3LjA2NCwzODEuNDc4bC0zMy43OTktMS42MTdsLTEuNjE3LTMzLjc5OWM5Ljc4My05Ljc4MywyNS42MzItOS43ODMsMzUuNDE2LDAgICBTMzc2Ljg0OCwzNzEuNjk0LDM2Ny4wNjQsMzgxLjQ3OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzMxLjY1LDM0Ni4wNjJsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzNDEuNDM0LDMyMC40MjksMzQxLjQzMiwzMzYuMjc4LDMzMS42NSwzNDYuMDYyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5OUQ4ODsiIGQ9Ik0yOTYuMjM0LDMxMC42NDZsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzMDYuMDE3LDI4NS4wMTMsMzA2LjAxNywzMDAuODYzLDI5Ni4yMzQsMzEwLjY0NnoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojRkFENEM2OyIgZD0iTTI2MC44MTgsMjc1LjIzMWwxMDQuNjk0LTEwNC42OTRjOS43ODMtOS43ODMsOS43ODMtMjUuNjMyLDAtMzUuNDE2cy0yNS42MzItOS43ODMtMzUuNDE2LDAgIGMwLDAtMTQ2LjI2NCwxNDYuMjY0LTE2OS4zNDYsMTY5LjM0NmMtMjMuNzgyLDIzLjc4Mi0zMy41MzMsNTYuMTU2LTI4LjY5Nyw4Ny4wMjZMMTEuNTUsNTEyaDE2Ni42NjNsMzcuMTczLTM3LjE3MyAgYzMwLjg2OSw0LjgzNiw2My4yNDUtNC45MTUsODcuMDI2LTI4LjY5N2MyNi41MjUtMjYuNTI1LDY0LjY1Mi02NC42NTIsNjQuNjUyLTY0LjY1MkwyNjAuODE4LDI3NS4yMzF6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
            alt="logotipo de la empresa" />
        </li>
        <li className="nav-item" id="nav-item" tabIndex="0">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item" id="nav-item" tabIndex="0">
          <Link to="/settings" className="nav-link">
            Profile
          </Link>
        </li>

        <li className="nav-item" id="nav-item" tabIndex="0">
          <Link to={`/`} className="nav-link">
            {props.currentUser.username}
          </Link>
        </li>

        <li className="nav-item" id="nav-item" tabIndex="0">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        <input type="checkbox" id="spoiler1"></input>
        <label htmlFor="spoiler1"><img src={`./menu/menu.svg`} width="20" height="20" className="responsive" alt="menu responsive"></img></label>
        <nav className="spoiler container-flex__column" style={{ width: "33%" }}>
          <Link to="/" className="nav-link">
            <img
              width="25"
              height="25"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzQ2MzgzNjsiIGQ9Ik01MDAuNDUsNDY0LjczN2wtMTUxLjI3MywyMi43NTZsLTE1MS4yNzMtMjIuNzU2YzAtMjguNjcyLDAtMzg4LjMxMiwwLTQxNy40NzNsMTUxLjI3My0yMi43NTYgIEw1MDAuNDUsNDcuMjYzVjQ2NC43Mzd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzZGQzVENjsiIGQ9Ik01MDAuNDUsNDcuMjYzSDE5Ny45MDRjMC0wLjI2MiwwLTAuNTAxLDAtMC43MTdDMTk3LjkwNCwyMC45NDYsMjE4Ljg1LDAsMjQ0LjQ1LDBoMjA5LjQ1NCAgIGMyNS42LDAsNDYuNTQ3LDIwLjk0Niw0Ni41NDcsNDYuNTQ2VjQ3LjI2M3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2RkM1RDY7IiBkPSJNNTAwLjQ1LDQ2NS40NTRjMCwyNS42LTIwLjk0Nyw0Ni41NDYtNDYuNTQ3LDQ2LjU0NkgyNDQuNDVjLTI1LjYsMC00Ni41NDYtMjAuOTQ2LTQ2LjU0Ni00Ni41NDYgICBjMC0wLjIwNSwwLTAuNDQ0LDAtMC43MTdINTAwLjQ1VjQ2NS40NTR6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDI0RDsiIGQ9Ik0zODEuMTUzLDIxMS43MTNjLTIuODYyLDAtNS42NTYtMS40MzktNy4yNjktNC4wNTNjLTIuNDc2LTQuMDExLTEuMjMxLTkuMjY4LDIuNzc4LTExLjc0MyAgYzE1LjYxMy05LjYzNywyNC45MzMtMjYuMzI3LDI0LjkzMy00NC42NDVjMC0yOC45MDMtMjMuNTE2LTUyLjQxOS01Mi40Mi01Mi40MTljLTE4LjQxNiwwLTM1LjcwMiw5Ljg1MS00NS4xMTUsMjUuNzEgIGMtMi40MDUsNC4wNTQtNy42MzksNS4zODktMTEuNjkzLDIuOTgyYy00LjA1My0yLjQwNS01LjM4Ny03LjY0LTIuOTgyLTExLjY5M2MxMi40NzEtMjEuMDEyLDM1LjM4My0zNC4wNjUsNTkuNzkxLTM0LjA2NSAgYzM4LjMxNiwwLDY5LjQ4NiwzMS4xNzEsNjkuNDg2LDY5LjQ4NWMwLDI0LjI4MS0xMi4zNDksNDYuNC0zMy4wMzUsNTkuMTY4QzM4NC4yMzEsMjExLjMwMiwzODIuNjgxLDIxMS43MTMsMzgxLjE1MywyMTEuNzEzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzY3LjA2NCwzODEuNDc4bC0zMy43OTktMS42MTdsLTEuNjE3LTMzLjc5OWM5Ljc4My05Ljc4MywyNS42MzItOS43ODMsMzUuNDE2LDAgICBTMzc2Ljg0OCwzNzEuNjk0LDM2Ny4wNjQsMzgxLjQ3OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMzMxLjY1LDM0Ni4wNjJsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzNDEuNDM0LDMyMC40MjksMzQxLjQzMiwzMzYuMjc4LDMzMS42NSwzNDYuMDYyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5OUQ4ODsiIGQ9Ik0yOTYuMjM0LDMxMC42NDZsLTMzLjc5OS0xLjYxN2wtMS42MTctMzMuNzk5YzkuNzgzLTkuNzgzLDI1LjYzMi05Ljc4MywzNS40MTYsMCAgIEMzMDYuMDE3LDI4NS4wMTMsMzA2LjAxNywzMDAuODYzLDI5Ni4yMzQsMzEwLjY0NnoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojRkFENEM2OyIgZD0iTTI2MC44MTgsMjc1LjIzMWwxMDQuNjk0LTEwNC42OTRjOS43ODMtOS43ODMsOS43ODMtMjUuNjMyLDAtMzUuNDE2cy0yNS42MzItOS43ODMtMzUuNDE2LDAgIGMwLDAtMTQ2LjI2NCwxNDYuMjY0LTE2OS4zNDYsMTY5LjM0NmMtMjMuNzgyLDIzLjc4Mi0zMy41MzMsNTYuMTU2LTI4LjY5Nyw4Ny4wMjZMMTEuNTUsNTEyaDE2Ni42NjNsMzcuMTczLTM3LjE3MyAgYzMwLjg2OSw0LjgzNiw2My4yNDUtNC45MTUsODcuMDI2LTI4LjY5N2MyNi41MjUtMjYuNTI1LDY0LjY1Mi02NC42NTIsNjQuNjUyLTY0LjY1MkwyNjAuODE4LDI3NS4yMzF6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
              alt="logotipo de la empresa" />
          </Link>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/settings" className="nav-link">Profile</Link>
          <Link
            to={`/`}
            className="nav-link">
            {props.currentUser.username}
          </Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
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
