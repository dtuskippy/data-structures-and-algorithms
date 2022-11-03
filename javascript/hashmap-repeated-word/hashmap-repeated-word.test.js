/* eslint-disable quotes */
'use strict';

const repeatedWord = require('./index');

describe('Testing function for first repeated word in a string', () => {

  it('Successfully return first repeated word in input string', () => {
    expect(repeatedWord('I went to the store to find my dog!?!')).toEqual('to');
  });
  it('Successfully return first repeated word in input string', () => {
    expect(repeatedWord('My cats run wild through the forest and run, and run and run...')).toEqual('run');
  });
  it('Successfully return first repeated word in input string', () => {
    expect(repeatedWord('In the morning I walked down the Boulevard to the rue Soufflot for coffee and brioche. It was a fine morning. The horse-chestnut trees in the Luxembourg gardens were in bloom. There was the pleasant early-morning feeling of a hot day. I read the papers with the coffee and then smoked a cigarette. The flower-women were coming up from the market and arranging their daily stock. Students went by going up to the law school, or down to the Sorbonne. The Boulevard was busy with trams and people going to work.')).toEqual('the');
  });

});



