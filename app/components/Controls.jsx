var React =require('react')

var Controls =React.createClass({
porpTyeps:{
  countdownStatus: React.PropTypes.string.isRequired
},

render: function () {
 var {countdownStatus}=this.props;
var renderStopStratButton = ()=>{
if(countdownStatus==='started'){
return (
<button className="button secondary">Paused</button>
)
}
else if (countdownStatus==='paused'){
return (
<button className= "button primary">Start</button>
)
}
}
return(
<div className="controls">
  {renderStopStratButton()}
  <button className="button alert hollow">Clear</button>

</div>
)

}
})

module.exports= Controls
