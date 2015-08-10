var React = require('react');

var stubRouterContext = function(Component, props, stubs) {
    function RouterStub() { }

    Object.assign(RouterStub, {
        makePath: function() {},
        makeHref: function() {},
        transitionTo: function() {},
        replaceWith: function() {},
        goBack: function() {},
        getCurrentPath: function() {},
        getCurrentRoutes: function() {},
        getCurrentPathname: function() {},
        getCurrentParams: function() {},
        getCurrentQuery: function() {},
        isActive: function() {},
        getRouteAtDepth: function() {},
        setRouteComponentAtDepth: function() {}
    }, stubs)

    return React.createClass({
        childContextTypes: {
            router: React.PropTypes.func,
            routeDepth: React.PropTypes.number
        },

        getChildContext: function () {
            return {
                router: RouterStub,
                routeDepth: 0
            };
        },

        render: function () {
            return React.createElement(Component, props);
        }
    });
};

module.exports = stubRouterContext;