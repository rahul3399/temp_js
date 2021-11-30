$(function() {

    if (window.location.href.indexOf("enduserwelcome") > -1) {
        return;
    }

    console.log("Script added");
    var signupURL = window.location.origin + "/moas/idp/usersignup";
    var forgotPassURL = window.location.origin + "/moas/idp/resetpassword";
    var googleBtnId = '86';
    $("link[rel='stylesheet'][href*='/moas/css/login-style-ui.css?ver=2.0']").remove();
    $("hr").remove();
    $("#login-header,.login-header").remove();
    $("#loading_image").hide();
    $(".custom-title").remove();
    $("br").remove();
    let fonts = ``;
    let links = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    `;
    let customCss = `
    <style>
    .row-main{
        display:flex;
    }
    .col{
        flex:40%  ;
        margin:auto;
    }
    .col1{
        flex:50%  ;
    }
    .img-main{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .login{
        padding: 30px;
        background-color: #fff;
        border-radius: 0px;
        box-shadow: 0 0 37.5px 14px rgb(2 8 53 / 6%);
    }
    .login-main{
        padding: 25px;
        width: 400px;
        margin:auto;
    }
    .logo{
        text-align: center;

        background-position: center;
        background-size: cover;
    }
    .logo1{
        text-align: center;
     
        background-position: center;
        background-size: cover;
    }
    li{
        list-style-type: none;
    }
    input[type=text]{
        padding:15px !important;
    }
    ::-webkit-input-placeholder { 
        font-size:13px;
      }
      ::-moz-placeholder {
        font-size:13px;
      }
      :-ms-input-placeholder {
        font-size:13px;
      }
      :-moz-placeholder { 
        font-size:13px;
      }
      .text-left{
          font-size:14px;
          color:#aaa;
      }
      .registration{
        border-radius:4px;
        background-color: #195B94;
        color: #fff;
        position: relative;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        text-decoration: none;
        border: none;
        -webkit-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s;
        padding: 12px;
        width: 130px;
        margin-top:20px;
        font-size: 14px;
      }
      .bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn) {
        width: 100% !important;
      }
      .section1{
        background-image: url(https://enterprisedna.co/learning-portal/wp-content/uploads/2021/11/aapl-blue.jpg);
        height: 100vh;
        width: 100%;
        background-color: #00101f;
        background-position-x: right;
        background-size: cover;
      }
      .form-control{
          height:4.0rem !important;
      }
      .input-custom {
        height:4.0rem !important;
    }
      .inline{
          display:inline-block;
      }
      .create_act{
        float:right;
        margin-top:30px;
        margin-left:80px
      }
      .text-left{
          font-size:14px;
      }
      .btn-primary{
          height:44px;
          font-size:14px;
      }
  
    </style>`;
    $('head').append(fonts);
    $('head').append(links);
    $('head').append(customCss);
    
    var nav = ``;
    var action = $(".form").attr("action");
    var actionf = $(".form-inline").attr("action");
    console.log(action);
    if(action == "login" || action == "/moas/idplogin"){
        var body = `
        <div class="row-main">
            <div class="col1">
                <div style="" class="section1">

                </div>
            </div>
            <div class="col">
                <div  class="logo1">
                    <img width="45%"  style="text-align:center" src="https://enterprisedna.co/learning-portal/wp-content/uploads/2021/10/LOGO-DARK-455x93.png">
                </div>
                <div class="login-main">
                    <div class="login">
                    <form>
                    <div class="form-group">
                    <p id="emailHelp" class="form-text text-muted" style="color: #aaa">Username or Email Address</p>
                      <input type="email" class="form-control" id="uname" aria-describedby="emailHelp" placeholder="Username or Email Address">
                    </div>
                    <div class="form-group">
                    <p id="emailHelp" class="form-text text-muted" style="color: #aaa">Password</p>
                      <input type="password" class="form-control" id="pass" placeholder="Password">
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <small id="emailHelp" class="form-text text-muted" style="color: #aaa;">Remember Me</small>
                      <small style="float:right;margin-top:4px;font-size:1.3rem;"><a href="idp/resetpassword" class="form-text text-muted">Forgot Password?</a></small>
                    </div>   
                    <div class="inline">
                        <div class="inline">
                        <button type="button"  id="submit_btn"class="btn btn-primary" style="background-color: #195B94;padding:10px 40px 15px 40px;font-size:14px;margin-top:20px">Log in</button>
                        </div>
                        <div class="inline create_act" style="">

                        </div>
                    </div>
                  </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    var footer = ``;
    $(nav).insertBefore("#loading_image");
    $("body").prepend(body);
   
    $(footer).insertAfter("#login-body");
    
    var alert  = $(".alert");
    $(".login").prepend(alert);
    $("#submit_btn").click(function(){
        $("#username").val($("#uname").val());
        $("#plaintextPassword").val($("#pass").val());
        $(".form").submit();
    })
     $("#login-wrapper").hide();
    }
    else if(action == "resetuserpassword" || actionf == "updateuserpassword"){
        var body = `
        <div class="row-main">
            <div class="col1">
                <div style="" class="section1">

                </div>
            </div>
            <div class="col">
                <div  class="logo" style="">
                    <img width="45%"  style="text-align:center" src="https://enterprisedna.co/learning-portal/wp-content/uploads/2021/10/LOGO-DARK-455x93.png">
                </div>
                <div class="login-main">
                    <div class="login">
                    
                    </div>
                </div>
            </div>
        </div>
    `;
    var footer = ``;
    $(nav).insertBefore("#loading_image");
    $("body").prepend(body);
    $(footer).insertAfter("#login-body");
    var alert  = $(".alert");
    $(".login").prepend(alert);
    var resetpassword_page = $("#login-wrapper");
    $(".login").append(resetpassword_page);
    $("h3").remove();
    $("#username").parent().removeClass();
    var uname = ` <p id="emailHelp" class="form-text text-muted" style="color: #aaa">Email Address</p>`;
    $("#username").parent().prepend(uname);
    $(".btn").removeAttr("style");
    $(".btn").parent().removeClass();
    $(".btn").parent().css({
        "width": "150px",
        "margin-top": "20px",
        
    });
    $(".btn-primary").css({
        "font-size": "14px",
        "padding":"15px 40px 15px 40px;",
        "background-color":"#195B94"
    })
    $("#go-back-link").css({
        "font-size":"14px",
        "width":"100% !important",
        
    })
    $("#go-back-link").parent().removeAttr("style");
    $("#go-back-link").parent().css({
        
        "font-size":"10px",
        "width":"100% !important",
        "text-align":"center",
        "margin-top":"30px"
    });
    $(".login").css({
        "padding":"40px 40px 10px 40px"
    })
    var br = `<br>`;
    $("#password").parent().removeClass();
    $("input[name*=confirmPassword").parent().removeClass();
    $(".center").css({
        "padding-left":"20px",
        
    });
    $("#submit").parent().css({
        "padding-left":"20px"
    });
    }
    if(action == "/moas/newusersignup"){
        var body = `
        <div class="row-main">
            <div class="col1">
                <div style="" class="section1">

                </div>
            </div>
            <div class="col">
                <div  class="logo">
                    <img width="45%"  style="text-align:center" src="https://enterprisedna.co/learning-portal/wp-content/uploads/2021/10/LOGO-DARK-455x93.png">
                </div>
                <div class="login-main">
                    <div class="login">
                    
                    </div>
                </div>
            </div>
        </div>
    `;
    var footer = ``;
    $(nav).insertBefore("#loading_image");
    $("body").prepend(body);
    $(footer).insertAfter("#login-body");
    var alert  = $(".alert");
    $(".login-main").prepend(alert);
    var signup_page  =$("#inline-registration");
    $(".login").prepend(signup_page);
    $("#username").parent().removeClass();
    $("#email").parent().removeClass();
    $("#email").parent().css({
        "margin-top":"10px"
    })
    $("input[name*='idpUserLogin.cleartextPassword'").parent().removeClass();
    $("input[name*='confirmPassword'").parent().removeClass();
    $("#loginbutton").parent().removeClass();
    $("#loginbutton").val("Register")
    $("#loginbutton").removeClass();
    $("#loginbutton").removeAttr("style");
    $("#loginbutton").addClass("registration");
    var sign_in_body = `<small class="sign_in_body" >    </small>`;
    $("#loginbutton").parent().addClass("form-check");
    $("#loginbutton").parent().append(sign_in_body);
    var sign_in = $("a[href='/moas/login'");
    $(sign_in).css({
        "margin-top":"23px",
        "float": "right",
        "font-size": "14px",
        "color":"black"
    })
    $("a[href='/moas/login'").parent().hide();
    $(".sign_in_body").append(sign_in);
    // $("#groupsDiv").hide();
    $("#groupsDiv").removeClass();
    $("#group_multi_select").prop("title","Choose Program");
    $("#group_multi_select").removeAttr("data-actions-box");
    $("#group_multi_select").css({
        "height":"4.3rem !important"
    });
    $($("#groupsDiv").children()[0]).text("Program");
    $("#customAttribute1").parent().removeClass();
    $("#customAttribute2").parent().removeClass();
    $("#customAttribute1").prop("placeholder","Company Name");
    $("#customAttribute2").prop("placeholder","Center of Excellence and Membership");
    $("#email").removeClass("input-custom");
    $("#username").removeClass("input-custom");
    $("input[name*='confirmPassword']").removeClass("input-custom");
    $("input[name*='idpUserLogin.cleartextPassword']").removeClass("input-custom");
    $("#email").removeClass("input-custom");
    $("#group_multi_select").attr("required","true")



    }
  

});