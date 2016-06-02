var carts =  $.cookie('carts') ? $.cookie('carts'):"{}";
	var goods = JSON.parse(carts);
	for (i in goods) {
//	$("<div>品名：<span>"+goods[i].name+"<span>,价格："+goods[i].price + 
//	"</span>" + "<span>,数量:"+goods[i].num+"</span></div>")
//	.appendTo($('body'));
	var numx = Number(goods[i].price)
	var pricex = parseInt(goods[i].num)
	$("#shopname").append(
		"<img src="+goods[i].src+"/>"+goods[i].name
	);
	$("#num").html(
		goods[i].num
	);
	$("#oneprice").append(
		goods[i].price
	);
	$("#total").html(
		numx*pricex
	);
}	
/*delete*/
$(".delete").click(function(){

	$(".null").css("display", "block")
	$(".shop1cont").css("display", "none");
	$.cookie("carts", "", {expires: -1, path: '/'});
})
if($.cookie('carts')){
	$(".null").css("display", "none")
	$(".shop1cont").css("display", "block");
}










