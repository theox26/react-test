import React, { Component } from 'react';
import NavButton from '@/Components/NavButton';

import 'element-theme-default';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {active: props.default};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <aside className="left-nav-bar">
        <NavButton default={true} />
        <NavButton />
      </aside>
    );
  }

  onClick() {
    this.setState((prevState, props) => ({
      active: !prevState.active
    }));
  }
}

export default LeftNav;
