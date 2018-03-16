$(function () {
    /**
     * 注意：该方法未封装完成，只针对购物车描述。
     * 描述字符溢出处理
     * boxWidth:显示文字的面积宽度
     * boxHeight:显示文字的面积高度
     * $column1:显示文字的标签
     */
    if($('.describe').length > 0){
        var boxWidth = $('.describe-box').width();
        var boxHeight = $('.cart-item-img').height()-44;
        var $column1 = $('.describe');
        for(var i=0; i<$column1.length; i++){
            var text = $column1.eq(i).text();
            var column1MB = $column1.eq(i).css("margin-bottom");
            var column1PB = $column1.eq(i).css("padding-bottom");
            var boxArea = boxWidth * boxHeight;
            var fontArea = parseInt($column1.eq(i).css("font-size")) * parseInt($column1.eq(i).css("font-size"));
            var fontMaxNum = parseInt(boxArea/fontArea * 1.3);
            $column1.eq(i).css("height","auto");
            $column1.eq(i).text("隰");
            if($column1.eq(i).height() < boxHeight){
                $column1.eq(i).text(text);
                if($column1.eq(i).text().length > fontMaxNum){
                    text = text.substring(0,fontMaxNum);
                }
                var test2 = "";
                while ($column1.eq(i).height() > boxHeight){
                    test2 = text.substring(0,text.length-1);
                    $column1.eq(i).text(test2);
                    text = test2;
                }
                if(test2 != ""){
                    text = text.substring(0,text.length-2);
                    $column1.eq(i).text(text+"...");
                }
            }
            $column1.eq(i).css("margin-bottom",column1MB);
            $column1.eq(i).css("padding-bottom",column1PB);
        }
    }
});

window.onload=function (){
    itemLoading();

    /**
     *  用于滚动条划到一定程度时加载更多商品
     *  由于Vue加载数据会延迟DOM加载的原因，该方法需要放在window加载完毕后执行
     *  参数maxHeight：滚动条距离最低部多少距离时触发发送Ajax请求事件（单位：px）
     */
    function itemLoading(maxHeight){
        if(undefined === maxHeight){
            maxHeight = 100;
        }
        var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var ajaxActionHeight = $(document).height()-maxHeight;
        /**
         * 是否允许触发Ajax请求
         * 指定时间内只能发送一次请求，否则滚动条滑动到那段值时会重复复发请求
         * true表示是
         * @type {boolean}
         */
        var ajaxActionBL = false;
        $(document).scroll(function() {
            if($(document).scrollTop()+h >= ajaxActionHeight && !ajaxActionBL){
                ajaxActionBL = true;
                console.log("是时候加载了");
            }
        });
    };
};