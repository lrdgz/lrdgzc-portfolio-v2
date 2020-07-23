import React from 'react';
import { Link } from '../routes';

import axios from 'axios';


class Portfolios extends React.Component {

  static async getInitialProps(){
    let posts = [];

    try {
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())

      // posts = res.data;
      posts = res;

    } catch (e) {
      console.log(e);
    }

    return { posts: posts.slice(0, 10) };
  }

  renderPosts( posts ) {
    return posts.map( post => 
      <li key={post.id} style={{'fontSize' : '20px'}}>
        <Link route={`/portfolios/${post.id}`}>
          <a>
            {post.title}
          </a>
        </Link>
      </li> 
    );
  }

  render() {
    const { posts } = this.props;

    return (
      <>
        <h1>I am Index Portfolios</h1>
        <ul>
          { this.renderPosts(posts) }
        </ul>
      </>
    );
  }
}

export default Portfolios;

