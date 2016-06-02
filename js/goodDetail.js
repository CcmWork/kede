/*搜索框获取光标，回车键和搜索click*/
$(".Tput1").focus();
$("Tput1").keydown(function(e){
	if(e.keycode == 13){
		$("Tput2").click();
		
	}
});
/*three nav*/
$(".Nall").hover(
	function(){$(".Inavo").css("display", "block")},
	function(){$(".Inavo").css("display", "none")}
);
$(".Inavo").hover(
	function(){$(".Inavt").css("display", "block")},
	function(){$(".Inavt").css("display", "none")}
);
/*引入图片*/
$.get("../data/goodDetail.json",function(msg){
	//console.log(msg.m1.img1)
	for(var i in msg.m1){
        //console.log(msg.m1[i])
		$(".m1").append("<img src="+msg.m1[i]+"/>")
	};
	for(var i in msg.m3){
		$(".m3").append("<img src="+msg.m3[i]+"/>")
	};
});
/*选项卡*/
$(".mnav ul li").click(function(){
	$(".mobj div").eq($(this).index()).siblings().css("display", "none")
	$(".mobj div").eq($(this).index()).css("display", "block")
})
/*吸顶*/
var heightx = $(".mnav").offset();
$(window).scroll(function () {
	if(heightx.top<=$(window).scrollTop()){
		$(".mnav").css({position:'fixed',left:heightx.left,top:'0'})
	}else{
		$(".mnav").css({position:'static'})
	}
});
/*购物车*/
$(".cld2").click(function(){
	$(".cld2").css({"background":"red", "color":"#fff"});
	
		var srcx = $("#imgs").attr("src");
		var goodId = $(".cl1").attr('id');
		var goodName =  $(".cl1").text();
		var goodPrice = $("#price").text();
		//判断购物车是否有商品
		var carts = $.cookie('carts') ? $.cookie('carts') : "{}";
		var goods = JSON.parse(carts);
		if(goodId in goods){
			goods[goodId].num += 1;
		} else {
			goods[goodId] = {
				id : goodId,
				name : goodName,
				price : goodPrice,
				num : 1,
				src:srcx
			}
		}
		$.cookie("carts", JSON.stringify(goods), {expires:7,path:'/'});

	$("#shop").text(goods[goodId].num += 1)
})
$(function(){
	var carts =  $.cookie('carts') ? $.cookie('carts'):"{}";
	var goods = JSON.parse(carts);
	for (i in goods) {
		$("#shop").html(
		goods[i].num
		);
	}
})
/*飞入*/
$(function() {
	var offset = $("#shop").offset();  //结束的地方的元素
	$(".cld2").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
		var addcar = $(this);
		var img = $(".items").find(".imgx").attr("src");
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		flyer.fly({
			start: {
				left: event.pageX-800,
				top: event.pageY-700
			},
			end: {
				left: offset.left,
				top: offset.top,
				width: 0,
				height: 0
			},
			onEnd: function(){
				$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
			}
		});
	});
  
});














