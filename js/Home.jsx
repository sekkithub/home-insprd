// @flow

import React, { Component } from 'react';
import axios from 'axios';

const apiKey = 'knXlIfwA1H5FNsYFz28ZArIt5UMWSoNVu3ky7Uk0Y50hPnw0pY';
const blogApi = 'http://api.tumblr.com/v2/blog/homeinsprd.tumblr.com';
const loadingPostsAtOnce = 2;

class Home extends Component {
  state = {
    selectedTag: '',
    tags: [
      'mirror',
      'plant',
      'bathroom',
      'toilet',
    ],
    posts: [],
    firstLoadingEntry: 0,
  }

  componentDidMount() {
    const firstLoadingEntry = this.state.firstLoadingEntry;
    axios.get(`${blogApi}/posts?&offset=${firstLoadingEntry}&limit=${loadingPostsAtOnce}&api_key=${apiKey}&tag=${this.state.selectedTag}`)
      .then((response) => {
        const posts = response.data.response.posts.map(obj => obj);
        this.setState({ posts });
    });
  }

  runFilter = (tag: string) => {
    this.setState({ posts: [], firstLoadingEntry: 0, selectedTag: tag }, () => {
      axios.get(`${blogApi}/posts?&offset=${this.state.firstLoadingEntry}&limit=${loadingPostsAtOnce}&api_key=${apiKey}&tag=${this.state.selectedTag}`)
        .then((response) => {
          const posts = response.data.response.posts.map(obj => obj);
          this.setState({ posts });
      });
    });
  };

  loadMore = () => {
    axios.get(`${blogApi}/posts?&offset=${this.state.firstLoadingEntry += loadingPostsAtOnce}&limit=${loadingPostsAtOnce}&api_key=${apiKey}&tag=${this.state.selectedTag}`)
      .then((response) => {
        const posts = response.data.response.posts.map(obj => obj);
        this.setState({posts: this.state.posts.concat(posts)});
    });
  }

  render() {
    return (
      <section className="home">
        <div className="wrapper">
          <h2 className="heading">Popular Tags</h2>
          <ul className="tags">
            {this.state.tags
              .map(tag => (
                <li role="presentation" key={tag} onClick={() => this.runFilter(tag)}>{tag}</li>
              )
            )}
          </ul>

          <ul className="posts">
            {this.state.posts
              .filter(post => `${post.tags}`.indexOf(post.tags) >= 0)
              .map(post => (
                <img src={post.photos[0].original_size.url} key={post.id} alt={post.id} />
              )
            )}
          </ul>

          <button onClick={this.loadMore}>Load more</button>
        </div>
      </section>
    )
  }
}

export default Home;
