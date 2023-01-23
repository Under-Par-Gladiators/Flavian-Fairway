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
    <div>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Flavian Fairway
          </NavLink>
        </NavItem>
        {logged_in && (
          <NavItem>
            <a href="/metricsshow" className="nav-link">
              @{`${current_user}`}
            </a>
          </NavItem>
        )}
        {logged_in && (
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              Login
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </NavItem>
        )}
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Pages
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <NavItem>
                <a href="/competitive">Competitive</a>
              </NavItem>
            </DropdownItem>
            <DropdownItem>
              <NavItem>
                <a href="/leaderboard">Leaderboard</a>
              </NavItem>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
};

export default Navigation;
