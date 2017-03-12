var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');


 var Timer =React.createClass({
   getInitialState: function () {
     return {
       count: 0,
       TimerStatus: 'stopped'
     };
   },
   componentDidUpdate(prevProps,prevState){
   if(this.state.TimerStatus!== prevState){
switch (this.state.TimerStatus) {
  case 'started':
    this.handleStart();
    break;
  case 'stopped':
  this.setState({
    count:0 })
      case 'paused':
      clearInterval(this.timer);
      this.timer=undefined
break;
} }
   },

   compomnentWillUnmount: function () {
     clearInterval(this.timer);


   },
   handleStart: function () {
   this.timer = setInterval(() => {
     this.setState({
       count: this.state.count + 1
     });
   }, 1000);
 },




   handleStatusChange: function (newTimerStatus) {
console.log(newTimerStatus)
this.setState({
TimerStatus:newTimerStatus

})
   },


render: function () {
var {count,TimerStatus} =this.state
return (
  <div>
    <h1 className="page-title" >   Timer  </h1>
    <Clock totalSeconds={count} />
    <Controls countdownStatus={TimerStatus} onStatusChange={this.handleStatusChange} />
  </div>


)
}
 })






module.exports = Timer;
