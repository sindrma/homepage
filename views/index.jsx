/**
 * Created by sindre on 6/25/15.
 */

import React from 'react';
import DefaultLayout from './layout/default';

class HelloName extends React.Component {

    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div> Hello {this.props.name} </div>
            </DefaultLayout>
        );
    }

}

export default HelloName;
