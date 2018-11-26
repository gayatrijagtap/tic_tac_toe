const assert = require('assert');
const { allocateBotSymbol,isSubset,isValidMove } = require('../src/util.js');

describe( 'allocateBotSymbol' , function() {
  it( 'should allocate symbol O for bot if player symbol is X' , function () {
    assert.equal(allocateBotSymbol('X'),'O');
  });

  it( 'should allocate symbol X for bot if player symbol is O' , function () {
    assert.equal(allocateBotSymbol('O'),'X');
  });
})

describe( 'isSubset' , function() {
  it( 'should return true if the given array is subset of superset' , function() {
    assert.equal(isSubset([1,2,3,4],[1,2]),true);
  });

  it( 'should return false if the given array is not the subset of superset' , function() {
    assert.equal(isSubset([1,2,3,4],[1,5]),false);
  });
})

describe( 'isValidMove' ,function() {
  it( 'should return true if the userMove is valid' , function() {
    assert.equal(isValidMove([1,2,3],4),true);
  });

  it( 'should return false if the userMove is invalid' , function() {
    assert.equal(isValidMove([1,2,3],2),false);
  });
})
