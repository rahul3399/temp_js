$(function() {
    var signupURL = window.location.origin + "/moas/idp/usersignup";
    var signinURL = window.location.origin + "/moas/idplogin";
    var forgotPassURL = window.location.origin + "/moas/idp/resetpassword";
    var host = "https://lore.cc";
    var googleBtnId = '86';
    $("link[rel='stylesheet']").remove();
    $("hr").remove();
    $("#login-header,.login-header").remove();
    $("#loading_image").hide();
    $(".custom-title").remove();
    $("body").hide();
    console.log("Script added");

    var width = $(window).width();
    var height = $(window).height();
    console.log(width, height);
    if ((width <= 641)) {
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
                font-size: 18px;
                border:1px solid #2B2B2B;
            }
            .facebook{
                background: #2B2B2B;
                color: white;
                border-radius: 10px;
                width: 50px;
                height: 48px;
                font-size: 18px;
                border:1px solid #2B2B2B;
            }
        </style>
        `;
        var logo = `
        <div style="text-align:center;">
            <img class="logo" src="https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/255124/morphic.png" alt="logo"/>
        </div>`;
        var qrbtn = `
              <div style="display:inline-block;"> 
                <button type="button" class="qr">QR Login <i class="fa fa-qrcode" aria-hidden="true"></i></button>
              </div>
        `;

        var logif = `<div id="logif" style="background-color: black; padding: 20px;margin-top:30px"></div>`;
        $(".form").prepend(logif);
        var uname = $("#userName").parent();
        var password = $("#passwordspan").parent();
        var sociallogin = `
        <div style="text-align:center;background-color:black;width:100%;" >
            <p style="color:white;font-size:18px">Or Login with</p>
            <button type="button" class="facebook" ><i class="fa fa-facebook" aria-hidden="true"></i></button>
        </div>`;

        $("#login-wrapper").append(sociallogin);
        $("head").append(style);
        $("head").append(stylesheet);
        $("#logif").append(uname);
        $("#logif").append(password);
        $("#loginbutton").parent().parent().prepend(qrbtn);
        console.log("true");
        $("body").css({
            "background-image": "url('https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/255124/morphic-banner.png')",
            "background-repeat": "no-repeat",
            "background-size": "auto"
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
            "padding": "8px 0 5px 0",
            "font-size": "16px",
            "color": "#fff"
        });

        $("#passwordspan").removeClass();
        $("#passwordspan").addClass("col-md-8");

        $("#plaintextPassword").css({
            "height": "4vh",
            "border": "0",
            "border-bottom": "1px solid #FFFFFF",
            "background": "transparent",
            "width": "100%",
            "padding": "8px 0 5px 0",
            "font-size": "16px",
            "color": "#fff"
        });
        $("#plaintextPassword").removeClass();
        $("#plaintextPassword").prop("placeholder", "Password");
        $("#passwordspan").css({
            "margin-top": "30px"
        })
        $("#loginbutton").removeAttr("style");
        $("#loginbutton").css({
            "background": "#FFFFFF",
            "border-radius": "10px",
            "width": "158px",
            "height": "48px",
            "font-size": "18px"
        });
        $("#userName").removeClass();
        $("#userName").addClass("col-md-8");
        $("#username").removeClass();
        $("#loginbutton").removeClass();

        $("#loginbutton").parent().removeClass();
        $("#loginbutton").parent().css({
            "display": "inline-block",
            "padding-left": "10px"
        });
        $("#loginbutton").parent().parent().css({
            "text-align": "center",
        })
        $("a[href='https://rahul3399.miniorange.in/moas/idp/usersignup']").remove();
        $("a[href*='moas/idp/resetpassword']").remove();
        var lernmore = `
        <div class="" style="margin-top:40px;text-align:center;">
            <p style="color:white;background-color:black;padding:15px;font-size:18px">Learn More</p>
        </div>`;
        $("#login-wrapper").append(lernmore);
        $("#login-wrapper").parent("");

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
            width:auto !important;
        }
    </style>`;
        let idpBtnCSS = `<style>
        .idp-btn {
            width : 100%;
            margin : 10px 0;
            /*padding-left: .75rem;*/
            padding-right: .75rem;
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
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #f5f5f5;
            line-height: 0.1em;
            max-width: 300px;
            margin: 35px 0;
            opacity: 0.5;
        }

        .line-innertext {
            background: black;
            padding: 3px;
        }
       
        
    </style>`;
        $("head").append(idpBtnCSS);
        $("head").append(fontFaceCSS);
        let s = `<link data-stencil-stylesheet href="https://cdn11.bigcommerce.com/s-pqcep6tgku/stencil/d8819c60-d325-0139-0612-2a6a5a8672e9/e/85c3de40-ce60-0139-1e26-2646d15273da/css/theme-babdc9b0-d329-0139-1e5b-3a208d481fb5.css" rel="stylesheet">type="text/css" media="all" />    
    `;

        $("head").append(s);

        console.log("false");
        let errorMessage = $.trim($(".errorMessage").text());
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

        $(newError).insertAfter(".alert");
        $(".alert").remove();


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
                        <a href="` + host + `/account.php" aria-label="Account" class="active">
                               Account
                        </a>
                    </li>
                    <div class="nav__link">
                        <a href="` + host + `/loreone-founders-edition/" class="button button--transparent" id="order-now-btn">Order Now</a>
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
        $("#loginbutton").removeClass().addClass("button button--primary");

        $(".btn-link").parent().remove();
        var action = $('form').attr('action');
        console.log(action);
        if (action == '/moas/userlogin') {
            $("body").hide();
            window.location.href = signinURL;
        }
        if (!$("#inline-registration").length) {

            var signInHeader = '<h1 class="page-heading" id="signin">Sign in</h1>';
            var forgetPass = '<h2 class="page-heading">Change Password</h2>';
            var resetpassword = '<h2 class="page-heading">Reset Password</h2>';

            $(signInHeader).insertBefore("#login-wrapper");

            $(".row").removeClass("row");
            $("#login-body>div").addClass("login");
            $("#login-wrapper").removeAttr("style");
            $("#login-wrapper").addClass("login-row");

            $("#enduserloginform").addClass("login-form form");

            $("#userName").removeClass().addClass("form-field form-field--input form-field--inputEmail form-field--error");
            $("#userName").prepend('<label class="form-label" for="login_email">Email Address:</label>');

            // $(".form-inline").remove();

            // Social login btn
            let googleBtn = $("#idpId-" + googleBtnId).find("a");
            googleBtn.addClass("google-btn");
            let googleBtnHtml = `<i class="fa fa-google fa-fw"></i>` + googleBtn.find("button").text();
            googleBtn.find("button").remove();
            googleBtn.append(googleBtnHtml);
            $("#enduserloginform").append('<div class="line"><span class="line-innertext">or</span></div>').append($(".idp-btn"));
            $(`<div class="idp-btn" id="idpId-88">
                <div class="col-xs-8 col-xs-offset-2">
                        <a href="/moas/redirecttoidp?idpId=86&amp;customerId=51941" class="fb-btn"><i class="fa fa-facebook fa-fw"></i> Facebook</a>
                </div>
            </div>`).insertAfter(".line");
            $("#loginbutton").parent("div").append('<a class="forgot-password" href="' + forgotPassURL + '">Forgot your password?</a>');

            let registrationText = `<div class="new-customer">
                <div class="panel">
                    <div class="panel-header">
                        <h2 class="panel-title">New Customer?</h2>
                    </div>
                    <div class="panel-body">
                        <p class="new-customer-intro">Create an account with us and you'll be able to:</p>
                        <ul class="new-customer-fact-list">
                            <li class="new-customer-fact">Check out faster</li>
                            <li class="new-customer-fact">Save multiple shipping addresses</li>
                            <li class="new-customer-fact">Access your order history</li>
                            <li class="new-customer-fact">Track new orders</li>
                            <li class="new-customer-fact">Save items to your Wish List</li>
                        </ul>
                        <a href="` + signupURL + `"><button class="button button--primary">Create Account</button></a>
                    </div>
                </div>
            </div>`;
            $(registrationText).insertAfter(".login-form");

            if (action == 'resetuserpassword') {
                var pass = `<p style="color:#fff">Fill in your email below to request a new password. An email will be sent to the address below containing a link to verify your email address.
                <br><br>
                Email Address</p>`;
                var forgotPassBtn = `<div style="text-align:center;margin-top:40px"><a href="window.history.back()" style="color:#fff;">Or Cancel</a></div>`;
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
    }


    $("body").append(footer);
    $("body").show();
});