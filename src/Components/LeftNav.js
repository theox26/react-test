import React, { Component } from 'react';
import NavButton from './NavButton';

import 'element-theme-default';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {activeButton: "Recruiting"};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleClick(name) {
    this.setState((prevState, props) => ({
      activeButton: name
    }));
  }

  render() {
    const activeB = this.state.activeButton;
    return (
      <aside className="left-nav-bar">
        <NavButton active={activeB === "Recruiting"} route="Recruiting" onSelection={this.handleClick} />
        <NavButton active={activeB === "Staffing"} route="Staffing" onSelection={this.handleClick} />
      </aside>
    );
  }
}

export default LeftNav;
