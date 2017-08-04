import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem, NavLink } from 'reactstrap';

// import { Link } from 'react-router-dom';


class Navigation extends Component {
  constructor() {
    super();
    // controls bootstrap mobile nav
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  // used for mobile nav
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand>Router Movies</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/movies'>Movies</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Navigation;
