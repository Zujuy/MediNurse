import React from "react";
import {Link} from "react-router-dom";
import {StyledNavbar} from "../../style/components";
import { MyContext } from '../../context'
import { withRouter } from 'react-router-dom'

function Navbar(props) {
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>
          <ul> 
          <li><Link to="/"> Home</Link></li>
          {!context.loggedUser && 
          <li><Link to="/login"> Log in</Link></li>}
          {!context.loggedUser && 
          <li><Link to="/signup"> Sign up</Link></li>}
          {context.loggedUser && ( <span onClick={() =>
                  context.handleLogout(() => {
                    props.history.push('/login')
                  })
                }>Log out</span>
          )}
          </ul> 
          </StyledNavbar>
        )
      }}
    </MyContext.Consumer>
  )
};

export default withRouter(Navbar)