import React, { Component } from 'react';
import { Tooltip } from 'element-react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import 'element-theme-default';

class NavButton extends Component {
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
      <Tooltip className="tooltip" effect="dark" content="route" placement="right">
        <div onClick={this.onClick.bind(this)} className="nav-button-outer">
        <span className="fa-layers fa-fw left-nav-button">
            <FontAwesomeIcon
              icon={['far', 'circle']}
              className={ !this.state.active ? 'inactive': '' }
              transform="grow-8"
              style={{ color: '#FEC010' }}
            />
            <FontAwesomeIcon icon="circle" transform="shrink-7" mask={['fas', 'circle']} />
          </span>
        </div>
      </Tooltip>
    );
  }

  onClick() {
    this.setState((prevState, props) => ({
      active: !prevState.active
    }));
  }
}

export default NavButton;
