var React=require("react")
var ReactDOM=require("react-dom")
var expect=require("expect")
var $ =require('jQuery')
var  TestUtils=require('react-addons-test-utils')

var Controls=require('Controls')

describe('Controls',() =>{
it('should exist', ()=>{
expect(Controls).toExist();
});



describe('render',()=>{
it('shoulnd render paused whend started',() =>{
var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
var $el = $(ReactDOM.findDOMNode(controls));
var $pausedButton=  $el.find('button:contains(Paused)');
expect($pausedButton.length).toBe(1)


})

})


it('shoulnd render paused whend started',() =>{
var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
var $el = $(ReactDOM.findDOMNode(controls));
var $pausedButton=  $el.find('button:contains(Start)');
expect($pausedButton.length).toBe(1)


})

});
