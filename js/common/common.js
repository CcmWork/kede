function common(url,name){
		$.ajax({
				
				url:url,
				dataType: "html",
				async:false,
				success:function(msg){
					$(name).html(msg);
				}
			});
	}
$(function(){
	
	$(".hover").hover(
		function(){
			$(this).find(".yanse").css("background", "#fff")
			$(this).find(".move").css("display", "block");
		},
		function(){
			$(this).find(".yanse").css("background", "#F2F2F2")
			$(this).find(".move").css("display", "none");
		}
	);
	
})
$(function(){
	var user = $.cookie("login")?$.cookie("login"):"{}";
	var goods = JSON.parse(user);
	var userName = goods.name;
	if($.cookie("login")){
		$("#dg").html(goods.name);
		$("#hp1").css("display", "none");
		$("#hp2").css("display", "block");
		$("#tc").click(function(){
		$.cookie("login","", {expires: -1, path: '/'});
			$("#hp2").css("display", "none");
			$("#hp1").css("display", "block");
		});
	}
	
		
})












