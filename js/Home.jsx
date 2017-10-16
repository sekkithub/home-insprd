// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const apiKey = 'knXlIfwA1H5FNsYFz28ZArIt5UMWSoNVu3ky7Uk0Y50hPnw0pY';
const blogApi = 'http://api.tumblr.com/v2/blog/homeinsprd.tumblr.com';
const loadingPostsAtOnce = 2;

const TagsHeading = styled.h2`
  font-size: 42px;
  font-weight: 100;
  margin-bottom: 48px;
  margin-top: 0;
  text-align: center;
`;

const TagList = styled.ul`
  margin-bottom: 96px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  list-style: none;
  padding-left: 0;
  text-align: center;
`;

const TagListItem = styled.li`
  color: #606060;
  cursor: pointer;
  display: inline-block;
  font-size: 28px;
  margin: 0 24px;
  text-transform: capitalize;
  transition: color .2s;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
    pointer-events: none;
  }
`;

const LoadMoreButton = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  font-size: 28px;
  padding: 18px;
  user-select: none;
  outline: none;
  transition: all .3s;
  width: 100%;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const Posts = styled.ul`
  padding-left: 0;
  margin-bottom: 120px;
`;

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
          <TagsHeading>Popular Tags</TagsHeading>
          <TagList className="tags">
            {this.state.tags
              .map(tag => (
                <TagListItem role="presentation" key={tag} onClick={() => this.runFilter(tag)}>{tag}</TagListItem>
              )
            )}
          </TagList>

          <Posts className="posts">
            {this.state.posts
              .filter(post => `${post.tags}`.indexOf(post.tags) >= 0)
              .map(post => (
                <img src={post.photos[0].original_size.url} key={post.id} alt={post.id} />
              )
            )}
          </Posts>

          <LoadMoreButton onClick={this.loadMore}>Load more</LoadMoreButton>
        </div>
      </section>
    )
  }
}

export default Home;
