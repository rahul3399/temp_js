$(function() {
    var signupURL = window.location.origin + "/moas/idp/usersignup";
    var signinURL = window.location.origin + "/moas/idplogin";
    var forgotPassURL = window.location.origin + "/moas/idp/resetpassword";
    $("link[rel='stylesheet'][href*='common']").remove();
    $("link[rel='stylesheet'][href*='login-style']").remove();
    $("hr").remove();
    $("#login-header,.login-header").remove();
    $("#loading_image").hide();
    $(".custom-title").remove();
    var stylesheet = `
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <style>
    @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 400;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/Overpass_Regular.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 400;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassitalic.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 100;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassthin.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 100;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassthinitalic.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 200;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassextralight.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 200;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassextralightitalic.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 300;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpasslight.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 300;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpasslightitalic.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 600;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpasssemibold.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 600;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpasssemibolditalic.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 700;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/Overpass_Bold.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 700;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassbolditalic.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 800;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassextrabold.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 800;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassextrabolditalic.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: normal;
      font-weight: 900;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassheavy.woff') format('woff');
  }
  @font-face {
      font-family: 'Overpass';
      font-style: italic;
      font-weight: 900;
      src: local('Overpass'), url('https://fonts.cdnfonts.com/s/12274/overpassheavyitalic.woff') format('woff');
  }
  
  
      body{
        font-family: Overpass !important;
      }
      .login-text{
        color: #434e58!important;
        font-size: 40px;
        margin-bottom: 2.5rem;
        text-transform: uppercase;
        text-align: center;
        font-family: MatrixII;
        font-weight: 500;
        line-height: 1.2;
      }
      .btn-login{
        background: #6a2ece;
        text-transform: uppercase;
        color: #fff;
        border-radius:0px;
        width: 185px !important;
        padding: 8px 30px 8px 30px;
        font-size: 1.8rem;
        border: 1px solid transparent;
      }
      .text-muted{
        color: #6c757d!important;
      }
      .reset{
        margin-top:10px;
        margin-bottom:10px;
      }
      .form-control{
        height: 42px;
        font-size: 1.8rem;
      }
      .links{
        color: #0794d8;
      }
      .logo-image {
        width: 240px;
    }
    .navbar {
        position: relative;
        min-height: 100px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-radius: 0px !important;
        box-shadow: 0 6px 17px -8px rgb(0 0 0 / 75%)
    }
    .navbar-default {
        background-color: #2a2266;
        border-color: #2a2266;
    }
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30vh;
        background-color: #f5f5f5;
    }
    .text-center {
        text-align: center;
    }
    .site-footer {
        padding: 128px 0;
    }
    .list-inline, .list-unstyled {
        padding-left: 0;
        list-style: none;
    }
    .site-footer ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    dl, ol, p, ul {
        margin-bottom: 1rem;
    }
    .site-footer h2 {
        letter-spacing: 3.6px;
        margin-bottom: 40px;
        text-transform: uppercase;
    }
    .footer-bootom-content, .site-footer h2 {
        font-size: 18px;
        color: #000;
        font-family: "Rubik",sans-serif;
        font-weight: 400;
    }
    .copyright, .site-footer ul li a {
        color: #000;
        font-family: "Rubik",sans-serif;
    }
    a.footer-link {
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-transform: capitalize;
        font-size: 25px!important;
    }
    .list-inline-item:not(:last-child) {
        margin-right: 0.5rem;
    }
    .site-footer ul li {
        width: 100%;
    }
    .list-inline-item {
        display: inline-block;
    }
    
    .site-footer ul li a {
        font-size: 18px!important;
        line-height: 60px;
    }
    @media (min-width: 768px){
        .navbar-nav{
            float:none !important;
            margin: 0 auto !important;
            display: table !important;
            table-layout: fixed !important;
        }
    }
    
      </style>
    `;
    $("head").append(stylesheet);
    var head = `
    <nav class="navbar navbar-default" role="navigation">
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
            <a class="navbar-brand" href="#">
            <img src="https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/272583/africanancestry-nav.svg" class="logo-image" alt="African Ancestry">
        </a>
        </ul>
    </div><!-- /.navbar-collapse -->
    </nav>
    `;
    var footer = `<footer class="site-footer " role="contentinfo">
    <div class="container">
    <div class="row">      
        <div class="col-md-4 col-sm-6">
            <div class="footer-social-icons"> 
            <h2>FIND US ON</h2> 
                <ul class="list-inline">
                    
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.facebook.com/africanancestry">
                                <svg id="Group_1617" data-name="Group 1617" xmlns="http://www.w3.org/2000/svg" width="34.458" height="34.249" viewBox="0 0 34.458 34.249">
                                    <path id="Path_470" data-name="Path 470" d="M1062.458,17.229a17.229,17.229,0,1,0-19.921,17.02V22.21h-4.375v-4.98h4.375v-3.8c0-4.318,2.572-6.7,6.507-6.7a26.491,26.491,0,0,1,3.857.337v4.24h-2.172A2.49,2.49,0,0,0,1047.921,14v3.232h4.778l-.764,4.98h-4.015v12.04A17.234,17.234,0,0,0,1062.458,17.229Z" transform="translate(-1028 0)" fill="#682ace"/>
                                </svg> Facebook
                            </a>
                        </li>
                    
                    
                        <li class="list-inline-item"><a target="_blank" href="https://www.instagram.com/africanancestry/">         
                        <svg id="Group_1614" data-name="Group 1614" xmlns="http://www.w3.org/2000/svg" width="34.458" height="34.459" viewBox="0 0 34.458 34.459">
                            <path id="Path_521" data-name="Path 521" d="M3.616,0A3.616,3.616,0,1,1,0,3.616,3.616,3.616,0,0,1,3.616,0Z" transform="translate(13.612 13.613)" fill="#682ace"/>
                            <path id="Path_471" data-name="Path 471" d="M1839.343,154.5a5.736,5.736,0,0,0-.356-1.92,3.427,3.427,0,0,0-1.962-1.962,5.739,5.739,0,0,0-1.92-.356c-1.091-.05-1.418-.06-4.178-.06s-3.088.011-4.178.06a5.738,5.738,0,0,0-1.92.356,3.427,3.427,0,0,0-1.962,1.962,5.741,5.741,0,0,0-.356,1.92c-.05,1.091-.06,1.418-.06,4.178s.011,3.088.06,4.178a5.741,5.741,0,0,0,.356,1.92,3.426,3.426,0,0,0,1.962,1.962,5.738,5.738,0,0,0,1.92.356c1.091.05,1.417.06,4.178.06s3.088-.011,4.178-.06a5.74,5.74,0,0,0,1.92-.356,3.427,3.427,0,0,0,1.962-1.962,5.736,5.736,0,0,0,.356-1.92c.05-1.091.06-1.418.06-4.178S1839.393,155.589,1839.343,154.5Zm-8.417,9.488a5.31,5.31,0,1,1,5.31-5.31A5.31,5.31,0,0,1,1830.927,163.986Zm5.52-9.588a1.241,1.241,0,1,1,1.24-1.241A1.241,1.241,0,0,1,1836.447,154.4Z" transform="translate(-1813.699 -141.447)" fill="#682ace"/>
                            <path id="Path_472" data-name="Path 472" d="M1684.229-5.25a17.229,17.229,0,1,0,17.229,17.229A17.229,17.229,0,0,0,1684.229-5.25Zm10.277,21.492a7.591,7.591,0,0,1-.48,2.51A5.284,5.284,0,0,1,1691,21.776a7.585,7.585,0,0,1-2.51.48c-1.1.051-1.455.063-4.263.063s-3.16-.012-4.263-.063a7.587,7.587,0,0,1-2.51-.48,5.286,5.286,0,0,1-3.024-3.024,7.6,7.6,0,0,1-.48-2.51c-.051-1.1-.062-1.455-.062-4.263s.012-3.16.063-4.263a7.6,7.6,0,0,1,.48-2.51,5.286,5.286,0,0,1,3.024-3.024,7.587,7.587,0,0,1,2.51-.48c1.1-.051,1.455-.062,4.263-.062s3.16.012,4.263.062a7.585,7.585,0,0,1,2.51.48,5.284,5.284,0,0,1,3.024,3.024,7.591,7.591,0,0,1,.48,2.51c.051,1.1.063,1.455.063,4.263S1694.557,15.14,1694.506,16.242Z" transform="translate(-1667 5.25)" fill="#682ace"/>
                        </svg>
                        Instagram</a>
                        </li>
                    
                    
                        <li class="list-inline-item"><a target="_blank" href="https://twitter.com/africanancestry">                        
                        <svg id="Group_1615" data-name="Group 1615" xmlns="http://www.w3.org/2000/svg" width="34.42" height="34.421" viewBox="0 0 34.42 34.421">
                            <path id="Path_473" data-name="Path 473" d="M2359.71-5.25a17.21,17.21,0,1,0,17.21,17.21A17.21,17.21,0,0,0,2359.71-5.25Zm9.164,12.508c.01.2.01.4.01.609a13.378,13.378,0,0,1-13.469,13.468,13.191,13.191,0,0,1-7.235-2.14,8.63,8.63,0,0,0,1.129.069,9.513,9.513,0,0,0,5.88-2.022,4.725,4.725,0,0,1-4.417-3.289,4.508,4.508,0,0,0,.893.088,4.719,4.719,0,0,0,1.247-.166,4.74,4.74,0,0,1-3.8-4.643V9.172a4.654,4.654,0,0,0,2.14.589,4.733,4.733,0,0,1-1.472-6.312,13.427,13.427,0,0,0,9.758,4.948,4.326,4.326,0,0,1-.127-1.08,4.736,4.736,0,0,1,8.187-3.24,9.581,9.581,0,0,0,3-1.148,4.727,4.727,0,0,1-2.081,2.621,9.6,9.6,0,0,0,2.719-.746A9.7,9.7,0,0,1,2368.874,7.258Z" transform="translate(-2342.5 5.25)" fill="#682ace"/>
                        </svg>
                        Twitter</a>
                        </li>
                    
                    
                        <li class="list-inline-item"><a target="_blank" href="https://www.youtube.com/africanancestrydna">                    
                        <svg id="Group_1616" data-name="Group 1616" xmlns="http://www.w3.org/2000/svg" width="34.99" height="34.991" viewBox="0 0 34.99 34.991">
                            <path id="Path_474" data-name="Path 474" d="M3052.495-6.88a17.5,17.5,0,1,0,17.5,17.5A17.5,17.5,0,0,0,3052.495-6.88ZM3063.488,11.5a37.86,37.86,0,0,1-.219,3.8,5.292,5.292,0,0,1-.874,2.328,3.047,3.047,0,0,1-2.2.994c-3.077.236-7.7.244-7.7.244s-5.716-.056-7.475-.236a3.594,3.594,0,0,1-2.424-1,5.274,5.274,0,0,1-.874-2.327,37.886,37.886,0,0,1-.219-3.8V9.723a37.9,37.9,0,0,1,.219-3.8A5.3,5.3,0,0,1,3042.6,3.6a3.033,3.033,0,0,1,2.2-.991c3.076-.238,7.691-.238,7.691-.238h.01s4.615,0,7.693.238a3.033,3.033,0,0,1,2.2.991,5.284,5.284,0,0,1,.874,2.329,37.86,37.86,0,0,1,.219,3.8ZM3049.75,14.74l6.873-4.124-6.873-4.123Z" transform="translate(-3035 6.88)" fill="#682ace"/>
                        </svg>
                        YouTube</a>
                        </li>
                    
                    
                </ul>
            </div>       
        </div>
    
      <div class="col-md-4 col-sm-6">
    
              
                
                  <h2>Our company</h2>
                    <ul class="footer-list list-inline">
                      
                        <li class="list-item list-inline-item"><a class="footer-link" href="https://africanancestry.com/pages/careers">Careers</a></li>
                      
                        <li class="list-item list-inline-item"><a class="footer-link" href="/pages/faqs">F.A.Q.</a></li>
                      
                        <li class="list-item list-inline-item"><a class="footer-link" href="https://africanancestry.com/policies/privacy-policy">Privacy Policy</a></li>
                      
                        <li class="list-item list-inline-item"><a class="footer-link" href="/policies/terms-of-service">Terms of Service</a></li>
                      
                        <li class="list-item list-inline-item"><a class="footer-link" href="/policies/refund-policy">Refund policy</a></li>
                      
                    </ul>
                  
                
                
                 
            <!--p class="call-copy"><span>Call</span> or <span>Click</span> to place an order </p>
            <p><a class="phone-number"><i class="fas fa-phone"></i> +1 202-723-0900</a></p-->
            </div>  
       <div class="col-md-4 col-sm-6">
              <a href="/" class="logo main-logo" rel="home"><img src="https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/272583/africanancestry-footer-logo.svg" data-src="https://miniorange.s3.amazonaws.com/public/images/customer-app-logos/272583/africanancestry-footer-logo.svg" class="logo-image lazyloaded" alt="African Ancestry"></a>
       
          <p class="copyright">© 2021 African Ancestry, Inc. All rights reserved.</p> 
          <ul class="footer-extralinks list-inline">
           <li class="list-inline-item"><a href="/policies/terms-of-service">Terms of Use</a></li>
           <li class="list-inline-item"><a href="/policies/privacy-policy">Privacy Policy</a></li>
          </ul> 
        </div>
    
      </div>
    </div>
      
    <!-- Newsletter popup Large modal ::Start -->
    <!-- footer.liquid/newsletter-popup.liquid -->
    
    
    
    
    
      
    </footer>`;
    $("body").prepend(head);
    $("body").append(footer);
    var login = `<h1 class="login-text">LOGIN</h1>`;
    var resetpassword = `<br>
    <a href="https://africanancestry.com/account/recover" class="reset links">Forgot your password?</a>`;
    var uname_text = `<small class="text-muted">We'll never share your email with anyone else.</small>`;
    $("#login-wrapper").prepend(login);
    $("#userName").append(uname_text);
    $("#userName").removeClass();
    $("#userName").addClass("col-md-4 col-md-offset-4");
    $("#passwordspan").removeClass();
    $("#plaintextPassword").prop("placeholder", "Password");
    $("#passwordspan").append(resetpassword);
    $("#username").prop("placeholder", "Enter Email");
    $("#passwordspan").addClass("col-md-4 col-md-offset-4");
    $("#loginbutton").parent().removeClass();
    $("#loginbutton").parent().addClass("col-md-1 col-md-offset-4");
    $("#loginbutton").val("SIGN IN");
    $("#loginbutton").removeAttr("style");
    $("#loginbutton").removeClass();
    $("#loginbutton").addClass("btn-login");
    $("#loginbutton").parent().parent().append(`<br><div class="col-md-4 col-sm-offset-4"><a href="https://africanancestry.com/account/register" class="links">Create account</a><br><a class="links" href="#"><br>Return to Store</a></div><br>`);

    $("body").hide();
    console.log("Script added");

    $("body").show();
});