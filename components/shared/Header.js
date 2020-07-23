import React, { useState } from 'react';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const BsNavLink = (props) => {

    const { route, title } = props;

    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    );
}

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand">Luis Rodriguez</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
                <BsNavLink title="Home" route="/" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink title="About" route="/about" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink title="Portfolios" route="/portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink title="Cv" route="/cv" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;