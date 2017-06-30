/**
 * Created by yupeng on 17/5/12.
 */
define(function(require,exports,module){
	require('css!./cart.css');
	
	var  html=require('text!./cart.html');
	
	function render(){
		$('.container').html(html)
		
	}
	
	module.exports={
		render:render
	}
})
