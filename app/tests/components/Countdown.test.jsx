var React=require("react")
var ReactDOM=require("react-dom")
var expect=require("expect")
var $ =require('jQuery')
var  TestUtils=require('react-addons-test-utils')

var Countdown=require('Countdown')

describe('Countdown',() =>{
it('should exist', ()=>{
expect(Countdown).toExist();
});
describe('handleSetCountdown', () => {
     it('should set state to started and coutdown', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown/>);
       countdown.handleSetCountdown(3);
       setTimeout(() => {
         expect(countdown.state.count).toBe(0);
         done();
       }, 4001)
     });


     it('should be puased',(done)=>{
   var countdown =TestUtils.renderIntoDocument(<Countdown/>);
     countdown.handleSetCountdown(3);
     countdown.handleStatusChange('paused');
     setTimeout(  ()=>{
   expect(countdown.state.count).toBe(3)
       expect(countdown.state.countdownStatus).toBe('paused')
        done()
     },1000)

     })
   });
});
