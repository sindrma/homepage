/**
 * Created by sindre on 6/29/15.
 */

import React from 'react';

class DefaultLayout extends React.Component {

    render(){
        return (
            <html>
                <head><title>{this.props.title}</title></head>
                <body>{this.props.children}</body>
            </html>
        );
    }

}

export default DefaultLayout;
