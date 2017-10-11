// @flow

import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    id: 'This is ID'
  };
  componentDidMount() {
    const apiKey = 'knXlIfwA1H5FNsYFz28ZArIt5UMWSoNVu3ky7Uk0Y50hPnw0pY';
    const blogTitle = 'homeInsprd';
    axios.get(`http://api.tumblr.com/v2/blog/${blogTitle}.tumblr.com/posts?&offset=21&api_key=${apiKey}`)
      .then((response) => {
        const posts = response.data.response.posts;
        for (let i = 0; i < posts.length; i += 1) {
          console.log(posts[i].id);
          this.setState({ id: posts[i].id });
        }
      });
  }
  render() {
    return (
      <section className="home">
        <div className="wrapper">
          <h1>{this.state.id}</h1>
        </div>
      </section>
    );
  }
}

export default Home;
