// @flow

import React, { Component } from 'react';
import axios from 'axios';

const apiKey = 'knXlIfwA1H5FNsYFz28ZArIt5UMWSoNVu3ky7Uk0Y50hPnw0pY';
const blogApi = 'http://api.tumblr.com/v2/blog/homeInsprd.tumblr.com';
const loadingPostsAtOnce = 20;

class Posts extends Component {
  state = {
    posts: [],
    firstLoadingEntry: 0,
  }

  componentDidMount() {
    const firstLoadingEntry = this.state.firstLoadingEntry;
    axios.get(`${blogApi}/posts?&offset=${firstLoadingEntry}&limit=${loadingPostsAtOnce}&api_key=${apiKey}`)
      .then((response) => {
        const posts = response.data.response.posts.map(obj => obj);
        this.setState({posts: this.state.posts.concat(posts)});
    });
  }

  loadMore = () => {
    axios.get(`${blogApi}/posts?&offset=${this.state.firstLoadingEntry += loadingPostsAtOnce}&limit=${loadingPostsAtOnce}&api_key=${apiKey}`)
      .then((response) => {
        const posts = response.data.response.posts.map(obj => obj);
        this.setState({posts: this.state.posts.concat(posts)});
    });
  }

  render() {
    return (
      <div>
        <ul className="posts">
          {this.state.posts.map(post =>
            <img src={post.photos[0].original_size.url} alt={post.id} key={post.id} />
          )}
        </ul>
        <button onClick={this.loadMore}>
          Load more
        </button>
      </div>
    );
  }
}

export default Posts;
