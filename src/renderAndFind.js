var ReactDOM = require('react-dom/server');
var ReactTestUtils = require('react-addons-test-utils');

var renderAndFind = function(Component) {
    return ReactDOM.findDOMNode(ReactTestUtils.renderIntoDocument(Component));
};

module.exports = renderAndFind;