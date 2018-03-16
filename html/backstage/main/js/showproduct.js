$(function(){
	var productJsonInfo = [
	          { id:1, name: 'Runoob1' , url: 'https://f10.baidu.com/it/u=2903580660,3473125105&fm=72'},
	          { id:2, name: 'Google2' , url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg'},
	          { id:3, name: 'Google3' , url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1891820928,1620033395&fm=27&gp=0.jpg'},
	          { id:4, name: 'Taobao4' , url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=18558777,2970581122&fm=27&gp=0.jpg'},
	          { id:5, name: 'Google5' , url: 'http://img3.imgtn.bdimg.com/it/u=3762564554,919211873&fm=200&gp=0.jpg'},
	          { id:6, name: 'Taobao6' , url: 'http://img1.imgtn.bdimg.com/it/u=3400877733,3849922232&fm=200&gp=0.jpg'},
	          { id:7, name: 'Google7' , url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1307334686,2078374065&fm=27&gp=0.jpg'},
	          { id:8, name: 'Taobao8' , url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935222401,1983125872&fm=27&gp=0.jpg'},
	          { id:9, name: 'Google9' , url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2280183197,763913268&fm=200&gp=0.jpg'},
	          { id:10, name: 'Taobao10' , url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg'}
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