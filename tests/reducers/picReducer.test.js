const chai = require('chai');
const expect = chai.expect;

const picReducer = require('../../src/reducers/picReducer').default;
const {updatePicAction} = require('../../src/actions/picActions');

describe('picReducer', () => {

  const pic = '{name: "picture"}';

  it('should create a initial pic in state', () => {
    const state = picReducer(null, updatePicAction(pic));
    expect(state.current).to.equal(pic);
  });
});