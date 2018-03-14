init();

/*
 * 加载页面时显示加载中图标
 * (* 图片的大小请到backstage/main/css/style.css 修改#loading-img的属性)
 * */ 
function init(){
	document.write('<initLcy id="loading"><img id="loading-img" src="../main/images/loading.gif"/></initLcy>'); 
	
	var imga = document.getElementById("loading-img");
	window.onload=function (){
		$('initLcy').remove();
		$.getScript("../main/js/main.js");
	};
};