

$(function () {
    new Vue({
        el:'#itemBox',
        data:{
            items:window.itemDataLcy
        }
    });

    $('.p-info').click(function () {
        var itemNum = $(this).attr('itemIndex');
        $('#showInfoModa').modal('toggle');
        $('#showInfoModa').attr("tabindex",itemNum);
        $('#info-body').html(
            '<h3>商品名称：</h3>'+window.itemDataLcy[itemNum].name+
            "<br /><br /><h3>商品描述：</h3>"+window.itemDataLcy[itemNum].describe+
            "<br /><br /><h3>商品价格：</h3>"+window.itemDataLcy[itemNum].price+" 美金"
        );
    });

    $('#addShopCartBtn').click(function () {
        addShopCart($('#showInfoModa').attr('tabindex'));
        $('#showInfoModa').modal('toggle');
    });

    /**
     * 添加数据到购物车
     * 注意：需要导入全局变量window.itemDataLcy -> frontdesk/main/model/item.js
     * @param value 商品id
     * cartShopNum 为 商品在购物车的数量
     */
    function addShopCart(value) {
        if(typeof (Storage) !== "undefined"){
            var shopCartArr = JSON.parse(localStorage.getItem('shopCartArr'));  // 选择的商品数据
            var isShopCart = false; // 判断是否在购物车内

            if(shopCartArr!==null){
                for(var i=0,size=shopCartArr.length; i<size; i++){
                    if(shopCartArr[i].id === Number(value)){
                        shopCartArr[i].cartShopNum++;
                        isShopCart = true;
                        break;
                    }
                }
            }else{
                shopCartArr = new Array();
            }

            if(!isShopCart && window.itemDataLcy!==null){
                for(var i=0,size=window.itemDataLcy.length; i<size; i++){
                    if(window.itemDataLcy[i].id === Number(value)){
                        shopCartArr.push(window.itemDataLcy[i]);
                        var shopSize = shopCartArr.length;
                        shopCartArr[shopSize-1].cartShopNum = 1;
                        break;
                    }
                }
            }
            localStorage.setItem("shopCartArr",JSON.stringify(shopCartArr));
        }else{
            alert('您的浏览器不兼容localStorage');
        }
    }
});
