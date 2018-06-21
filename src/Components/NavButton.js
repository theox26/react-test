import React, { Component } from 'react';
import { Tooltip } from 'element-react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import 'element-theme-default';

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.onClick.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

   onClick() {
    this.props.onSelection(this.props.route);
  }

  render() {
    const active = this.props.active;
    const route = this.props.route;
    return (
      <Tooltip className="tooltip" effect="dark" content={route} placement="right">
        <div onClick={this.handleClick} className="nav-button-outer">
        <span className="fa-layers fa-fw left-nav-button">
            <FontAwesomeIcon
              icon={['far', 'circle']}
              className={ !active ? 'inactive': '' }
              transform="grow-8"
              style={{ color: '#FEC010' }}
            />
            <FontAwesomeIcon icon="circle" transform="shrink-7" mask={['fas', 'circle']} />
          </span>
        </div>
      </Tooltip>
    );
  }
}

export default NavButton;
