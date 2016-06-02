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
/*转跳*/

/*cookie*/
var user = $.cookie("login")?$.cookie("login"):"{}";
var goods = JSON.parse(user);
var userName = goods.name;
var pw1 = goods.pw;

$("#check").click(function(event){
	event.preventDefault();
	var namex = $("#username").val();
	var pw2 = $("#password").val();
	if(namex == userName&&pw1 == pw2){	
		location.href="index.html"
		//$("#dg").html(goods.name);
		//$("#tc").html("[退出]");
		//$("#tc").click(function(){
		//$.cookie("login", {expires: -1, path: '/'});
		//$("#hp1").css("display", "none");
		//$("#hp2").css("display", "block");

	}else{
		alert("账号或密码错误！");
	}
		
});








	