/**
 * Created by sindre on 6/25/15.
 */

const React = require("react");

let Test = React.createClass({
    render: function(){
        return <div> Hello {this.props.name} </div>;
    }
});

module.exports = Test;
