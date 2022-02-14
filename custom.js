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
                    
                        <li class="list-inline-item"><a target="_blank" href="https://www.facebook.com/africanancestry">
                        
                        <img src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1617.svg?v=4334035702860137864" class=" lazyloaded" data-src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1617.svg?v=4334035702860137864"> Facebook</a>
                        </li>
                    
                    
                        <li class="list-inline-item"><a target="_blank" href="https://www.instagram.com/africanancestry/">
                        
                        <img src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1614.svg?v=10452452198984710233" class=" lazyloaded" data-src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1614.svg?v=10452452198984710233"> Instagram</a>
                        </li>
                    
                    
                        <li class="list-inline-item"><a target="_blank" href="https://twitter.com/africanancestry">
                          
                        <img src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1615.svg?v=12328511841375199818" class=" lazyloaded" data-src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1615.svg?v=12328511841375199818"> Twitter</a>
                        </li>
                    
                    
                        <li class="list-inline-item"><a target="_blank" href="https://www.youtube.com/africanancestrydna">
                         
                        <img src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1616.svg?v=12825204652570420944" class=" lazyloaded" data-src="//cdn.shopify.com/s/files/1/2138/0103/t/44/assets/Group1616.svg?v=12825204652570420944"> YouTube</a>
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