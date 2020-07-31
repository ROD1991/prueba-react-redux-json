import React, { Component } from 'react';


import Layout from './layout';
import PostAdmin  from './postAdmin';
import Post from './post';

import { connect } from 'react-redux';
import { createPost as createPostAction, getPosts as getPostAction  } from '../redux/actions';

class Root extends Component {
    state = {}

    componentDidMount(){
        const {getPosts} = this.props;
        getPosts();
     }

    render() {
        console.log(this.props);
        const { 
            posts,
            createPost,
            liberarPost,
        } = this.props;
        return (
            <div>
                <Layout liberarPost={liberarPost}> </Layout>
               
               {posts.map(post => (
                <Post
                content={post.content}
                status={post.status}
                key={post.id}
                time={post.time}
               
                >

                </Post>
                ))}
                <PostAdmin
                createPost={createPost}
                >


                </PostAdmin>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts
    };
  };
  
  const mapDispatchToProps = {
    createPost : createPostAction,
        getPosts : getPostAction
  
  };

export default connect(mapStateToProps, mapDispatchToProps)(Root);