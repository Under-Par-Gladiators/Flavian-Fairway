import React from "react";
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <div className="nav">
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            <p className="logo">FLAVIAN FAIRWAY</p>
          </NavLink>
        </NavItem>
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              <p className="navitem">Login</p>
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={new_user_route} className="nav-link">
              <p className="navitem">Sign Up</p>
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="droparrow"></DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <NavItem>
                  <a href="/leaderboard" className="droptext">
                    Leaderboard
                  </a>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
        {logged_in && (
          <NavItem>
            <a href={`/metricsshow/${current_user.id}`} className="nav-link">
              <p className="navitem">@{`${current_user.username}`}</p>
            </a>
          </NavItem>
        )}
        {logged_in && (
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              <p className="navitem">Sign Out</p>
            </a>
          </NavItem>
        )}
        {logged_in && (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="droparrow"></DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <NavItem>
                  <a href="/competitive" className="droptext">
                    Competitive
                  </a>
                </NavItem>
              </DropdownItem>
              <DropdownItem>
                <NavItem>
                  <a href="/leaderboard" className="droptext">
                    Leaderboard
                  </a>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
      </Nav>
    </div>
  );
};

export default Navigation;
