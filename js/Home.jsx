// @flow

import React, { Component } from 'react';
// import { string } from 'prop-types';
import Posts from './Posts';

class Home extends Component {
  state = {
    tags: [
      'mirror',
      'plant',
      'bathroom',
      'toilet',
    ],
    selectedTag: 'asd',
  }

  handleClick = () => {
    this.setState({selectedTag: 'bathroom'}, () => {
      console.log(this.state.selectedTag);
    });
  };

  render() {
    return (
      <section className="home">
        <div className="wrapper">
          <h2 className="heading">Popular Tags</h2>
          <ul className="tags">
            {this.state.tags
              .map(tag => (
                // <li role="presentation" key={tag} onClick={(e) => this.handleClick(tag, e)}>{tag}</li>
                <li role="presentation" key={tag} onClick={this.handleClick}>{tag}</li>
              )
            )}
          </ul>

          <Posts />
        </div>
      </section>
    )
  }
}

// Home.propTypes = {
//   tag: string.isRequired
// };

export default Home;
