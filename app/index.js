/**
 * Created by sindre on 6/29/15.
 */

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import HelloHandler from './components/hello';

class App extends React.Component {

    render(){
        return (<div className="nav">
            <Link to="app">Home</Link>
            <Link to="hello">Login</Link>

            <RouteHandler/>
        </div>);
    }

}

const routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='hello' path='/hello' handler={HelloHandler} />
  </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
