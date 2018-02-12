import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBox from './TitleBox';
import TextBox from './TextBox';
import EditBox from './EditBox';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { API } from './config';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isEditing: false,
      titleNum: -1
    };
  }

  componentDidMount() {
    axios.get(`${API}/blog`)
      .then(response => response.data)
      .then(blogPosts => {
        this.setState({
          posts: blogPosts,
          titleNum: 0,
        });
      })
  }

  render() {
    return (
      <Router>
      <div className="main-container">
        <TitleBox docData={this.state.posts} handleClick={this._setTitleNum}/>
        <Route path="/posts/:postId" render={({match}) => {
            let postId = match.params.postId;
            postId = parseInt(postId, 10);
            console.log(postId);
            const docItem = this.state.posts.find(d => d.id === postId); 
            if(this.state.posts.length > 0) {
              return <TextBox selDoc={docItem} />
            } else {
              return null;
            }
        }}/>
      </div>
      </Router>
    );
  }

  _setTitleNum = (num) => {
    console.log(num);
    this.setState({
      titleNum: num
    });  
  }

  _setEditing = (editVal) => {
    this.setState ({
      isEditing: editVal
    })
    // console.log(this.state.isEditing);
  }

  _saveContent = (newContent) => {
    const currentItem = this.state.posts[this.state.titleNum];
    axios.post(`${API}/blog/${currentItem.id}/edit`, {
      ...currentItem,       
      content: newContent   
    })
    .then(resp => resp.data)
    .then(result => {
      const updatedContent = this.state.posts.map((data, index) => {
        if(index === this.state.titlNum) {
          return result;
        } else {
          return data;
        }
      });
      this.setState ({
        posts: updatedContent
      }, () => {
        console.log(`Updated content for ${this.state.titleNum}`)
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }

}

export default App;
