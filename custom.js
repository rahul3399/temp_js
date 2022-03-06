$(function() {
    var signupURL = window.location.origin + "/moas/idp/usersignup";
    var signinURL = "https://drakelabs.xecurify.com/moas/broker/login/jwt/255124?client_id=36ixwtrlwzj2vf6ta3rioleg9497iby&redirect_uri=https%3A%2F%2Fdrakelabs.xecurify.com%2Fmoas%2Fbroker%2Flogin%2Fjwt%2F255124%3Fclient_id%3D36ixwtrlwzj2vf6ta3rioleg9497iby%26redirect_uri%3Dhttps%3A%2F%2Fdrakelabsstaging.mybigcommerce.com%2Flogin%2Ftoken%2F";
    var forgotPassURL = window.location.origin + "/moas/idp/resetpassword";
    var host = "https://lore.cc";
    var googleBtnId = '8548';
    var appleBtnId = '8549';
    $("link[rel='stylesheet']").remove();
    $("hr").remove();
    $("#login-header,.login-header").remove();
    $("#loading_image").hide();
    $(".custom-title").remove();
    $("body").hide();
    console.log("Script added");
    var standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios && !standalone && !safari) {
        var stylesheet = `
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            `;

        var style = `
            <style type="text/css" media="screen, print">
            @font-face {
                font-family: NeueMontreal-Regular;
                src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.eot");
                src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.otf") format('truetype'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.woff") format('woff'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.woff2") format('woff2'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.ttf") format('truetype');
                }
                .logo{
                    width:285px;
                    height:49px;
                    margin-top:95px;
                }
                ::placeholder {
                    color: #FFFFFF;
                    
                  }
                .qr{
                    background: #2B2B2B;
                    color: white;
                    border-radius: 10px;
                    width: 158px;
                    height: 48px;
                    font-size:18px;
                    border:1px solid #2B2B2B;
                    
                }
                .facebook{
                    background: #2B2B2B;
                    color: white;
                    border-radius: 10px;
                    width: 50px;
                    height: 48px;
                    text-align:center;
                    border:1px solid #2B2B2B;
    
                }
                .apple:hover{
                    color: #FFFFFF !important;

                }
                button#apple,
                button#google {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                }
               
             }
            </style>
            `;
        var logo = `
            <div style="text-align:center;">
                <img class="logo" src="https://i.ibb.co/XxgV330/Morphic-Logotype-2.png" alt="Morphic-Logotype-2" border="0">
            </div>`;
        var qrbtn = `
                 
            `;

        var logif = `<div id="logif" style="background-color: black; padding: 20px;margin-top:30px"></div>`;
        $(".form").prepend(logif);
        var uname = $("#userName").parent();
        var password = $("#passwordspan").parent();
        var sociallogin = `
            <div style="text-align:center;background-color:black;width:100%;" id="social">
                <p style="color:white;font-size:18px">Or Login with</p>
                <div style="display:inline">
                    <button id="google" class="facebook"><img src='https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/255124/google.png'/></button>
                    <button id="apple" class="facebook"><img src='https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/255124/apple.png'/></button>
                </div>
            </div>`;
        $("#login-wrapper").append(sociallogin);
        $("head").append(style);
        $("head").append(stylesheet);
        $("#logif").append(uname);
        $("#logif").append(password);
        $("#loginbutton").parent().parent().prepend(qrbtn);
        $("#loginbutton").parent().parent().removeClass();
        $(".container-fluid").removeClass();
        console.log("true");
        $("body").css({
            "background-image": "url('https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/255124/morphic-banner.png')",
            "background-repeat": "no-repeat",
            "background-size": "cover"
        });
        $("#login-wrapper").removeAttr("style");
        $("#username").prop("placeholder", "Email");
        $("#login-body").prepend(logo);
        $("#username").css({
            "height": "4vh",
            "border": "0",
            "border-bottom": "1px solid #FFFFFF",
            "background": "transparent",
            "width": "100%",
            "padding": "8px 4px",
            "font-size": "19px",
            "color": "#fff",
            "outline": "none"
        });

        $("#passwordspan").removeClass();

        $("#plaintextPassword").css({
            "height": "4vh",
            "border": "0",
            "border-bottom": "1px solid #FFFFFF",
            "background": "transparent",
            "width": "100%",
            "padding": "8px 4px",
            "font-size": "19px",
            "color": "#fff",
            "outline": "none"
        });
        $("#plaintextPassword").removeClass();
        $("#plaintextPassword").prop("placeholder", "Password");
        $("#passwordspan").css({
            "margin-top": "45px"
        })
        $("#loginbutton").removeAttr("style");
        $("#loginbutton").css({
            "background": "#FFFFFF",
            "border-radius": "10px",
            "width": "100%",
            "height": "48px",
            "font-size": "18px",
            "padding-right": "0px"
        });
        $("#userName").removeClass();
        $("#username").removeClass();
        $("#loginbutton").removeClass();

        $("#loginbutton").parent().removeClass();
        $("#loginbutton").parent().css({
            "display": "inline-block",
            "width": "100%",
            "padding": "0px 13px 0px 14px"
        });
        $("#loginbutton").parent().parent().css({
            "text-align": "center",
        })
        $("a[href='https://rahul3399.miniorange.in/moas/idp/usersignup']").remove();
        $("a[href*='moas/idp/resetpassword']").remove();
        var lernmore = `
            <div class="" style="margin-top:40px;text-align:center;margin-left: 27%;">
                <p style="color:white;background-color:black;padding:15px;font-size:18px;width: 61%;">Learn More</p>
            </div>`;
        $("#login-wrapper").append(lernmore);
        $("#loginbutton").val("Login");
        let googleBtn = $("#idpId-" + googleBtnId).find("a");
        let appleBtn = $("#idpId-" + appleBtnId).find("a");
        $("#social").append(appleBtn);
        $("#social").append(googleBtn);

        $(googleBtn).children().remove();
        $(appleBtn).children().remove();
        var google1 = $("#google");
        var apple1 = $("#apple");
        $(appleBtn).append(apple1);
        $(googleBtn).append(google1);
        $(".row").removeClass();
    } else {

        let fontFaceCSS = `<style type="text/css" media="screen, print">
    @font-face {
    font-family: NeueMontreal-Regular;
    src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.eot");
    src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.otf") format('truetype'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.woff") format('woff'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.woff2") format('woff2'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Regular.ttf") format('truetype');
    }

    @font-face {
    font-family: NeueMontreal-Bold;
    src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Bold.eot");
    src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Bold.otf") format('truetype'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Bold.woff") format('woff'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Bold.woff2") format('woff2'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/NeueMontreal/NeueMontreal-Bold.ttf") format('truetype');
    }
    
    @font-face {
    font-family: AtlasTypewriter-Regular;
    src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/AtlasTypewriter/AtlasTypewriter-Regular.otf") format('truetype');
    }

    @font-face {
    font-family: HelveticaNowText-Regular;
    src: url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/HelveticaNowText/HelveticaNowText-Regular.woff2") format('woff2'), url("https://cdn11.bigcommerce.com/s-pqcep6tgku/content/fonts/HelveticaNowText/HelveticaNowText-Regular.woff") format('woff');
    }
    .row {
        margin-right: -15px;
        margin-left: -15px;
    }
    .top-buffer{
        margin-top:30px;
    }
    .text-left-align{
        margin-top:10px;
    }
    .col-xs-5{
        margin-top:30px;
    }
    .button{
       
    }
</style>`;
        let idpBtnCSS = `<style>
    .idp-btn {
        width : 100%;
        margin : 10px 0;
        /*padding-left: .75rem;*/
        padding-right: .75rem;
    
    }
    .social-login{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        gap:5px;
    }
    .social-login a{
        flex-grow: 1;
        box-sizing: border-box;
        margin: 4px 0;
        text-align: center;
        display: flex;
        min-height: 47px;
        justify-content: center;
        min-width: max-content;
        align-items: center;
    }
    .idp-btn a {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 4px;
        margin: 5px 0;
        opacity: 0.85;
        display: inline-block;
        font-size: 17px;
        line-height: 20px;
        text-decoration: none;
        max-width: 300px;
    }

    .idp-btn a:hover {
        opacity: 1;
        color: white;

    }          

    .fb-btn {
        background-color: #3B5998;
        color: white;
    }
    
    .twitter-btn {
        background-color: #55ACEE;
        color: white;
    }
    
    .google-btn{
        background-color: #dd4b39;
        color: white;
    }   
    
    .line{
        margin:16px 0;
        width: 100%;
        text-align: center; 
    }
    .button1{
        font-feature-settings: 'liga' 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: NeueMontreal-Regular;
        font-size: 20px;
        line-height: 14px;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
        background-color: transparent;
        border-radius: 47px;
        padding: 4px 20px;
        color: #fff;
        border: 1px solid #fff;
        line-height: 1.33;
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;log
        align-self: center;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        max-width: 250px;
        min-width: calc(172px - 80px);

    } 
    .apple{
        border:1px solid #ffff;
        margin:auto;
        border-radius:40px; 
        font-family:sans-serif; font-size:18px;   padding-right: 20px;
    }
    .apple:hover{
        border-color:#46c5e2;
       
    }
    .apple > span{
        margin:auto;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: inside !important;
        list-style-type: none;
    }
    .alert {
        font-family: Source Code Pro, sans-serif;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-radius: 4px
    }
    .alert-success {
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #d6e9c6;
    }
    .alert-danger {
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
    }
    .alert-dismissable, .alert-dismissible {
        padding-right: 35px;
    }
    .line-innertext {
       color:#ffffff;
        padding: 3px;
        text-align:center;
    }
   .login-row {
    margin: 32px auto;
    max-width: 120.71429rem !important;
    width: 100%;
    }
    .login-form{
        width:38% !important;
    }
    .form-actions {
        margin: 0 auto;
        max-width: 85.71429rem;
        width: 100%;
        display: block;
        text-align: left !important;
    }
    .button{
        min-width: 241px !important;
    }
    .panel{
      
        margin-top: 40px;
        background-color: #043561;
        padding: 55px;
        max-width: 614px;
        margin-left: 187px
    }
    li{
        list-style-type: disc !important;
    }
    .new-customer-intro{
        margin-top:40px !important;
        font-size:16px;
    }
    .panel-title {
        font-size: 30px !important;
    }
    .button{
       
        font-size:16px !important;
       
    }
    .btn-signin {
        background-color: #46c5e2 !important;
        border-color:#46c5e2 !important;
        color: #000 !important;
    }
    .form{
        margin-left:120px !important;
    }
 
    .login-with-google-btn {
        transition: background-color 0.3s, box-shadow 0.3s;
        padding: 6px 16px 12px 42px;
        border: none;
        border-radius: 100px;
        box-shadow: 0 -1px 0 rgb(0 0 0 / 4%), 0 1px 1px rgb(0 0 0 / 25%);
        color: #757575;
        font-size: 18px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
        background-color: white;
        background-repeat: no-repeat;
        background-position: 12px 11px;
        background-size: 23px;
        padding-top: 8px;
    
      }
      .login-with-google-btn:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
        color: #757575 !important;
      }
      .login-with-google-btn:active {
        background-color: #eeeeee;
      }
      .login-with-google-btn:focus {
        outline: none;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25), 0 0 0 3px #c8dafc;
      }
    
      .new-customer-fact{
          padding:5px !important;
      }
      .newf{
        
        padding: 60px !important;
  
      }
      #passwordspan{
        width:100%;
        position:relative;

        }
      .i-forgot{
        color: #46c5e2; margin-top: -33px;margin-left: -110px;;position:absolute;
      }
      input{
          max-width:100% !important;
      }
      @media only screen and (max-width: 462px) {
        .login-form {
            width: 87% !important;
        }
        .form-actions {
           margin-top: 20px !important;
        }
      }
      @media only screen and (min-device-width: 481px) and (max-device-width: 999px){
        .login-form{
            width: 80% !important;
        }
        #passwordspan{
            width:100%;
        }
      }
   
      @media only screen and (max-width: 680px) {
        .new-customer1 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            width: 100% !important;
            float: left;
        }
        #passwordspan{
            width:99%;
        }
        .login-form{
            width:77% !important;
        }
        .new-customer1{
            width:100%;
        }
        .new-customer-fact-list {
            margin-left: 1rem !important;
        }
        .form{
            margin-left:30px !important;
        }
        .login-form {
            width: 87% !important;
        }
        .form-actions {
           margin-top: 20px !important;
        }
        .panel{
            
            margin:17px;
        }
        .newf{
            padding:29px !important;
        }
        .login-with-google-btn{
            width:100%;
        }
       
        #social {
            text-align: center;
        }
        .i-forgot{
            margin-left:-70px;
        }
      }
    
</style>`;

        $("head").append(idpBtnCSS);
        $("head").append(fontFaceCSS);
        let s = `<link data-stencil-stylesheet href="https://cdn11.bigcommerce.com/s-pqcep6tgku/stencil/d8819c60-d325-0139-0612-2a6a5a8672e9/e/85c3de40-ce60-0139-1e26-2646d15273da/css/theme-babdc9b0-d329-0139-1e5b-3a208d481fb5.css" rel="stylesheet">type="text/css" media="all" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />    
`;

        $("head").append(s);

        console.log("false");
        let errorMessage = $.trim($(".errorMessage").text());
        let actionMessage = $.trim($(".actionMessage").text());

        let newError = `<div class="alertBox alertBox--error">
    <div class="alertBox-column alertBox-icon">
        <icon glyph="ic-error" class="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></icon>
    </div>
    <p class="alertBox-column alertBox-message">
        <span id="alertBox-message-text">` +
            errorMessage +
            `</span>
        </p>
    </div>`;

        let successMessage = `
    <div class="alertBox alertBox--success"">
    <div class="alertBox-column alertBox-icon">
        <icon glyph="ic-error" class="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></icon>
    </div>
    <p class="alertBox-column alertBox-message">
        <span id="alertBox-message-text">` +
            actionMessage +
            `</span>
        </p>
    </div>`;

        // $(newError).insertAfter(".alert");
        // $(".alert").remove();
        var alert = $(".alert");
        $("#login-wrapper").prepend(alert);


        var navBar = `<div class="nav" id="nav">
        <div class="nav__inner">
            <div class="nav__logo">
                <a href="` + host + `/">
                    <img class="nav__logo--white" loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/logo.svg">
                </a>
                <a href="` + host + `/">
                    <img class="nav__logo--black" loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/logo-black.svg">
                </a>
            </div>
            <div class="nav__links">
                <div class="nav__link menu-hidden-mobile">
                    <a href="` + host + `/loreone/">LoreOne</a>
                </div>
                <div class="nav__link menu-hidden-mobile">
                    <a href="` + host + `/sustainability/">Sustainability</a>
                </div>
                <div class="nav__link menu-hidden-mobile">
                    <a href="` + host + `/about/">About</a>
                </div>
                <li class="nav__link menu-hidden-mobile">
                    <a href="` + signinURL + `" aria-label="Account" class="active">
                           Account
                    </a>
                </li>
                <div class="nav__link">
                    <a href="` + host + `/loreone-founders-edition/" class="button1 button--transparent" id="order-now-btn">Order Now</a>
                </div>
            </div>
            <button class="nav__hamburger nav__hamburger--white" id="hamburger-white">
                <img loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/hamburger.svg">
            </button>
            <button class="nav__hamburger nav__hamburger--black" id="hamburger-black">
                <img loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/hamburger-black.svg">
            </button>
        </div>
    </div>
    <div class="menu hidden" id="menu">
        <div class="menu__inner">
            <div class="menu__nav">
                <div class="menu__logo">
                    <a href="/">
                        <img loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/logo.svg">
                    </a>
                </div>
                <div class="menu__close">
                    <button id="close-hamburger">
                        <img loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/close.svg">
                    </button>
                </div>
            </div>
            <div class="menu__links">
                <div class="menu__link">
                    <a href="/loreone/">LoreOne</a>
                </div>
                <div class="menu__link">
                        <a href="/sustainability/">Sustainability</a>
                </div>
                <div class="menu__link">
                    <a href="/about/">About</a>
                </div>
                <li class="menu__link">
                    <a href="/account.php" aria-label="Account" class="menu__link--active">
                        Account
                    </a>
                </li>
                <br>
                <div class="menu__link">
                        <a href="/loreone-founders-edition/" class="button" id="order-now-btn">Order Now</a>
                </div>
            </div>
        </div>
    </div>`;

        $(navBar).insertBefore("#loading_image");


        $("#hamburger-black,#hamburger-white").click(function() {
            $("#menu").removeClass("hidden");
        });
        $("#close-hamburger").click(function() {
            $("#menu").addClass("hidden");
        });
        $("br").remove();

        $("input").removeAttr("placeholder").addClass("form-input");
        $("#loginbutton").removeAttr("style");
        $("#loginbutton").parent("div").removeAttr("class").addClass("form-actions");
        $("#loginbutton").removeClass().addClass("button btn-signin button--primary");

        $(".btn-link").parent().remove();
        var action = $('form').attr('action');
        console.log(action);
        var welcome = `<p style="font-family: NeueMontreal-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;font-size:30px;margin-bottom:18px">Welcome Back</p>`;



        if (action == '/moas/idplogin') {

            $(".form").addClass("newf");
            $(".form").prepend(welcome);
            var sociallogin = `
        <div id="social">
            <div class="line" style="text-align:center;">
                <label class="form-label">Or Login with</label>
            </div>
            <div class="social-login">
                <a href="https://drakelabs.xecurify.com/moas/broker/login/jwt/255124/google_oauth?client_id=36ixwtrlwzj2vf6ta3rioleg9497iby&redirect_uri=https://drakelabsstaging.mybigcommerce.com/login/token/"  class="login-with-google-btn" >Sign in with Google</a>
                <a href="https://drakelabs.xecurify.com/moas/broker/login/jwt/255124/appleid_oauth?client_id=36ixwtrlwzj2vf6ta3rioleg9497iby&redirect_uri=https://drakelabsstaging.mybigcommerce.com/login/token/" class="apple" id="apple" ><i class="fa fa-apple" style="padding-right: 10px;float: left;
                padding-left: 10px;font-size: 26px;" aria-hidden="true"></i><span>Sign in with Apple</span></a>
            </div>
         </div>`;
            $(".login-form").append(sociallogin);
            $("a[href*='/moas/redirecttoidp'").remove();
            $("#loginbutton").val("Sign in");

        }
        if (action == '/moas/userlogin') {
            $("body").hide();
            window.location.href = signinURL;

        }
        if (!$("#inline-registration").length) {

            var signInHeader = '<h1 class="" id="signin">&nbsp;</h1>';
            var forgetPass = '<h2 class="page-heading">Change Password</h2>';
            var resetpassword = '<h2 class="page-heading">Reset Password</h2>';

            $(signInHeader).insertBefore("#login-wrapper");

            $(".row").removeClass("row");
            $("#login-body>div").addClass("login");
            $("#login-wrapper").removeAttr("style");
            $("#login-wrapper").addClass("login-row");

            $("#enduserloginform").addClass("login-form form");

            $("#userName").removeClass().addClass("form-field form-field--input form-field--inputEmail");
            $("#userName").prepend('<label class="form-label" for="login_email">Email Address</label>');
            $("#passwordspan").prepend('<label class="form-label" for="login_email">Password</label>');
            $("#passwordspan").append(`<a href=" ` + forgotPassURL + `" style="color:#46c5e2;font-family: sans-serif;font-size: 15px;position:absolute;right:32px;top:35px;">I forgot?</a>`);
            // $(".form-inline").remove();

            // Social login btn
            let googleBtn = $("#idpId-" + googleBtnId).find("a");
            googleBtn.addClass("google-btn");
            let googleBtnHtml = `<i class="fa fa-google fa-fw"></i>` + googleBtn.find("button").text();
            googleBtn.find("button").remove();
            googleBtn.append(googleBtnHtml);


            $("#loginbutton").parent("div").append('<a class="forgot-password" style="margin-top:10px;color:#46c5e2;text-align:center" href="' + forgotPassURL + '">Forgot your password?</a>');

            let registrationText = `<div class="new-customer">
            <div class="panel">
                <div class="">
                    <h2 class="panel-title">New Customer?</h2>
                </div>
                <div class="">
                    <br>
                    <h2 class="" style="font-size: 24px;">Create an account with us and you'll be able to:</h2>
                    <br>
                    <ul class="new-customer-fact-list">
                        <li class="new-customer-fact">Check out faster</li>
                        <li class="new-customer-fact">Save multiple shipping addresses</li>
                        <li class="new-customer-fact">Access your order history</li>
                        <li class="new-customer-fact">Track new orders</li>
                        <li class="new-customer-fact">Save items to your Wish List</li>
                    </ul>
                    <br>
                    <a href="` + signupURL + `"><button class="button button--primary " style="margin-top: 35px;margin-left: -10px;">Create Account</button></a>
                </div>
            </div>
        </div>`;
            $(registrationText).insertAfter(".login-form");
            $(".login").removeClass();

            if (action == 'resetuserpassword') {
                $(".custom-button").hide();
                var pass = `<p style="color:#fff">Fill in your email below to request a new password. An email will be sent to the address below containing a link to verify your email address.
            <br><br>
            Email Address</p>`;
                var forgotPassBtn = `<div style="text-align:center;margin-top:40px"><a href="` + signinURL + `" style="color:#fff;">Or Cancel</a></div>`;
                $("#signin").hide();
                $(".new-customer").hide();
                $(".g-recaptcha").remove();
                var btn = `<button class="g-recaptcha btn btn-primary btn-block custom-button button button--primary" data-sitekey="6LfNERoUAAAAAE_mVWEgyvw7VPLlHEDQxa0x5p8j" data-callback="resetPasswordForm" style="margin-top: 30px;">Reset Password</button>`;
                $(resetpassword).insertBefore("#login-wrapper");
                $(".g-recaptcha").addClass("button button--primary");
                $(".g-recaptcha").removeAttr("style");
                $(".g-recaptcha").css({ "margin-top": "30px" });
                $("#login-wrapper").removeClass();
                $("#login-wrapper").parent().removeClass();
                $("#login-wrapper").parent().addClass("account account--fixedSmall");
                $("#userform").removeClass();
                $('h3').remove();
                $("#userform").prepend(pass);
                $(".username-custom").append(btn);
                $("#username").parent().removeClass();
                $("#username").parent().addClass("form-prefixPostfix wrap form-field--error");
                $(".g-recaptcha").removeAttr("style");
                $(".g-recaptcha").css({ "margin-left": "10px" });
                $("#userform").append(forgotPassBtn);


            }
            if (action == 'updateuserpassword') {
                $(".panel").hide();
                var pass = `<p style="color:#fff">Passwords must be at least 7 characters and contain both alphabetic and numeric characters.</p>`;
                $("#login-body").children().removeClass();
                $("#login-body").children().addClass("account account--fixedSmall");
                $("#login-wrapper").prepend(pass);
                $("#signin").hide();
                $(forgetPass).insertBefore("#login-wrapper");
                $(".g-recaptcha").addClass("button button--primary");
                $(".g-recaptcha").removeAttr("style");
                $("body").removeAttr("style");
                $("#password").parent().addClass("col-md-6");
                $(".g-recaptcha").css({ "margin-top": "30px" });
                $(".alertBox").parent().remove();

                $("#submit").removeAttr("style");
                $("#submit").addClass("button button--primary");
                $("#submit").parent().addClass("form-action");

                $(".form-action").css({ "text-align": "center" });
                $("#submit").removeClass("btn btn-primary btn-block form-input");
            }
        } else {

            var singUpHeader = '<h1 class="page-heading">New Account</h1>';
            $("#inline-registration").prepend(singUpHeader);
            $(".container-fluid").removeClass().addClass("account account--fixed");
            $("span.red").remove()

            $("#inline-registration").removeClass().addClass("account-body").removeAttr("style");
            $("form").removeClass().addClass("form");
            $(".row").removeClass().addClass("form-row form-row--half");
            $(".col-md-6,.col-md-3").removeClass().addClass("form-field form-field--input form-field--inputText");
            if ($(".form-field input").attr("required") !== undefined)
                $(".form-field p").addClass("form-label").append("<small>Required</small>");
            $(".hide").css("display", "none");
            $("select").addClass("form-select");

            $("span.red").remove();
            ($(".form-actions").parent()).insertAfter(".form-row");

        }

        var footer = `<div class="footer">
        <div class="footer__inner">
            <div class="footer__content">
                <div class="footer__logo">
                    <img class="footer__logo--img" loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/logo.svg">
                </div>
                <div class="footer__newsletter">
                </div>
                
                <div class="footer__socials">
                    <div>
                        <a class="footer__socials--link" href="https://www.instagram.com/lorecycle/" target="_blank" rel="noopener">
                            instagram
                        </a>
                        <a class="footer__socials--link" href="https://www.facebook.com/lorecycle" target="_blank" rel="noopener">
                            facebook
                        </a>
                    </div>
                </div>
                <div class="footer__infos">
                    <div class="footer__contacts">
                        <div class="footer__contacts__item">
                            Media Inquiries: <a class="link link--blue" href="mailto:press@lore.cc">press@lore.cc</a>
                        </div>
                        <div class="footer__contacts__item">
                            General Contact: <a class="link link--blue" href="mailto:info@lore.cc">info@lore.cc</a>
                        </div>
                        <div class="footer__contacts__item">
                            Dealer inquiries: <a class="link link--blue" href="mailto:dealers@lore.cc">dealers@lore.cc</a>
                        </div>
                    </div>
                    <div class="footer__links">
                        <div>
                            <a href="https://lore.cc/privacy/" class="link--blue">Privacy Policy</a>
                        </div>
                        <div>
                            <a href="https://lore.cc/terms/" class="link--blue">Term &amp; Conditions</a>
                        </div>
                    </div>
                    <div class="footer__copyright">
                        ©Lore 2021
                    </div>
                </div>
                <div class="footer__sponsor">
                    <div class="footer__sponsor__label">Powered by</div>
                        <a href="https://morphic.me/" class="footer__sponsor__logo" target="_blank">
                            <img loading="lazy" src="https://cdn11.bigcommerce.com/s-pqcep6tgku/content/images/morphic.svg">
                        </a>
                </div>
            </div>
        </div>
    </div>`;
    };
    $("body").append(footer);
    $("body").show();
});