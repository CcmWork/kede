/*搜索框获取光标，回车键和搜索click*/
$(".Tput1").focus();
$("Tput1").keydown(function(e){
	if(e.keycode == 13){
		$("Tput2").click();
		
	}
})
/*lunbo*/
var arr = ["#da0148","#03b5bf","#eaf1fb","#46bde5","#fcf8d5"]
var index = 0;
function myShow(){
	var Img1 = $(".lunbo .pic ul li").eq(index).find(".text");
	Img1.animate({left: "0"},500);
}
function change(){
	if(index == $(".lunbo .pic ul li").length){
		index = 0;
	}
	myShow()
	$(".Lnav ul li").eq(index).addClass("hover1").siblings().removeClass("hover1")
	$(".lunbo .pic ul li").eq(index).siblings().find(".text").css("left", "-760px");
	$(".lunbo").css("background", arr[index])
	index++;
	
}
$(".Lnav ul li").click(function(){
	clearInterval(t);
	index =  $(this).index(".Lnav ul li");
	$(".lunbo").css("background", arr[index])
	$(this).addClass("hover1").siblings().removeClass("hover1");
	$(".lunbo .pic ul li").eq(index).siblings().find(".text").css("left", "-760px");
	$(".lunbo .pic ul li").eq(index).find(".text").animate({left: "0"},500);
	t = setInterval(change,2000);
		
})
change();
var t = setInterval(change,2000);	
/*three nav*/
$(".Nall").hover(
	function(){$(".Inavo").css("display", "block")},
	function(){$(".Inavo").css("display", "none")}
)
$(".Inavo").hover(
	function(){$(".Inavt").css("display", "block")},
	function(){$(".Inavt").css("display", "none")}
)
/*main1 右边*/
$(".m1rtxt .tit1").hover(
	function(){
		$(".tit2").css("background", "#FFFFFF");
		$(".tit1").css("background", "#CCCCCC");
		$(".m1rp").css({"display": "block"});
		$(".m1rp1").css("display", "none");
	
	}
)
$(".m1rtxt .tit2").hover(
	function(){
		$(".tit1").css("background", "#FFFFFF");
		$(".tit2").css("background", "#CCCCCC");
		$(".m1rp1").css({"display": "block"});
		$(".m1rp").css("display", "none");
	
	}
)
/*main2*/
$(".m2bg1").hover(
	function(){
		$(".m2img1").css("display", "block")
		$(".m2img2").css("display", "none")
		$(".m2bg1").css("background", "url(../img/index/icon3.gif) no-repeat 0 0");
		$(".m2bg2").css("background", "url(../img/index/icon3.gif) no-repeat 0 -90px");
		
	}
)
$(".m2bg2").hover(
	function(){
		$(".m2img1").css("display", "none")
		$(".m2img2").css("display", "block")
		$(".m2bg1").css("background", "url(../img/index/icon3.gif) no-repeat 0 -180px");
		$(".m2bg2").css("background", "url(../img/index/icon3.gif) no-repeat 0 -270px");
		
	}
)
/*main3 楼梯*/
var isClick = false;
$(".loutiNav ul li:not(:last)").click(function(){
	isClick = true;
	$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
	var height = $(".louti").eq($(this).index()).offset().top;
	$("html body").stop().animate({scrollTop:height},500,function(){
		isClick = false;
	})
})
$(".loutiNav ul li.last").click(function(){
	
	$("html body").stop().animate({scrollTop:0},1000)
})
$(window).scroll(function(){
	if(!isClick){
		var height = $(window).scrollTop();
		$(".main3louti .louti").each(function(){
			if(height>=$(this).offset().top){
				var li = $(".loutiNav ul li").eq($(this).index());
				li.find("span").addClass("active");
				li.siblings().find("span").removeClass("active");
			}		
		})
	}
	var a = $(".loutiNav").offset().top;
	var b = $(".main1").offset().top;
	if(a<b){
		$(".loutiNav").fadeOut("2000")
	}else{
		$(".loutiNav").fadeIn("2000")
	}
	
})
/*引入*/
//main1图片
$.get("../data/index.json",function(msg){
	for(var i in msg.main.img){
		//console.log(msg.main.img)
		var src = msg.main.img[i];
		$(".m1pic").append('<img class="m1pic" src='+src+'  />')
	};
	for(var i = 0;i<5;i++){
		var src = msg.main1.img.src;
		var name = msg.main1.img.name;
		var price = msg.main1.img.price;
		$(".m2img1").append(
			"<dl class='m2imgx'>"+
				"<dt class='m2img1a'></dt>"+
				"<dd class='m2img1b'></dd>"+
				"<dd class='m2img1c'></dd>"+
			"</dl>"	
		)		
	};
	$(".m2img1a").append("<a href='goodDetail.html'>"+'<img class="m2imgx" src='+src+'  />'+"</a>")
	$(".m2img1b").append(name);
	$(".m2img1c").append(price);
	for(var i = 0;i<5;i++){
		var src = msg.main1.img1.src;
		var name = msg.main1.img1.name;
		var price = msg.main1.img1.price;
		$(".m2img2").append(
			"<dl class='m2imgx'>"+
				"<dt class='m2img2a'></dt>"+
				"<dd class='m2img2b'></dd>"+
				"<dd class='m2img2c'></dd>"+
			"</dl>"	
		)		
	};
	$(".m2img2a").append("<a href='goodDetail.html'>"+'<img class="m2imgx" src='+src+'  />'+"</a>")
	$(".m2img2b").append(name)
	$(".m2img2c").append(price)	
})
	

			
			


			
			
			
		








