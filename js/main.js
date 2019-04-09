
window.onload=function (){
    changeIndexNav();
}



/**
* 关闭弹出框的功能
*/
function closeModel() {
        document.getElementById("register").style.visibility = 'hidden';
        document.getElementById("hideDiv").style.visibility = 'hidden';
        document.getElementById("login").style.visibility = 'hidden';
        // 不遮挡后面的内容将body设置为原始样式，也就是实现可滚动
        document.body.style.overflow = 'scroll';
    }

function registerModel() {
    document.getElementById("register").style.visibility = "visible";
    document.getElementById("hideDiv").style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
}

function loginModel() {
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("hideDiv").style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
}


function checkUse(){
    //在每个函数中定义check变量是为了在表单提交后，能够逐个验证每个函数是否通过，很好很好。（以下同理）
    var check;
    var username = document.getElementById("regusername").value;
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
    if (username.length == 0 ) {
        document.getElementById("usernameCheckbox").innerHTML = "输入不得为空";
        document.getElementById("usernameCheckbox").style.color="red";
        document.getElementById("regusername").focus();
        check = false;
    } 
    else if (reg.test(username) ){
        document.getElementById("usernameCheckbox").innerHTML = "√";
        document.getElementById("usernameCheckbox").style.color="green";
        document.getElementById("regusername").focus();
        check = false;
    }
    else {
        document.getElementById("usernameCheckbox").innerHTML = "用户至少为6位，不能为纯数字或纯字母 eg:sakura123";
        document.getElementById("usernameCheckbox").style.color="red";
        check = true;
    }
    return check;
   }

   //利用正则表达式判断密码符合否
 function checkPwd() {
    var check;
    var password = document.getElementById("regpassword").value;
    var username = document.getElementById("regusername").value;
    if (password.length == 0) {
    document.getElementById("passwordCheckbox").innerHTML = "输入不得为空";
    document.getElementById("passwordCheckbox").style.color="red";

    document.getElementById("regpassword").focus();
    check = false;
    } 
    else if(password.length < 6  || password == username) {
    document.getElementById("passwordCheckbox").innerHTML = "用户密码至少为6位，不能与用户名相同 eg:sakura";
    document.getElementById("passwordCheckbox").style.color="red";

    document.getElementById("regpassword").focus();
    check = false;
    } 
    else
    {  
    document.getElementById("passwordCheckbox").innerHTML = "√";
    document.getElementById("passwordCheckbox").style.color="green";

    check = true;
    }
    return check;
   }

   //验证密码是否不一致！  
   function checkPwdc() {
    var check;
    var password = document.getElementById("regpassword").value;
    var pwdc = document.getElementById("repassword").value;
    if (pwdc.length == 0) {
    document.getElementById("passwordCheckbox2").innerHTML = "输入不得为空";
    document.getElementById("passwordCheckbox2").style.color="red";

    document.getElementById("repassword").focus();  
    check = false;
    } 
    else if(password != pwdc) {
        document.getElementById("passwordCheckbox2").innerHTML = "密码与确认密码不同";
        document.getElementById("passwordCheckbox2").style.color="red";

        check = true;
    }
    
    else{
    document.getElementById("passwordCheckbox2").innerHTML = "√";
    document.getElementById("passwordCheckbox2").style.color="green";

    check = true;
    }
    return check;
   }

    //正则表达式验证电子邮件（及时）

 function checkEmail(){
    var check;
    //电子邮件的正则表达式
    var e = document.getElementById("email").value;
    var e1 = document.getElementById("email").value.indexOf("@",0);
    var e2 = document.getElementById("email").value.indexOf(".",0);
    if (e.length == 0){
        document.getElementById("emailCheckbox").innerHTML = "输入不得为空";
        document.getElementById("emailCheckbox").style.color="red";

        document.getElementById("email").focus();
    }
    else if(email == "" || (e1==-1 || e2==-1) || e2<e1 )
    {
    document.getElementById("emailCheckbox").innerHTML = "请输入正确的email格式 eg:name@example.com";
    document.getElementById("emailCheckbox").style.color="red";
    document.getElementById("email").focus();
    check = false;
    } 
    else {
    document.getElementById("emailCheckbox").innerHTML = "√";
    document.getElementById("emailCheckbox").style.color="green";

    check = true;
    }
    return check;
   }

   function checkTel() {
    var check;
    var regs = /^1[34578]\d{9}$/;
    var tel = document.getElementById("tel").value;
    if (tel.length == 0) {
        document.getElementById("telCheckbox").innerHTML = "输入不得为空";
        document.getElementById("telCheckbox").style.color="red";

        document.getElementById("tel").focus();
    }
    else if (regs.test(tel)) {
    document.getElementById("telCheckbox").innerHTML = "√";
    document.getElementById("telCheckbox").style.color="green";

    document.getElementById("tel").focus();
    check = false;
    } 
    else {  
    document.getElementById("telCheckbox").innerHTML = "*请输入正确格式的手机号eg:13188888888";
    document.getElementById("telCheckbox").style.color="red";

    check = true;
    }
    return check;
   }

   function checkAddr(){
    //在每个函数中定义check变量是为了在表单提交后，能够逐个验证每个函数是否通过，很好很好。（以下同理）
    var check;
    var address = document.getElementById("addr").value;
    if (address.length == 0 ) {
        document.getElementById("addrCheckbox").innerHTML = "输入不得为空";
        document.getElementById("addrCheckbox").style.color="red";

        document.getElementById("addr").focus();
        check = false;
    } 
    else {
        document.getElementById("addrCheckbox").innerHTML = "√";
        document.getElementById("addrCheckbox").style.color="green";

        check = true;
    }
    return check;
   }

   function regSub(){
       var username = document.getElementById("regusername").value;
       var serverStatus = true ;
       var check;
       if (username == "sakura123"){
            alert("注册失败，用户已经存在");
            check=false;
       }
       else if (serverStatus == false ) {
           alert("注册失败，服务器错误");
           check=false;
       }
       else if (serverStatus == true){
           alert("注册成功");
           check=true;
           setCookie("username",username);
       }
    return check;
    }



function setCookie(c_name,value)
{
    
    document.cookie=c_name+ "=" +escape(value)
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

function changeIndexNav()
{
var username=getCookie('username')
if (username!=null && username!=""){
    if (document.getElementById("register-li")!=null) document.getElementById("register-li").setAttribute("class","hidden");
    if (document.getElementById("login-a")!=null) document.getElementById("login-a").innerHTML="登出";
    if (document.getElementById("login-a")!=null) document.getElementById("login-a").setAttribute("href","javascript:logOut()");


    if (document.getElementById("detail-login")!=null) document.getElementById("detail-login").setAttribute("class","hidden");
    if (document.getElementById("loginStatus")!=null) document.getElementById("loginStatus").innerHTML = username;
    if (document.getElementById("loginStatus")!=null) document.getElementById("loginStatus").setAttribute("href","javascript:logOut()");

    if (document.getElementById("loginStatus")!=null) document.getElementById("loginStatus").setAttribute("href","./person.html");
    if (document.getElementById("logout")!=null) document.getElementById("logout").setAttribute("class","");


}
else 
  {
    if (document.getElementById("register-li")!=null) document.getElementById("register-li").setAttribute("class","");
    if (document.getElementById("login-a")!=null) document.getElementById("login-a").innerHTML="登陆";
    if (document.getElementById("login-a")!=null) document.getElementById("login-a").setAttribute("href","javascript:loginModel()");
  


    if (document.getElementById("detail-login")!=null) document.getElementById("detail-login").setAttribute("class","");
    if (document.getElementById("loginStatus")!=null) document.getElementById("loginStatus").innerHTML = "未登录";
    if (document.getElementById("loginStatus")!=null) document.getElementById("loginStatus").setAttribute("href","javascript:loginModel()");
    if (document.getElementById("logout")!=null) document.getElementById("logout").setAttribute("class","hidden");

}
}

function loginSub(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username == "sakura123" && password == "sakura" ){
        setCookie("username",username);
        changeIndexNav();
        alert("登陆成功")
        closeModel();
    }
    else if(username == "" ) {
        alert("用户为空");
        setCookie("username","");
        changeIndexNav();
    }
    else if(password == "" ) {
        alert("密码为空");
        setCookie("username","");
        changeIndexNav();
    }
    else if(username !=  "sakura123" ) {
        alert("用户不存在");
        setCookie("username","");
        changeIndexNav();
    }
    else if(username == "sakura123" && password!="sakura" ) {
        alert("密码错误");
        setCookie("username","");
        changeIndexNav();
    }
    return;
}

function logOut(){
    setCookie("username","");
    alert("登出成功！");
    changeIndexNav();
}

function searchSub(){
    search = document.getElementById("search").value;
    if(search) {
        window.event.returnValue=false

        window.location.href="search.html";

    }
    
}

function addToShopList (){
    var check=true;
    if (check== true) {
        alert("成功添加进购物车");
    }
    else {
        alert("添加失败，请确认是否有库存");
    }
}

function rmFromShopList(item){
    document.getElementById(item).style.display="none";
    alert("删除成功");
}

function pay(){
    alert("结款成功");
}