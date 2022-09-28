import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  style={{backgroundColor:"orange" ,color:"black"}} expand="md">
          <NavbarBrand href="/"><h1>Hospital Bed Management System</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><h6><b>Home</b></h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about"><h6><b>About</b></h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact"><h6><b>Contact</b></h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/LoginPage"><h6><b>Login</b></h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup"><h6><b>Signup</b></h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout"><h6><b>Logout</b></h6></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}