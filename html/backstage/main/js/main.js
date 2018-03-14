function kjInit(){
	// 获取窗口高度
	var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	$('#content').css("min-height",h - 100);

	$('#column-left').load("../../backstage/main/left.html");
	$('#header').load('../../backstage/main/header.html');
}
kjInit();
$(function(){
//	$('#loading').remove();
//	$('a').click(function(){
//		if($(this).attr("toURL") != undefined){
//			alert(145623);
//		}
//		return true;
//	});
	
	/**
	 * 添加商品时添加供货商URL实现方法
	 */
	$('#supplierURLText').blur(function(){
		var supplierURLArr = new Array();
		var text = $(this).val();
		for(var i=0,j=0; i<=text.length; i++){
			if(text[i] == "\n"){
				supplierURLArr[j] = text.substring(j,i);
				j = i+1;
			}
			if(i==text.length){
				supplierURLArr[j] = text.substring(j,i);
			}
		}
		// 输出获取到的URL地址
		for(i in supplierURLArr){
			console.log(supplierURLArr[i]);
		}
	});
});