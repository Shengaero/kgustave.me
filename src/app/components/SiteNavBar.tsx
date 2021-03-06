/*
 * Copyright 2018 Kaidan Gustave
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from 'react';
import { Component } from 'react';
import {
  Collapse,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Tooltip,
  // UncontrolledDropdown
} from 'reactstrap';
import '../../scss/app.css';

export interface SiteNavBarProps {
  tooltip: {
    show: number;
    hide: number;
  };
}

export interface SiteNavBarState {
  collapsed: boolean;
  tooltipVisible: boolean;
}

export default class SiteNavBar extends Component<SiteNavBarProps, SiteNavBarState> {
  constructor(props: SiteNavBarProps) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      collapsed: false,
      tooltipVisible: false
    };
  }

  toggleCollapse() {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed,
        tooltipVisible: false
      };
    });
  }

  toggleTooltip() {
    this.setState(prevState => {
      return {
        collapsed: prevState.collapsed,
        tooltipVisible: !prevState.tooltipVisible
      };
    });
  }

  render() {
    return <Navbar id="NavBar" light color="faded" expand="md">
      <NavbarToggler id="NavbarToggler" onClick={this.toggleCollapse}/>
      <Tooltip placement="right" target="NavbarToggler" isOpen={this.state.tooltipVisible}
               toggle={this.toggleTooltip} delay={this.props.tooltip}>
        {this.state.collapsed ? 'Collapse' : 'Expand'}
      </Tooltip>
      <NavbarBrand href="/">Kaidan Gustave</NavbarBrand>
      <Collapse navbar isOpen={this.state.collapsed}>
        <Nav navbar className="mr-auto">
          <NavItem>
            <NavLink href="/">
              Home <b className="fas fa-home"/>
            </NavLink>
          </NavItem>

          {/* TODO */}
          {/*<UncontrolledDropdown nav inNavbar>*/}
            {/*<DropdownToggle nav caret>*/}
              {/*Projects <b className="fas fa-paint-brush"/>*/}
            {/*</DropdownToggle>*/}
            {/*<DropdownMenu right>*/}
              {/*<DropdownItem href="/projects">*/}
                {/*View All Projects*/}
              {/*</DropdownItem>*/}
              {/*<div className="dropdown-divider"/>*/}
              {/*<DropdownItem href="/projects/json">*/}
                {/*Kotlin JSON*/}
              {/*</DropdownItem>*/}
            {/*</DropdownMenu>*/}
          {/*</UncontrolledDropdown>*/}

          <NavItem>
            <NavLink href="mailto:kaidangustave@yahoo.com">
              E-Mail <b className="fas fa-envelope"/>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}
