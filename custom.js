$(function() {
    if (window.location.href.indexOf("enduserwelcome") > -1) {
        return;
    } else {
        console.log("Script added");
        var signupURL = window.location.origin + "/moas/idp/usersignup";
        var forgotPassURL = window.location.origin + "/moas/idp/resetpassword";
        var googleBtnId = '86';
        $('link[rel=stylesheet][href*="login"]').remove();
        $("hr").remove();
        var f = $(".login-form").attr("action");
        $("#login-header,.login-header").remove();
        $("#loading_image").hide();
        $(".custom-title").remove();
        if ($(".login-form").attr("action") == "resetuserpassword") {
            console.log("reset ");

        }
        $("br").remove();
        let fonts = ``;
        let links = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" media="screen" href="https://d33z9r12iu5vuo.cloudfront.net/9.582.006/application.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />  `;
        let customCss = `<style>
  .logo__brand {
      width: 161px;
      background-image: url("https://learnupon.s3.eu-west-1.amazonaws.com/portal_images/111388/logo/header2x/MHFA_Logo.png");
      background-size: contain; }
    
    .footer-brand-logo {
      background-image: url("https://d33z9r12iu5vuo.cloudfront.net/9.582.006/images/logo-squared-default-2x.png");
      background-size: contain; }
    
    .integration-hd__logo--brand {
      background-image: url("https://d33z9r12iu5vuo.cloudfront.net/9.582.006/images/logo-squared-default-2x.png");
      background-color: #ffffff; }
    
    @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1300px), only screen and (min--moz-device-pixel-ratio: 2) and (min-width: 1300px), only screen and (-o-min-device-pixel-ratio: 2 / 1) and (min-width: 1300px), only screen and (min-device-pixel-ratio: 2) and (min-width: 1300px), only screen and (min-resolution: 192dpi) and (min-width: 1300px), only screen and (min-resolution: 2dppx) and (min-width: 1300px) {
      /* Large screen, retina, stuff to override above media query */
      .logo__brand {
        background-image: url("https://learnupon.s3.eu-west-1.amazonaws.com/portal_images/111388/logo/header2x/MHFA_Logo.png");
        background-size: contain; }
    
      .footer-brand-logo {
        background-image: url("https://d33z9r12iu5vuo.cloudfront.net/9.582.006/images/logo-squared-default-2x.png");
        background-size: contain; } }
    @media (max-width: 767px) {
      .logo__brand {
        background-image: url("https://d33z9r12iu5vuo.cloudfront.net/9.582.006/images/logo-squared-default-2x.png");
        background-size: contain;
        width: 36px; } }
    .mainheader, .main-footer, .modal-header--tos {
      background-color: #ffffff; }
    
    .main-footer svg {
      fill: #414141; }
    
    body {
      background-color: #f2f2f2 !important; 
  }
    
    .lu-slider-inner, .image-banner-wrap {
      background-color: #f2f2f2; }
    
    .gs-wrap input.search {
      border: 1px #ccc solid; }
    
    .header div.mainheader {
      border-bottom: 1px #ccc solid; }
    
    .spinner-wrap {
      background: rgba(242, 242, 242, 0.7); }
    
    .header-color-icon, .breadcrumb li a {
      color: #414141; }
    
    .gravatar--bdr, .header-color-icon .avatar-initials-small, .header-color-icon .avatar {
      border: 2px solid;
      border-color: #414141; }
    
    .header-btn:hover, .open .header-btn {
      background: #d9d9d9; }
    
    button.header-btn--usr-settings:hover .gravatar,
    button.header-btn--usr-settings:hover .avatar,
    button.header-btn--usr-settings:hover .avatar-initials-smal {
      box-shadow: 0 0 0px 5px #d9d9d9; }
    
    .copy-right,
    .footer-text-color a,
    footer.main-footer .main-footer__copy-right,
    footer.main-footer .main-footer__links.footer-text-color a {
      color: #414141; }
    
    .footer-text-color a:hover,
    footer.main-footer .main-footer__links.footer-text-color a:hover {
      color: black; }
    
    button.icons-search.active {
      color: #EA5E29; }
    
    .language-list a:hover {
      color: #fff;
      background-color: #EA5E29; }
    
    calendar > div.week > span.day.selected {
      color: #fff;
      background-color: #EA5E29; }
    
    a.sub-nav__link.active, a.sub-nav__link.active:hover {
      color: #EA5E29; }
      a.sub-nav__link.active:focus:not(.focus-visible), a.sub-nav__link.active:active:not(.focus-visible), a.sub-nav__link.active:active:focus:not(.focus-visible), a.sub-nav__link.active:hover:focus:not(.focus-visible), a.sub-nav__link.active:hover:active:not(.focus-visible), a.sub-nav__link.active:hover:active:focus:not(.focus-visible) {
        border-color: #EA5E29; }
      a.sub-nav__link.active:before, a.sub-nav__link.active:hover:before {
        background: #EA5E29; }
    
    .btn-theme, .btn--theme, .active .outline, .rounded-btn, .btn-xs-white.active, .step.active {
      color: #fff !important;
      background-color: #EA5E29 !important; }
      .btn-theme:hover, .btn-theme:focus, .btn--theme:hover, .btn--theme:focus, .active .outline:hover, .active .outline:focus, .rounded-btn:hover, .rounded-btn:focus, .btn-xs-white.active:hover, .btn-xs-white.active:focus, .step.active:hover, .step.active:focus {
        color: #fff !important;
        background-color: #e34f16 !important; }
      .btn-theme:focus, .btn--theme:focus, .active .outline:focus, .rounded-btn:focus, .btn-xs-white.active:focus, .step.active:focus {
        color: #fff !important;
        background-color: #cc4714 !important; }
    
    .btn-backend {
      color: #fff !important;
      background-color: #EA5E29 !important;
      padding: 6px 18px;
      font-size: 12px;
      line-height: 1.5;
      border: none;
      font-weight: 500;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block; }
    
    .header-tabs .nav-tabs.nav-justified > .active > a, .header-tabs .nav-tabs.nav-justified > .active > a:hover {
      color: #EA5E29; }
    
    .profile-image-hover {
      color: #fff !important;
      background-color: rgba(234, 94, 41, 0.9) !important; }
    
    .has-image {
      background: #EA5E29; }
    
    .step.active {
      border-color: #EA5E29; }
    
    .lu-count-btn.is-active p, .lu-count-btn.is-active .lar-num, .lu-count-btn.is-active:hover p {
      color: #fff; }
    
    .tab-btn--is-active .tab-btn__ico, .tab-btn--is-active .tab-btn__num, .tab-btn--is-active .tab-btn__hdg, .tab-btn--is-active:hover .tab-btn__ico, .tab-btn--is-active:hover .tab-btn__num, .tab-btn--is-active:hover .tab-btn__hdg {
      color: #fff; }
    
    a, .link {
      color: #EA5E29; }
      a:hover, a:focus, .link:hover, .link:focus {
        color: #EA5E29; }
      a:focus, .link:focus {
        outline: none;
        box-shadow: 0 0 2px 3px #EA5E29; }
    
    .before-after-theme::after, .before-after-theme::before {
      background-color: #EA5E29; }
    
    .def-focus:focus, .def-focus:active, .def-focus:active:focus,
    .ws-popover button:focus,
    .ws-popover button:active,
    .ws-popover button:active:focus,
    .ws-popover-opener:focus,
    .ws-popover-opener:active,
    .ws-popover-opener:active:focus {
      box-shadow: 0 0 2px 3px #EA5E29;
      outline: none; }
    
    .btn-theme:focus, .btn-theme:active, .btn-theme:active:focus, .btn-default:focus, .btn-default:active, .btn-default:active:focus {
      background: #666666;
      color: #ffffff;
      border-color: #ffffff !important;
      outline: none;
      box-shadow: 0 0 2px 2px #EA5E29; }
    
    .btn--theme:focus, .btn--theme:active, .btn--theme:active:focus, .btn--default:focus, .btn--default:active, .btn--default:active:focus, .btn--success:focus, .btn--success:active, .btn--success:active:focus, .btn--danger:focus, .btn--danger:active, .btn--danger:active:focus, .btn--ghost:focus, .btn--ghost:active, .btn--ghost:active:focus, .btn--white:focus, .btn--white:active, .btn--white:active:focus {
      outline: none;
      box-shadow: 0 0 2px 2px #EA5E29; }
    
    .def-focus:focus, .def-focus:active, .def-focus:active:focus {
      box-shadow: 0 0 2px 3px #EA5E29;
      outline: none; }
    
    .card-btn > i, .card-btn:hover, .card-btn lu-icon {
      color: #EA5E29; }
    .card-btn:focus, .card-btn:active, .card-btn:active:focus {
      box-shadow: 0 0 2px 3px #EA5E29;
      outline: none; }
    
    .btn-flat {
      color: #EA5E29; }
      .btn-flat > i {
        color: #cccccc; }
      .btn-flat:hover {
        color: #EA5E29; }
      .btn-flat:focus, .btn-flat:active, .btn-flat:active:focus {
        outline: none;
        box-shadow: 0 0 2px 2px #EA5E29, inset 0 0 0 1px #ffffff; }
    
    .btn-theme:focus:not(.focus-visible), .btn-theme:active:not(.focus-visible), .btn-theme:active:focus:not(.focus-visible), .def-focus:focus:not(.focus-visible), .def-focus:active:not(.focus-visible), .def-focus:active:focus:not(.focus-visible) {
      border-color: #EA5E29;
      outline: none;
      box-shadow: none; }
    
    .skiplink:focus {
      background: #EA5E29;
      box-shadow: 0 0 2px 2px #EA5E29, inset 0 0 0 1px #ffffff;
      color: #fff !important;
      outline: none;
      opacity: 1; }
    
    .like-btn--active:before {
      border-color: #EA5E29; }
    .like-btn--active .like-btn__lines span {
      background: #EA5E29; }
    .like-btn--active i, .like-btn--active:hover i {
      color: #EA5E29; }
    
    .form-control:focus, .lu-typeahead.in-focus, .stripe-el-focus, .search:focus, .lu-select__control.lu-select__control--is-focused, .typeahead.typeahead--is-focused {
      border-color: #EA5E29 !important;
      box-shadow: 0 0 2px 1px #EA5E29 !important; }
    
    .gs-wrap input.search:focus {
      box-shadow: 0 0 2px 1px #EA5E29, inset 0 0 1px 1px #EA5E29; }
    
    .switch:focus {
      outline: none;
      box-shadow: 0 0 2px 3px #EA5E29, inset 0 0 0 1px #ffffff; }
    
    .switch-info:hover {
      color: #EA5E29; }
    
    .link-c,
    .btn-switch.active,
    #backtop button,
    .backtop i,
    .scroll-up.breadcrumb-bg .breadcrumb a,
    .scroll-down .breadcrumb a,
    .scroll-down .breadcrumb i,
    .scroll-down .breadcrumb li + li:before,
    .scroll-up.breadcrumb-bg .breadcrumb li + li:before {
      color: #EA5E29; }
      .link-c:hover,
      .btn-switch.active:hover,
      #backtop button:hover,
      .backtop i:hover,
      .scroll-up.breadcrumb-bg .breadcrumb a:hover,
      .scroll-down .breadcrumb a:hover,
      .scroll-down .breadcrumb i:hover,
      .scroll-down .breadcrumb li + li:before:hover,
      .scroll-up.breadcrumb-bg .breadcrumb li + li:before:hover {
        color: #EA5E29; }
    
    .card section.my-position {
      border-color: #EA5E29; }
    
    .link-bg,
    .lu-big-btn:hover,
    .lu-big-btn:focus,
    .lu-big-btn.is-active,
    .white-btn:hover,
    .white-btn.is-active,
    .dots a.active,
    .tab-btn--is-active,
    .lu-count-btn.is-active {
      background: #EA5E29; }
      .link-bg:hover,
      .lu-big-btn:hover:hover,
      .lu-big-btn:focus:hover,
      .lu-big-btn.is-active:hover,
      .white-btn:hover:hover,
      .white-btn.is-active:hover,
      .dots a.active:hover,
      .tab-btn--is-active:hover,
      .lu-count-btn.is-active:hover {
        background: #EA5E29; }
      .link-bg:focus, .link-bg:active, .link-bg:active:focus,
      .lu-big-btn:hover:focus,
      .lu-big-btn:hover:active,
      .lu-big-btn:hover:active:focus,
      .lu-big-btn:focus:focus,
      .lu-big-btn:focus:active,
      .lu-big-btn:focus:active:focus,
      .lu-big-btn.is-active:focus,
      .lu-big-btn.is-active:active,
      .lu-big-btn.is-active:active:focus,
      .white-btn:hover:focus,
      .white-btn:hover:active,
      .white-btn:hover:active:focus,
      .white-btn.is-active:focus,
      .white-btn.is-active:active,
      .white-btn.is-active:active:focus,
      .dots a.active:focus,
      .dots a.active:active,
      .dots a.active:active:focus,
      .tab-btn--is-active:focus,
      .tab-btn--is-active:active,
      .tab-btn--is-active:active:focus,
      .lu-count-btn.is-active:focus,
      .lu-count-btn.is-active:active,
      .lu-count-btn.is-active:active:focus {
        border-color: #ffffff;
        outline: none;
        box-shadow: 0 0 2px 3px #EA5E29, inset 0 0 0 1px #ffffff; }
    
    .lu-big-btn .icon-svg-bg-2 {
      fill: #fff; }
    .lu-big-btn:hover .icon-svg-fill, .lu-big-btn.is-active .icon-svg-fill {
      fill: #EA5E29; }
    
    .lu-typeahead.in-focus, .as-popover .typeahead-list {
      border-color: #EA5E29; }
    
    .gray-icon {
      color: #cccccc; }
      .gray-icon:hover {
        color: #969696; }
    
    .card > header > span,
    .card-wrap-search,
    .contrast-bg-color,
    .collection-title,
    .card-title,
    .crd-tl,
    .breadcrumb li a,
    .breadcrumb li i,
    .breadcrumb li + li:before {
      color: #8d8d8d; }
    
    option:not(:checked) {
      background-color: #FFF; }
    
    .facebook {
      color: #3B5998; }
    
    .google {
      color: #d62d20; }
    
    .lu-btn:hover p {
      color: #EA5E29; }
    
    .gray-color {
      color: #969696; }
      .gray-color:hover, .gray-color:focus {
        color: #969696; }
    
    .a11y-foc-area + section {
      -webkit-animation: fade-out-bg 1s linear;
      -moz-animation: fade-out-bg 1s linear;
      animation: fade-out-bg 1s linear; }
    
    @keyframes fade-out-bg {
      0% {
        background: #EA5E29; }
      100% {
        background: transparent; } }
    #backtop button:focus:focus, #backtop button:focus:active, #backtop button:focus:active:focus, lu-scroll-top > .backtop.backtop--show:focus, lu-scroll-top > .backtop.backtop--show:active, lu-scroll-top > .backtop.backtop--show:active:focus {
      outline: none;
      border: 3px solid #ffffff;
      box-shadow: 0 0 2px 4px #EA5E29; }
      .login-wrap>div {
        display: inline-block !important;
        min-width: 860px !important;
        text-align: left !important;
      }
  </style>`;
        $('head').append(fonts);
        $('head').append(links);
        $('head').append(customCss);
        $('link[rel*="shortcut"]').remove();


        var action = $('form').attr('action');
        console.log(action);
        if (action == '/moas/validateuseronboard' || action == '/moas/validateuser') {
            var body = `
        <div class="col-center login-wrap">
        <div class="card login">
          <section>
              <div class="row">
                <header class="mainheader login-header">
                    <!-- Logo-->
                    <a ng-non-bindable="" href="/users/sign_in" class="logo__brand logo__brand--center" aria-label="MHFA Logo"></a>
                </header>
                <!--Login form-->
                <div class="col-xs-12 col-sm-12 p-24 col-md-12">
                    <h4 class="">Confirm Your Account</h4>
                    <br>
                    <div class="error"></div>
                    <div class="form-group">
                          <label for="user_login">
                          OTP
                          </label>
                          <input class="form-control" type="email" placeholder="Enter One Time Passcode here" autocomplete="email" name="user[login]" id="user_login">
                          <input type="hidden" name="struts.token.name" value="token" />
                          <input type="hidden" name="token" value="" id="tokenval" />
                          <input type="hidden" name="authenticationWrapper.txId" value="" id="authenticationWrapper_txId"/>
                          <input type="hidden" name="authenticationWrapper.authType" value="EMAIL" id="authenticationWrapper_authType"/> 
                          <input type="hidden" name="mode" value="" id="mode"/>
                  </div>
                      <div class="row" class="text-align:center">
                        
                          <div class="col-md-2 col-md-offset-4">
                      
                        <button name="commit" id="verify" class="btn btn-theme btn-block btn-lg my-xs-12">verify</button>
                          </div>
                          <div class="col-md-2">
                            <a name="commit" id="reset" class="btn btn-default btn-block btn-lg my-xs-12" href="/moas/login" >Cancel</a>
                          </div>
                      </div>
                    <div class="login-action">
                    <br>
                      <div class="wrap" style="text-align: center;">
                        
                            <p>Did Not Recieve a Passcode?</p>
                            <a href="" style="color:black;font-weight:0">Click here to send another one.</a>
                    
                      </div>
                    </div>
                </div>
                <!--End Login form-->
                <!-- Custom welcome message -->
                <!-- End Custom welcome message -->
              </div>
          </section>
        </div>
      </div>
        `;
            $(".modal-backdrop").remove();
            $(".modal").prepend(body);
            var alert = $(".alert");
            $(".error").append(alert);
            $(".close").css({
                "position": "relative",
                "top": "-2px",
                "right": "0px",
                "color": "inherit"
            });
            $("#verify").click(function() {
                $("#otpToken").val($("#user_login").val());
                $("#validateIdentityForm").submit();
            })
            $(".modal-dialog").hide();
        }

        if (action == 'login' || action == '/moas/validatepassword') {
            var nav = ``;
            var body = `
        <div class="col-center login-wrap">
        <div>
           <div class="card login">
              <section>
                 <div class="row">
                    <header class="mainheader login-header">
                       <!-- Logo-->
                       <a ng-non-bindable="" href="/users/sign_in" class="logo__brand logo__brand--center" aria-label="MHFA Logo"></a>
                    </header>
                    <!--Login form-->
                    <div class="col-xs-12 col-sm-12 p-24  col-md-6 col-md-push-6 signin">
                        <form class="login-form form"  action="` + action + `" method="post" autocomplete="off">
                          <input name="utf8" type="hidden" value="✓" autocomplete="off"><input type="hidden" name="authenticity_token" value="KvrlIqLD5kKVp4ANTpoMcfmo5mwjnBtHZRLOaQClMypkV7y3wtxt1cuIEwQFZaJiiV0qKradU5d5PkXJiM5Thg==" autocomplete="off">
                          <h3 class="fs-h3" ng-non-bindable="" style="text-align:center">
                             <b>Welcome to MHFA Connect!</b><br>
                             Instructor and Coordinator Login!
                          </h3>
            
                          <div class="error">
                          </div>
                          <div class="form-group" ng-non-bindable="" id="email">
                             <label for="user_login">Email</label>
                          </div>
                          <div class="form-group" ng-non-bindable="" id="password">

                          </div>
                        
                          <span ng-non-bindable="">
                          </span>
                          <input type="submit" class="btn btn-block btn-theme btn-lg my-xs-12" value="Instructor and Coordinator Login">
                          
                          </form>
                       <div class="login-action">
                          <div class="row">
                             <!--Sign up text and btn-->
                             <!--End Sign up text and btn-->
                             <!-- Added condition that will hide the "Forgot password?" hyperlink when a user accepts an invite from an email link & gets to this page -->
                             <!--Forgot password-->
                             <p class="col-xs-12 col-sm-12 forgot-pass pull-right"><a href="/moas/idp/resetpassword">Forgot password?</a></p>
                             <!--End Forgot password-->
                          </div>
                          <!--Social login-->
                          <div class="social-login mt-xs-12">
                             <p><b>Applying for an Instructor Training?</b></p>
                             <p> Click the button below if you are a NEW Instructor Training applicant </p>
                             <a href="/moas/idp/usersignup">
                             <img alt="Single Sign On with Stage_MHFA_Connect" class="ng-non-bindable" src="https://www.mentalhealthfirstaid.org/wp-content/uploads/2021/10/MHFA_Logo_10-21.png">
                             </a>
                          </div>
                          <!--End Social login-->
                       </div>
                    </div>
                    <!--End Login form-->
                    <!-- Custom welcome message -->
                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-pull-6">
                       <div class="p-24 login-message" ng-non-bindable="">
                          <p style="text-align:center;"><span style="font-size:18px;"><strong>Identify. Understand. Respond.</strong></span></p>
                          <p style="text-align:center;">&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>Our Instructors and Coordinators are the heart of Mental Health First Aid (MHFA).
                          Your commitment helps countless people gain the knowledge and tools to
                          identify, understand and respond to those experiencing a mental health or
                          substance use issue.<br></p>
                          <br>
                          <p>
                          If you need to reset your password, click Forgot Password? below the sign-in
                          button, and tollow the prompts.</p>
                          <br>
                          <p>
                          If you are a First Aider, visit <a href="https://connect.mentalhealthfirstaid.org" style="color:black">https://connect.MentalHealthFirstAid.org</a> to access
                          your MHFA Connect account.
                          <br><br>Thank you for choosing to #BeTheDifference!</p>
                       </div>
                    </div>
                    <!-- End Custom welcome message -->
                 </div>
              </section>
           </div>
        </div>
     </div>`;
            var footer = ``;
            var alert = $(".alert");
            $(nav).insertBefore("#loading_image");
            $(body).insertBefore(".container-fluid");
            $("#signin").click(function() {
                $("#username").val($("#user_login").val());
                console.log("Submitted");
                $(".form").submit();
            });
            $(".error").append(alert);
            $(".close").hide();
            $("#login-wrapper").hide();
            var username = $("#username");
            var password = $("#plaintextPassword");
            $("#email").append(username);
            $("#password").append(password);
            var pass = ` <label for="user_login">Password</label>`;
            $(pass).insertBefore("#plaintextPassword");

            $(footer).insertAfter("#login-body");

        }
        if (action == '/moas/idplogin') {
            var nav = ``;
            var body = `
        <div class="col-center login-wrap">
        <div>
           <div class="card login">
              <section>
                 <div class="row">
                    <header class="mainheader login-header">
                       <!-- Logo-->
                       <a ng-non-bindable="" href="/users/sign_in" class="logo__brand logo__brand--center" aria-label="MHFA Logo"></a>
                    </header>
                    <!--Login form-->
                    <div class="col-xs-12 col-sm-12 p-24  col-md-6 col-md-push-6 signin">
                     
                          <input name="utf8" type="hidden" value="✓" autocomplete="off"><input type="hidden" name="authenticity_token" value="KvrlIqLD5kKVp4ANTpoMcfmo5mwjnBtHZRLOaQClMypkV7y3wtxt1cuIEwQFZaJiiV0qKradU5d5PkXJiM5Thg==" autocomplete="off">
                          <h3 class="fs-h3" ng-non-bindable="" style="text-align:center">
                             <b>Welcome to MHFA Connect!</b><br>
                             Instructor and Coordinator Login!
                          </h3>
            
                          <div class="error">
                          </div>
                          <div class="form-group" ng-non-bindable="">
                             <label for="user_login">Email</label>
                             <input class="form-control user-success" autofocus="autofocus" type="email" autocomplete="email" placeholder="Email" name="user[login]" id="user_login">
                          </div>
                          <div class="form-group">
                             <label for="user_password">
                             Password
                             </label>
                             <input class="form-control" autocomplete="current-password" placeholder="Password" type="password" name="user[password]" id="user_password">
                          </div>
                          <span ng-non-bindable="">
                          </span>
                          <button id="signin" type="button" name="commit" class="btn btn-block btn-theme btn-lg my-xs-12">Instructor and Coordinator Login</button>
                       <div class="login-action">
                          <div class="row">
                             <!--Sign up text and btn-->
                             <!--End Sign up text and btn-->
                             <!-- Added condition that will hide the "Forgot password?" hyperlink when a user accepts an invite from an email link & gets to this page -->
                             <!--Forgot password-->
                             <p class="col-xs-12 col-sm-12 forgot-pass pull-right"><a href="/moas/idp/resetpassword">Forgot password?</a></p>
                             <!--End Forgot password-->
                          </div>
                          <!--Social login-->
                          <div class="social-login mt-xs-12">
                             <p><b>Applying for an Instructor Training?</b></p>
                             <p> Click the button below if you are a NEW Instructor Training applicant </p>
                             <a href="/moas/idp/usersignup">
                             <img alt="Single Sign On with Stage_MHFA_Connect" class="ng-non-bindable" src="https://www.mentalhealthfirstaid.org/wp-content/uploads/2021/10/MHFA_Logo_10-21.png">
                             </a>
                          </div>
                          <!--End Social login-->
                       </div>
                    </div>
                    <!--End Login form-->
                    <!-- Custom welcome message -->
                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-pull-6">
                       <div class="p-24 login-message" ng-non-bindable="">
                          <p style="text-align:center;"><span style="font-size:18px;"><strong>Identify. Understand. Respond.</strong></span></p>
                          <p style="text-align:center;">&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>Our Instructors and Coordinators are the heart of Mental Health First Aid (MHFA).
                          Your commitment helps countless people gain the knowledge and tools to
                          identify, understand and respond to those experiencing a mental health or
                          substance use issue.<br></p>
                          <br>
                          <p>
                          If you need to reset your password, click Forgot Password? below the sign-in
                          button, and tollow the prompts.</p>
                          <br>
                          <p>
                          If you are a First Aider, visit <a href="https://connect.mentalhealthfirstaid.org" style="color:black">https://connect.MentalHealthFirstAid.org</a> to access
                          your MHFA Connect account.
                          <br><br>Thank you for choosing to #BeTheDifference!</p>
                       </div>
                    </div>
                    <!-- End Custom welcome message -->
                 </div>
              </section>
           </div>
        </div>
     </div>`;
            var footer = ``;
            var alert = $(".alert");
            $(nav).insertBefore("#loading_image");
            $(body).insertBefore(".container-fluid");
            $("#signin").click(function() {
                $("#username").val($("#user_login").val());
                $("input[type='password']").val($("#user_password").val());
                console.log("Submitted");
                $(".form").submit();
            });
            $(".error").append(alert);
            $(".close").hide();
            $("#login-wrapper").hide();
            $(footer).insertAfter("#login-body");
        }

        if (action == "updateuserpassword") {
            var body =
                `
        <div class="col-center login-wrap">
          <div class="card login">
            <section>
                <div class="row">
                  <header class="mainheader login-header">
                      <!-- Logo-->
                      <a ng-non-bindable="" href="/users/sign_in" class="logo__brand logo__brand--center" aria-label="MHFA Logo"></a>
                  </header>
                  
                </div>
            </section>
          </div>
        </div>`;
            $("#login-body").prepend(body);
            var confirm = $("#login-wrapper");
            $("section").append("<br>");
            $("section").append(confirm);
        }
        if (window.location.href.indexOf('updateuserpassword') > -1) {
            setTimeout(function() {
                window.location.href = "/moas/login";
            }, 2000);
        }
        if (window.location.href.indexOf('reset') > -1) {
            var body = `
        <div class="col-center login-wrap">
          <div class="card login">
            <section>
                <div class="row">
                  <header class="mainheader login-header">
                      <!-- Logo-->
                      <a ng-non-bindable="" href="/users/sign_in" class="logo__brand logo__brand--center" aria-label="MHFA Logo"></a>
                  </header>
                  <!--Login form-->
                  <div class="col-xs-12 col-sm-12 p-24 col-md-12 ">
                  <div class="error"></div>
                      <h3 class="fs-h3">Forgot Your Password</h3>
                      <div class="form-group">
                            <label for="user_login">
                            Email
                            </label>
                            <input class="form-control" type="email" placeholder="Email" autocomplete="email" name="user[login]" id="user_login">
                        </div>
                        
                        <button name="commit" id="reset" class="btn btn-theme btn-block btn-lg my-xs-12">Resend</button>
                      <div class="login-action">
                        <div class="wrap">
                            <a class="pull-left" href="/moas/login">
                              <p>Login</p>
                            </a>
                        </div>
                      </div>
                  </div>
                  <!--End Login form-->
                  <!-- Custom welcome message -->
                  <!-- End Custom welcome message -->
                </div>
            </section>
          </div>
        </div>`;
            var footer = ``;
            var alert = $(".alert");
            $(nav).insertBefore("#loading_image");
            $(body).insertBefore(".container-fluid");
            $("#reset").click(function() {
                $("#username").val($("#user_login").val());
                console.log("Submitted");
                $(".form").submit();
            });
            $(".error").append(alert);
            $(".close").hide();
            $("#login-wrapper").hide();
            $(footer).insertAfter("#login-body");
        }

        if (window.location.href.indexOf('moas/idp/usersignup') > -1 || action == '/moas/newusersignup') {
            var alert = $(".alert");
            $("#modal-body").append(alert);
            $(".modal-title").removeClass();
            $(".alert").removeClass("alert-dismissible");
            $("#inline-registration").removeAttr("style");
            var header = `
        <header class="mainheader">
          <!-- Logo-->
          <a ng-non-bindable="" href="/users/sign_in" class="logo__brand logo__brand--center" aria-label="MHFA Logo"></a>
        </header>
        <br>
        <div style="text-align: center;background-color:#f1f1f1;">
        <br>
        <h4>Please complete the form below for NEW Instructor Training Applicants.<br>
        When you are done, click the orange save button at the button of the page to create your account.
        <br>
        <br>
        </h4>
        </div>
        <div class="container">
          <p style="color: grey"><br><b>Instructor Training Type</b></p>
          <div class="mainheader" id="training_type" style="height:130px">
          </div>
        </div>
        <div class="container">
        <br>
          <p style="color:grey"><b>Basic Info</b></p>
          <div class="mainheader" id="basic" style="height:400px">

          </div>
        </div>

        <div class="container">
        <br>
          <p style="color: grey"><b>Custom User Data</b></p>
          <div class="mainheader" id="custom" style="height:1330px">
          
          </div>
        </div>



      <br><br>
        `;
            var pass_rule = `
        <div class="row">
        <br>
        <div class="col-md-1">
          &nbsp;
        </div>
          <div class="col-md-3">
            <p style="color: grey"><b><i class="fas fa-times-circle"></i> 8 Characters</b></p>
          </div>
          <div class="col-md-3">
          <p style="color: grey"><b><i class="fas fa-times-circle"></i> 1 lowercase </b></p>
          </div>
          <div class="col-md-3">
          <p style="color: grey"><b><i class="fas fa-times-circle"></i> 1 uppercase</b></p>
          </div>
          <div class="col-md-3">
          <p style="color: grey"><b><i class="fas fa-times-circle"></i> 1 Special Character(s)</b></p>
          </div>
          <div class="col-md-3">
          <p style="color: grey"><b><i class="fas fa-times-circle"></i> 1 Number </b></p>
          </div>
          
        </div>
        `;


            $(".form").prepend(header);
            var field = $("#customAttribute1").parent();
            $("#customAttribute1").parent().removeClass();
            $("#customAttribute1").parent().addClass("col-md-12");
            $("#training_type").append(field);

            var basic = $("#row2Div");
            $("#endUser_fname").parent().removeClass();
            $("#endUser_fname").parent().addClass("col-md-6");

            $("#endUser_lname").parent().removeClass();
            $("#endUser_lname").parent().addClass("col-md-6");
            var uname = $("#row1Div");
            var pass = $("#row3Div");

            var custom = $("#customAttribute2").parent().parent();
            $("#passwordDiv").append(pass_rule);
            $("<br>").insertBefore("#usernameDiv");

            $("#customAttribute2").parent().removeClass();
            $("#customAttribute2").parent().addClass("col-md-12");
            $("#customAttribute3").parent().removeClass();
            $("#customAttribute3").parent().addClass("col-md-12");
            $("#customAttribute4").parent().removeClass();
            $("#customAttribute4").parent().addClass("col-md-12");
            $("#customAttribute5").parent().removeClass();
            $("#customAttribute5").parent().addClass("col-md-12");
            $("#customAttribute6").parent().removeClass();
            $("#customAttribute6").parent().addClass("col-md-12");
            $("#customAttribute7").parent().removeClass();
            $("#customAttribute7").parent().addClass("col-md-12");

            $("#customAttribute7").parent().attr("id", "workAddress");
            $("#phoneDiv").insertAfter("#workAddress");
            $("#phoneDiv").removeClass();
            $("#phoneDiv").addClass("col-md-12");

            $("#customAttribute8").parent().removeClass();
            $("#customAttribute8").parent().addClass("col-md-12");

            $("#customAttribute9").parent().removeClass();
            $("#customAttribute9").parent().addClass("col-md-12");
            $("#customAttribute10").parent().removeClass();
            $("#customAttribute10").parent().addClass("col-md-12");
            $("#customAttribute11").parent().removeClass();
            $("#customAttribute11").parent().addClass("col-md-12");
            $("#customAttribute12").parent().removeClass();
            $("#customAttribute12").parent().addClass("col-md-12");
            $("#customAttribute13").parent().removeClass();
            $("#customAttribute13").parent().addClass("col-md-12");
            $("#customAttribute14").parent().removeClass();
            $("#customAttribute14").parent().addClass("col-md-12");
            $("#customAttribute15").parent().removeClass();
            $("#customAttribute15").parent().addClass("col-md-12");

            $("#customAttribute16").parent().removeClass();
            $("#customAttribute16").parent().addClass("col-md-12");
            $("#customAttribute17").parent().removeClass();
            $("#customAttribute17").parent().addClass("col-md-12");

            $("#custom").append(custom);
            $("#basic").append(basic);
            $("#basic").append(uname);
            $("#basic").append(pass);
            $("#loginbutton").removeClass();
            $("#loginbutton").removeAttr("style");
            $("#loginbutton").parent().css({
                "text-align": "center"
            });
            $("#loginbutton").addClass("btn btn-theme");
            $("#loginbutton").prop("value", "Save");
            var confirmpass = `<div id="confirmpass" class="col-md-12"></div>`;
            $(confirmpass).insertAfter("#row3Div");
            var confirmpass1 = $("#confirmpasswordDiv");
            $("#confirmpass").append(confirmpass1);
            var login = `<a href="moas/login"> Sign in </a>`
            $("a[href='/moas/login'").parent().addClass("login");
            $("a[href='/moas/login'").parent().text(`Already have a account?`);
            $(".login").append(login);
            if (document.getElementsByClassName("errorMessage") != null) {
                $('.alert').insertAfter('h4');
            }
            //  backup                            <img alt="Single Sign On with Stage_MHFA_Connect" class="ng-non-bindable" src="https://learnupon.s3.eu-west-1.amazonaws.com/sso_saml_login_logos/2139/small/MHFALogo.png">
            $(".login").parent().css({
                "margin-bottom": "30px"
            });

        }
    }
});