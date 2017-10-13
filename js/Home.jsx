// @flow

import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    posts: [],
    page: 1,
  };
  componentDidMount() {
    const apiKey = 'knXlIfwA1H5FNsYFz28ZArIt5UMWSoNVu3ky7Uk0Y50hPnw0pY';
    const blogTitle = 'homeInsprd';
    const number = 0;
    axios.get(`http://api.tumblr.com/v2/blog/${blogTitle}.tumblr.com/posts?&offset=${number}&limit=2&api_key=${apiKey}`)
      .then((response) => {
        const posts = response.data.response.posts.map(obj => obj);
        console.log(response.data.response.posts);
        this.setState({ posts });
    });
  }

  handleClick = () => {
    console.log(this.state.page += 20);
  }

  render() {
    return (
      <section className="home">
        <div className="wrapper">
          <ul className="postList">
            {this.state.posts.map(post =>
              <img src={post.photos[0].original_size.url} alt={post.id} key={post.id} />
            )}
          </ul>
          <button onClick={this.handleClick}>
            Load more
          </button>
        </div>
      </section>
    );
  }
}

export default Home;
