// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  user-select: none;

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
  text-align: center;
`;

const Post = styled.div`
  margin: 20px;
  position: relative;
  line-height: 0;
  display: inline-block;
  vertical-align: bottom;

  @media (max-width: 780px) {
    margin: 20px 0;
  }
`;

const PostImage = styled.img`
  max-height: 700px;
  max-width: 100%;
`;

const Wrapper = styled.div`
  padding: 0 24px;
  width: 100%;

  @media (min-width: 780px) {
    padding: 0 48px;
  }
`;

const apiKey = 'knXlIfwA1H5FNsYFz28ZArIt5UMWSoNVu3ky7Uk0Y50hPnw0pY';
const blogApi = 'http://api.tumblr.com/v2/blog/homeinsprd.tumblr.com';
const loadingPostsAtOnce = 20;

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
    isToggleOn: true,
    active: 0,
    totalPosts: 0,
    loadedPosts: loadingPostsAtOnce,
  }

  componentDidMount() {
    axios.get(`${blogApi}/posts?&limit=${loadingPostsAtOnce}&api_key=${apiKey}&tag=${this.state.selectedTag}`)
      .then((response) => {
        const totalPosts = response.data.response.total_posts;
        const posts = response.data.response.posts.map(obj => obj);
        this.setState({
          posts,
          totalPosts,
          loadedPosts: loadingPostsAtOnce,
        });
    });
  }

  runFilter = (tag: string) => {
    this.setState({ posts: [], firstLoadingEntry: 0, selectedTag: tag }, () => {
      axios.get(`${blogApi}/posts?&offset=${this.state.firstLoadingEntry}&limit=${loadingPostsAtOnce}&api_key=${apiKey}&tag=${this.state.selectedTag}`)
        .then((response) => {
          const totalPosts = response.data.response.total_posts;
          const posts = response.data.response.posts.map(obj => obj);
          this.setState({
            posts,
            totalPosts,
            loadedPosts: loadingPostsAtOnce
          });
      });
    });
  };

  loadMore = () => {
    axios.get(`${blogApi}/posts?&offset=${this.state.firstLoadingEntry += loadingPostsAtOnce}&limit=${loadingPostsAtOnce}&api_key=${apiKey}&tag=${this.state.selectedTag}`)
      .then((response) => {
        const totalPosts = response.data.response.total_posts;
        const posts = response.data.response.posts.map(obj => obj);
        this.setState({
          posts: this.state.posts.concat(posts),
          totalPosts,
          loadedPosts: this.state.firstLoadingEntry += loadingPostsAtOnce
        });
    });
  }

  render() {
    return (
      <section className="home">
        <Wrapper>
          <TagsHeading>Popular Tags</TagsHeading>
          <TagList className="tags">
            <TagListItem role="presentation" key='all' className={this.state.isToggleOn ? 'on' : ''} onClick={() => this.runFilter('')}>All</TagListItem>
            {this.state.tags
              .map(tag => (
                <TagListItem role="presentation" key={tag} className={this.state.isToggleOn ? 'on' : ''} onClick={() => this.runFilter(tag)}>{tag}</TagListItem>
              )
            )}
          </TagList>

          <Posts className="posts">
            {this.state.posts
              .filter(post => `${post.tags}`.indexOf(post.tags) >= 0)
              .map(post => (
                <Post className="post" key={post.id}>
                  <PostImage src={post.photos[0].original_size.url} className="PostImage" alt={post.id} />
                </Post>
              )
            )}
          </Posts>

          {this.state.totalPosts > this.state.loadedPosts &&
            <LoadMoreButton onClick={this.loadMore}>Load more</LoadMoreButton>
          }
        </Wrapper>
      </section>
    )
  }
}

export default Home;
