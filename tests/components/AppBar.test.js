const React = require('react');
const TestUtils = require('react-addons-test-utils');
const sd = require('skin-deep');
const expect = require('chai').expect;

const HeaderBar = require('../../src/components/AppBar/AppBar').default;
const AppBar = require('material-ui/AppBar').default;

describe('AppBar', () => {

  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(React.createElement(HeaderBar));
  });
  
  it('should should be type AppBar', () => {
    expect(tree.type).to.eql(AppBar);
  });

  // FIXME: this isn't a super good test
  it('should render the title of the app', () => {
    expect(tree.props.title).to.equal('PikChat');
  });

});
