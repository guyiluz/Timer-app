var React = require('react');

var CountdownForm = React.createClass({
onSubmit: function (e) {
  e.preventDefault()
var strSeconds = this.refs.seconds.value;
if(strSeconds.match(/^[0-9]*$/)){
this.refs.seconds.value="";
this.props.num(parseInt(strSeconds, 10));

}
},



render : function () {

return(
  <div>
    <form  onSubmit={this.onSubmit} className="Countdown-form">
      <input type="text" ref="seconds" placeholder="Enter time in seconds"></input>
      <button className= "button expanded" ><span>Start</span></button>

    </form>

  </div>


)

}

})

module.exports=CountdownForm
