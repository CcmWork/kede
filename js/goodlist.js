/*搜索框获取光标，回车键和搜索click*/
$(".Tput1").focus();
$("Tput1").keydown(function(e){
	if(e.keycode == 13){
		$("Tput2").click();
		
	}
})
/*three nav*/
$(".Nall").hover(
	function(){$(".Inavo").css("display", "block")},
	function(){$(".Inavo").css("display", "none")}
)
$(".Inavo").hover(
	function(){$(".Inavt").css("display", "block")},
	function(){$(".Inavt").css("display", "none")}
)
/*引入*/
$.get("../data/goodlist.json",function(msg){
	//console.log(msg.main)
	for(var i in msg.main){
		$(".m1").append("<img class='m1img' src="+msg.main[i]+"/>")
	};
	//m2pic
	$(".m2").append(
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a1.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a1.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a1.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a1.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a2.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a2.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a2.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a2.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a3.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a3.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a3.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a3.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a4.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a4.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a4.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a4.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a5.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a5.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a5.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a5.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a6.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a6.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a6.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a6.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a7.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a7.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a7.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a7.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a8.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a8.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a8.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a8.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a9.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a9.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a9.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a9.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a10.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a10.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a10.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a10.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a11.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a11.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a11.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a11.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a12.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a12.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a12.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a12.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a13.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a13.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a13.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a13.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a14.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a14.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a14.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a14.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m2dl">'+
				"<dt class='m2dt'><img src="+ msg.m2.a15.src+"/>"+"</dt>"+
				"<dd class='m2dd1'>"+msg.m2.a15.hd+"</dd>"+
				'<dd class="m2dd2">'+msg.m2.a15.name+'</dd>'+
				'<dd class="m2dd3">'+"￥"+'<b class="pr">'+msg.m2.a15.price+'</b>'+'</dd>'+
		"</dl>"
	)
	$(".m3").append(
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a1.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a1.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a1.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a1.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a2.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a2.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a2.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a2.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a3.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a3.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a3.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a3.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a4.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a4.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a4.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a4.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a5.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a5.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a5.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a5.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a6.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a6.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a6.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a6.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a7.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a7.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a7.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a7.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a8.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a8.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a8.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a8.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a9.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a9.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a9.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a9.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a12.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a12.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a12.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a12.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a11.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a11.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a11.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a11.price+'</b>'+'</dd>'+
		"</dl>"+
		'<dl class="m3dl">'+
				"<dt class='m3dt'><img src="+ msg.m3.a10.src+"/>"+"</dt>"+
				"<dd class='m3dd1'>"+msg.m3.a10.name+"</dd>"+
				'<dd class="m3dd2">'+msg.m3.a10.hd+'</dd>'+
				'<dd class="m3dd3">'+'<b class="pr">￥'+msg.m3.a10.price+'</b>'+'</dd>'+
		"</dl>"
	)
	/*animate*/
	$(".m3dl").hover(
		function(){$(".m3dt").stop().eq($(this).index()).animate({"top":"-10px"})},
		function(){$(".m3dt").stop().eq($(this).index()).animate({"top":"0px"})}
	);
	$(".m2dl").hover(
		function(){$(this).stop().animate({"top":"-10px"})},
		function(){$(this).stop().animate({"top":"0px"})}
	)
});



                                                                                                 













