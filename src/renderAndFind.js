var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');

var renderAndFind = function(Component) {
    return React.findDOMNode(TestUtils.renderIntoDocument(Component));
};

module.exports = renderAndFind;