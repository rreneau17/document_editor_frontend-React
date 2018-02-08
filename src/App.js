import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBox from './TitleBox';

import { API } from './config';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // here, I can call this.setState for the blog posts!
    axios.get(`${API}/blog`)
      .then(response => response.data)
      .then(blogPosts => {
        this.setState({
          posts: blogPosts,
        });
      })
  }

  render() {
    console.log(this.state.posts)
    return (
      <div className="main-container">
        <TitleBox data={this.state.posts} handleClick={this._setTitleNum}/>
      </div>
    );
  }

  _setTitleNum = (num) => {
    console.log(num);
    this.setState({
      titleNum: num
    });  
  }

}

export default App;
