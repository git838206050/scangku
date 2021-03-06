"use strict";
$(function () {
    var data = new Array();
    if(typeof (Storage) !== "undefined"){
        var StoShopCartArr = localStorage.getItem('shopCartArr');
        if(StoShopCartArr !== null){
            data = JSON.parse(StoShopCartArr);
        }
    }else{
        alert('您的浏览器不兼容localStorage');
    }

    var shopCartIsNull = true;
    if(localStorage.getItem('shopCartArr') === '[]'){
        shopCartIsNull = false;
    }
    new Vue({
        el:'#itemBox',
        data:{
            shopCart:data,
            shopCartIsNull:shopCartIsNull

        }
    });

    /**
     * 点击移除商品按钮时触发删除指定商品事件
     */
    $('.cart-action-btn').click(function(){
        var shopId = $(this).attr("shopIndex");
        for(var i=0; i<data.length; i++){
            if(data[i].id === Number(shopId)){
                data.splice(i,1);
                localStorage.setItem('shopCartArr',JSON.stringify(data));
                showTotal();
            }
        }
        if(localStorage.getItem('shopCartArr') === '[]' || localStorage.getItem('shopCartArr') === null){
            window.location.reload();
        }
    });

    $('.shop-num-btn').on('click blur',function () {
        var shopId = Number($(this).attr("shopIndex"));
        var thisVal = $(this).val();
        var thisValMin = $(this).attr("min")===null ? 1:Number($(this).attr("min"));
        var thisValMax = $(this).attr("max")===null ? 999:Number($(this).attr("max"));
        if((thisVal>=thisValMin) && (thisVal<=thisValMax)){
            for(var i=0; i<data.length; i++){
                if(data[i].id === Number(shopId)){
                    data[i].cartShopNum = thisVal;
                    localStorage.setItem('shopCartArr',JSON.stringify(data));
                }
            }
        }
        showTotal();
    });

    showTotal();
    /**
     * 显示总计 价格
     */
    function showTotal() {
        var total = 0;
        for(var i=0; i<data.length; i++){
            total += data[i].price * data[i].cartShopNum;
        }
        $('#checkoutPriceValue').text(total);
    }
});