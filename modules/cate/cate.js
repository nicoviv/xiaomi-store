/**
 * Created by yupeng on 17/5/12.
 */
define(function(require,exports,module){
	require('css!./cate.css');
	
	var html=require('text!./cate.html');
	
	function render(){
		
		$('.container').html(html);
		fun()
	}
	function fun(){
		var myUl=document.querySelector(".testUl");
	var myUlStart=0;
	var myUlTime=0;
	var myUlChange=0;
	var myData=null;
	myUl.addEventListener("touchstart",function(e){
		myData=e.targetTouches;
		myUlStart=myData[0].clientX-myUl.offsetLeft;
	});
	myUl.addEventListener("touchmove",function(e){
		myData=e.targetTouches;
		myUlTime=myData[0].clientX;
		myUlChange=myUlTime-myUlStart;
		myUl.style.left=myUlChange+"px";
		if(myUl.offsetLeft>=10){
			myUl.style.left="10px";
		}
		if(myUl.offsetLeft<=-430){
			myUl.style.left="-430px";
		}
	});
	myUl.addEventListener("touchend",function(e){
		
	});
	myUl.addEventListener("touchcancel",function(e){
		
	});
	}
	module.exports={
		render:render
	}
	
})