// @flow

import React, { Component } from 'react';

class Tags extends Component {
  handleClick = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <ul className="tags">
          <li role="presentation" onClick={this.handleClick}>
            mirror
          </li>
        </ul>
      </div>
    );
  }
}

export default Tags;
