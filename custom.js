$(function() {

    if (window.location.href.indexOf("enduserwelcome") > -1) {
        return;
    }

    console.log("Script added");

    var signupURL = window.location.origin + "/moas/idp/usersignup";
    var forgotPassURL = window.location.origin + "/moas/idp/resetpassword";
    var googleBtnId = '86';
    $("link[rel='stylesheet'][href*='/moas/css/login-style-ui.css?ver=2.0']").remove();
    // $("link[rel='stylesheet'][href*='/moas/css/bootstrap-select.min.css']").remove();4
    var opt1 = $($("#group_multi_select").children()[0]).text();
    var opt2 = $($("#group_multi_select").children()[1]).text();
    var optval1 = $($("#group_multi_select").children()[0]).val();
    var optval2 = $($("#group_multi_select").children()[1]).val();
    console.log(opt1)
    console.log(opt2)

    $("hr").remove();
    $("#groupsDiv").remove();
    $("#login-header,.login-header").remove();
    $("#loading_image").hide();
    $(".custom-title").remove();
    $("br").remove();
    $(".group_multi_select").parent();
    $(".open").remove();
    $("#group_multi_select").removeAttr("multiple");
    $("#group_multi_select").prop("title", "Choose Program");
    $("#group_multi_select").removeAttr("data-actions-box");
    // $("#group_multi_select").parent().removeClass()


    $("#group_multi_select").removeAttr("data-live-search");
    $("#group_multi_select").removeAttr("data-live-search-placeholder");
    $("span.glyphicon").hide();
    // $("#group_multi_select").removeAttr("multiple");
    $("#group_multi_select").addClass("form-control");

    // $("#group_multi_select").css({
    //     "height": "4.3rem !important"
    // });
    var groupSel = `
        <p class="text-left" style="margin:15px 0 0 0;">Program</p>
        <select class="form-control">
            <option value=` + optval1 + `>` + opt1 + `</option>
            <option value=` + optval2 + `>` + opt2 + `</option>
        </select>
    `;

    let fonts = ``;
    let links = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    `;
    let customCss = `
    <style>
    /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

.row-main{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
    }
    .col{
        -webkit-box-flex:40%  ;
            -ms-flex:40%  ;
                flex:40%  ;
        margin:auto;
    }
    .col1{
        -webkit-box-flex:50%  ;
            -ms-flex:50%  ;
                flex:50%  ;
    }
    .img-main{
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
           object-fit: cover;
    }
    .login{
        padding: 40px;
        background-color: #fff;
        border-radius: 0px;
        -webkit-box-shadow: 0 0 37.5px 14px #e8e8e8;
                box-shadow: 0 0 37.5px 14px #e8e8e8;;
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
    $("#row4Div").append(groupSel);
    var nav = ``;
    var action = $(".form").attr("action");
    var actionf = $(".form-inline").attr("action");
    console.log(action);
    console.log(actionf);
    if (action == "login" || action == '/moas/idp/userlogin') {
        $('div').hide();
        window.location.href = 'https://enterprisedna.co/learning-portal?option=saml_user_login';
        // window.location.href = 'https://twolips.miniorange.in/moas/idp/usersignup';
    }
    if (action == "/moas/idplogin") {
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

                    <div class="form-check" style="margin-top:20px">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <small id="emailHelp" class="form-text text-muted" style="color: #aaa;">Remember Me</small>
                    <small style="float:right;margin-top:4px;font-size:1.3rem;"><a href="idp/resetpassword" class="form-text text-muted">Forgot Password?</a></small>
                  </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        var footer = ``;
        $(nav).insertBefore("#loading_image");
        $("body").prepend(body);

        $(footer).insertAfter("#login-body");

        var alert = $(".alert");

        $("#submit_btn").click(function() {
            $("#username").val($("#uname").val());
            $("#plaintextPassword").val($("#pass").val());
            $(".form").submit();
        });
        var login = $(".login-form");
        $(".login").prepend(login);
        $("#login-wrapper").hide();
        var unamelbl = `<p id="emailHelp" class="form-text text-muted" style="color: #aaa">Email Address</p>`;
        $("#userName").removeClass();
        $("#userName").prepend(unamelbl);
        $(".custom-small-text").remove();
        $("#loginbutton").removeClass();
        $("#loginbutton").removeAttr("style");
        $("#loginbutton").addClass("btn btn-primary");
        $("#loginbutton").css({
            "background-color": "#195B94",
            "padding": "10px 40px 15px 40px",
            "font-size": "14px",
            "margin-top": "20px"
        });
        $("#loginbutton").parent().removeClass();
        var passlbl = `<p id="emailHelp" class="form-text text-muted" style="color: #aaa">Password</p>`;
        var duname = `<b><p id="emailHelp" class="form-text" style="text-align:center;margin-bottom:10px">` + $("#username").val() + `</p></b>`;

        $("#passwordspan").removeClass();
        $("#passwordspan").prepend(passlbl);
        $("#passwordspan").prepend(duname);
        var inline = $(".form-check");
        $("#loginbutton").parent().parent().prepend(inline);
        $(".login-main").prepend(alert);
    } else if (action == "resetuserpassword" || actionf == "updateuserpassword") {
        console.log("hh");
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
        var alert = $(".alert");
        $(".login-main").prepend(alert);
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
            "padding": "15px 40px 15px 40px;",
            "background-color": "#195B94"
        })
        $("#go-back-link").css({
            "font-size": "14px",
            "width": "100% !important",

        })
        $("#go-back-link").parent().removeAttr("style");
        $("#go-back-link").parent().css({

            "font-size": "10px",
            "width": "100% !important",
            "text-align": "center",
            "margin-top": "30px"
        });
        $(".login").css({
            "padding": "40px 40px 10px 40px"
        })
        var br = `<br>`;

        $(".col-xs-5").removeClass();
        $(".center").css({
            "padding-left": "20px",

        });
        $("#submit").parent().css({
            "padding-left": "20px"
        });
        $("#go-back-link").attr('href', '../idplogin');

        $(".row").removeClass("center");
        $("#password").css({
            "padding-right": "80px"
        })
        $(".form-control").css({
            "padding-right": "80px"
        })

    }
    if (window.location.href.indexOf("updateuserpassword") > -1 && actionf != 'updateuserpassword') {
        window.location.href = 'https://enterprisedna.co/learning-portal?option=saml_user_login';
    }
    var successpage = $("form").attr("id");
    console.log(successpage);
    if (successpage == 'postcreatelogin') {
        window.location.href = 'https://enterprisedna.co/learning-portal?option=saml_user_login';
    }
    if (action == "/moas/newusersignup") {
        // $(".btn-group-sm").hide();
        // $(".glyphicon.glyphicon-ok").remove();
        $(".bootstrap-select").parent();
        $("#group_multi_select").parents().find(".btn-default").remove()
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
        var alert = $(".alert");
        $(".login-main").prepend(alert);
        var signup_page = $("#inline-registration");
        $(".login").prepend(signup_page);
        $("#username").parent().removeClass();
        $("#email").parent().removeClass();
        $("#email").parent().css({
            "margin-top": "10px"
        })
        $("#loginbutton").parent().removeClass();
        $("#loginbutton").val("Register")
        $("#loginbutton").removeClass();
        $("#loginbutton").removeAttr("style");
        $("#loginbutton").addClass("registration");
        var sign_in_body = `<small class="sign_in_body" >  </small>`;
        $("#loginbutton").parent().addClass("form-check");
        $("#loginbutton").parent().append(sign_in_body);
        // $("#groupsDiv").hide();
        $("#groupsDiv").removeClass();

        $($("#groupsDiv").children()[0]).text("Program");
        $("#customAttribute1").parent().removeClass();
        $("#customAttribute2").parent().removeClass();
        $("#customAttribute1").prop("placeholder", "Company Name");
        $("#customAttribute2").prop("placeholder", "Center of Excellence and Membership");
        $("#email").removeClass("input-custom");
        $("#username").removeClass("input-custom");
        $("#email").removeClass("input-custom");
        $("#group_multi_select").attr("required", "true")
        $("#row2Div").removeClass();
        $("#firstnameDiv").removeClass();
        $("#lastnameDiv").removeClass();
        $("#firstnameDiv").addClass("col-md-6");
        $("#lastnameDiv").addClass("col-md-6");
        $("#endUser_fname").prop("placeholder", "Firstname");
        $("#endUser_lname").prop("placeholder", "Lastname");
        $("#passwordDiv").removeClass();
        $("#confirmpasswordDiv").removeClass();
        $("#groupsDiv").removeClass();
        $("#customAttribute1").parent().removeClass();
        $(".custom-small-text").children().children().attr('href', '');
        $(".custom-small-text").children().hide();
        $(".custom-small-text").append(`<p>Already have an account?<a href='https://enterprisedna.co/learning-portal/?option=saml_user_login'> Click here</a></p>`);
    }
});