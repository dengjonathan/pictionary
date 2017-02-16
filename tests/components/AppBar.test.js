const React = require('react');
const TestUtils = require('react-addons-test-utils');
const sd = require('skin-deep');
const expect = require('chai').expect;

const HeaderBar = require('../../src/components/AppBar/AppBar').default;
const AppBar = require('material-ui/AppBar').default;

const shallowRenderer = TestUtils.createRenderer();

describe('AppBar', () => {
  const bar = shallowRenderer.render(React.createElement(HeaderBar));
  
  it('should should be type AppBar', () => {
    expect(bar.type).to.eql(AppBar);
  });

  
});
