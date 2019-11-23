import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// export default function withAuthCheck(Component, props) {
//   if (localStorage.getItem('token')) {
//     return <Component {...props} />;
//   }
//   return <Redirect to='/' />;
// };

const WithAuthCheck = ({component: Component, ...rest}) => (
  <Route
  {...rest}
  render={props => 
    localStorage.getItem('token') ? (
      <Component {...props}/>
    ) : (
      <Redirect to = '/' />
    )}/>
)

export default WithAuthCheck