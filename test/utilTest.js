const assert = require('assert');
const { allocateBotSymbol } = require('../src/util.js');

describe( 'allocateBotSymbol' , function() {
  it( 'should allocate symbol O for bot if player symbol is X' , function () {
    assert.equal(allocateBotSymbol('X'),'O');
  });

  it( 'should allocate symbol X for bot if player symbol is O' , function () {
    assert.equal(allocateBotSymbol('O'),'X');
  });
})
