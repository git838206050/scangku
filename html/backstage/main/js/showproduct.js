$(function(){
	var productJsonInfo = [
	          { id:1, name: 'Runoob1' , url: 'aaa.com1'},
	          { id:2, name: 'Google2' , url: 'bbb.com2'},
	          { id:3, name: 'Google3' , url: 'bbb.com3'},
	          { id:4, name: 'Taobao4' , url: 'ccc.com4'},
	          { id:5, name: 'Google5' , url: 'bbb.com5'},
	          { id:6, name: 'Taobao6' , url: 'ccc.com6'},
	          { id:7, name: 'Google7' , url: 'bbb.com7'},
	          { id:8, name: 'Taobao8' , url: 'ccc.com8'},
	          { id:9, name: 'Google9' , url: 'bbb.com9'},
	          { id:10, name: 'Taobao10' , url: 'ccc.com10'},
	          { id:11, name: 'Taobao11' , url: 'ccc.com11'},
	          { id:12, name: 'Taobao12' , url: 'ccc.com12'}
	        ];
	new Vue({
		el: '#app',
		data: {
			productInfo:productJsonInfo
		}
	});
	
	// 显示商品详细
	$('.show-info-btn').click(function(){
		var showIndex = Number($(this).attr('infoindex'));
		$('#info-body').text(productJsonInfo[showIndex].name);
		$('#showInfoModa').modal();
	});

	
	// 显示商品详细
	$('.delete-info-btn').click(function(){
		var deleteIndex = Number($(this).attr('deleteindex'));
		$('#deleteModaBody').html("是否确定删除商品名为：<strong style='text-align: center;display: block;'>"+productJsonInfo[deleteIndex].name+"</strong>的商品？");
		$('#deleteModa').modal();
	});
	
});