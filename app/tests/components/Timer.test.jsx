var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

it('should start timer on strated staus', (done)=>{
var timer =TestUtils.renderIntoDocument(<Timer/>);
timer.handleStatusChange('started');
expect(timer.state.count).toBe(0);
expect(timer.state.TimerStatus).toBe('started');

setTimeout(()=>{
expect(timer.state.TimerStatus).toBe('started');
expect(timer.state.count).toBe(1);
  done();
},1001)

})
it('should pause timer on paused status', (done) => {
  var timer = TestUtils.renderIntoDocument(<Timer/>);

  timer.setState({count: 5});
  timer.handleStatusChange('started');
  timer.handleStatusChange('paused');

  setTimeout(() => {
    expect(timer.state.timerStatus).toBe('paused');
    expect(timer.state.count).toBe(5);
    done();
  }, 1001);
});


    });
