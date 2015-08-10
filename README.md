# react-test-utilities
Testing utilities for react.

 * [renderAndFind()](renderAndFind(Component))
 * [stubRouterContext()](stubRouterContext(Component, props, stubs))


### `renderAndFind(Component)`
Renders a component into dom and returns that node.

```jsx
var dom = renderAndFind(<Component/>);
expect(dom.text).toBe('Hello World.');
```


### `stubRouterContext(Component, props, stubs)`
Stubs react-router's `this.router.context` so you can test components that rely on it.

```jsx
import someReactRouterDependantComponent from 'components/someReactRouterDependantComponent';

var Subject = stubRouterContext(someReactRouterDependantComponent); 
var dom = renderAndFind(<Subject/>);
expect(someAssertion).toBe(true);
```
