/*滑动*/
	var box1 = $("#slidebox");
	var left = box1.offset().left;
	$(".box").attr("disabled","disabled")
	var move = false;
	box1.mousedown(function(){
		move = true;	
	})
	box1.mousemove(function(event){
		if(move){
				event=event||window.event;
				var x = event.clientX-left;
				box1.css("left", x);
				$(".bg").css("width", x);
				
				if(x >= 203){
					box1.css("left", "203px");
					$(".bg").css("width", "203px");
					$(".bg").html("验证通过");
					$(".box").css("background", "#ACE1F1");
					$(".box").removeAttr("disabled");
				}
				
		}		
	})
	box1.mouseup(function(){
		move = false;
	})
	
	
	
//   var box1 = document.getElementById("slidebox")	;
//	box1.mousedown = function(){
//		
//		box1.onmousemove = function(event){
//			event=event||window.event;
//			var x = event.clientX-left;
//			box1.style.left = x+"px";
//			$(".bg").css("width", x);
//		}
//	}	
//		box1.onmouseup = function(){
//			box1.onmousemove = null;
//		}
//
/*验证码*/
//var b = "";
//		function yan(a)
//		{
//			b = "";
//			var arr = [1,2,3,4,5,6,7,8,9,"a","s","d","f","g","h","j",];
//			
//			for(i=0;i<a;i++)
//			{
//				var c = Math.floor(Math.random()*arr.length);
//				b = b+arr[c];
//			}
//			return b;
//		}
//		
//		function dd()
//		{
//			yan(4);
//			document.getElementsByClassName("ma")[0].innerHTMl="";
//			document.getElementsByClassName("ma")[0].innerHTML=b;
//			
//		}
//		function btn()
//		{
//			var x = document.getElementsByClassName("code")[0].value;
//			var y = getElementsByClassName("ma")[0].innerHTML;
//			if(x==y)
//			alert("验证成功");
//			else
//			{
//				dd();
//				document.getElementsByClassName("code")[0].value="";
//				document.getElementsByClassName("code")[0].focus();
//				alert("失败");
//				
//			}
//		}		
/*验证*/	
 var validator;
    $(document).ready(function () {
        $.validator.setDefaults({
            debug: true
        });

        validator = $("#demoForm").validate({
            rules: {
                username: {
                    required: true, //必填项
                    mobile : 11
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 10,
                    rangelength:[6,10]
                },
                "confirm-password": {
                    equalTo: "#password"
                }
            },
            messages: {
                username: {
                    required: "必须填写用户名",
                    minlength: "用户名最小为2位",
                    maxlength: "用户名最大为10位",
                    rangelength: "用户名应该在2-10位",
                    remote: "用户名不存在"
                },
                password: {
                    required: "必须填写密码",
                    minlength: "密码最小为6位",
                    maxlength: "密码最大为16位"
                },
                "confirm-password": {
                    equalTo: "两次输入的密码不一致"
                }
            },
            submitHandler: function (form) {
                console.log($(form).serialize());
            }
        });
        //验证手机号
        $.validator.addMethod("mobile", function(value, element, params){
            var mobile = /^[1][3578]\d{9}$/;
            return this.optional(element) || (mobile.test(value));  //判断是否指定了required
        }, $.validator.format("请填写正确的{0}位手机号~")); //取到规则里写的值

//      $("#check").click(function () {
//          alert($("#demoForm").valid() ? "填写正确" : "填写错误");
//      });
    });
/*zhuce*/
$('#check').click(function(event){
	event.preventDefault();
	if($("#demoForm").valid()){
		var username = $("#username").val();
		var userpw = $("#password").val();
		var login = $.cookie('login') ? $.cookie('login') : "{}";
		var goods = JSON.parse(login);
		goods = {
				name : username,
				pw : userpw
		};	
		location.href="login.html";
	};
	
	$.cookie('login', JSON.stringify(goods), {expires:7,path:'/'});
	
	$("#dg").html(goods.name);
	$("#tc").html("[退出]");
	$("#tc").click(function(){
		$.cookie("login", {expires: -1, path: '/'});
	})
});

	
