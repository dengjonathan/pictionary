const React = require('react');
const TestUtils = require('react-addons-test-utils');
const sd = require('skin-deep');
const expect = require('chai').expect;

const Chat = require('../../src/components/ChatBox').default;
const List = require('material-ui/List').default;

describe('Chat Box Component', () => {

  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(React.createElement(HeaderBar));
  });

  it('should be of type List', () => {
    expect(tree.type).to.eql(Tree);
  });
});