import React from 'react';
import axios from 'axios';

import { withRouter } from 'next/router';

class Portfolio extends React.Component {

    static async getInitialProps({query}){
        let post = {};
    
        try {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
          post = res.data;
        } catch (e) {
          console.log(e);
        }
    
        return { portfolio: post };
    }


  render() {
    const { portfolio } = this.props;
    
    return (
      <>
        <h1>I am Index Portfolio</h1>
        <h2>{ portfolio.title }</h2>
        <h2>Body: { portfolio.body }</h2>
        <h2>Id: { portfolio.id }</h2>
      </>
    );
  }
}

export default withRouter(Portfolio);

