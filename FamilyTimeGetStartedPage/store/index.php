<?php
$response = file_get_contents('https://mesh2.familytime.io/dashboard/store/android/appversion');
$response = json_decode($response);
$resp = file_get_contents('https://core2.familytime.io/app-store');
$resp = json_decode($resp);
// $count = i++;
?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Download FamilyTime Child App for Android</title>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=!0;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)})(window,document,'script','dataLayer','GTM-MDFFLC');</script><!-- End Google Tag Manager -->
    <!-- End Google Tag Manager -->
    <link href="https://fonts.googleapis.com/css?family=Product Sans:400,700" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" type="text/css" rel="stylesheet">
</head>

<body>
<!-- Google Tag Manager (noscript) -->
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDFFLC" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
<section class="store-main-percen">
        <div class="store-percentage-content">
            <div class="store-familytime-logo">
                <img src="https://familytime.io/img/playStore/rectangle-logo.svg" alt="logo-img"/>
            </div>
            <div class="store-percentage">
                <h4>Today's Special Discount <span>Flat 35% OFF <a href="https://sites.fastspring.com/familytime/instant/myfamily3-upgrade?coupon=EM-NLRVCS"><img src="https://familytime.io/img/playStore/back-icon.svg" alt="icon"/></a></span></h4>
            </div>
            <div class="store-percentage-button">
                <a href="https://sites.fastspring.com/familytime/instant/myfamily3-upgrade?coupon=EM-NLRVCS">Protect your child</a>
            </div>
        </div>
    </div>
</section>


<section class="store-logo-main-content">
    <div class="container">
    <div class="row">
        <div class="col-1">
            <h1>FamilyTime Jr.</h1>
            <span>YumyApps</span>
            <p class="vesion-text"><?php echo $resp->version_number; ?> Latest Version</p>
            <ul class="store-list-version-rating">
                <li><a href="javascript:void(0)">
                    <small>4.9 <img src="https://familytime.io/img/playStore/blacstar.svg" class="store-desktop-blackstar" alt="rating-img"/></small>
                    <p><?php echo number_format($resp->reviews); ?> reviews <img src="https://familytime.io/img/playStore/rated-circle.svg" alt="rated-img"/></p></a>
                </li>
                <li><a href="javascript:void(0)">
                    <small>2M+</small>
                    <p>Downloads</p></a>
                </li>
                <li><a href="javascript:void(0)">
                    <small><img src="https://familytime.io/img/playStore/threeplus.svg" class="rating-numbering" alt="icon-img"/></small>
                    <p>Rated for 3+  <img src="https://familytime.io/img/playStore/rated-circle.svg" alt="rated-img"/></p></a>
                </li>
            </ul>
            <div class="store-button-installing">
                <a href="<?php echo $resp->url; ?>" class="btn btn-store-install">Install</a>
                <a href="<?php echo $resp->url; ?>" class="btn btn-store-wishlist"><img src="https://familytime.io/img/playStore/whishlist.svg" alt=""/> Add To Wishlist</a>
            </div>
            <p class="store-app-avail"><img src="https://familytime.io/img/playStore/responsiveapp.svg" alt="wish-img"/> This app available for this device</p>
        </div>
        <div class="col-2">
            <img src="https://familytime.io/img/playStore/jrlogo.svg" class="store-main-logo" alt="logo-img"/>
            <img src="https://familytime.io/img/playStore/mobile-site-logo.svg" class="store-main-mobile-logo" alt="logo-img"/>
        </div>
    </div>

<div class="store-mobile-list-version">
    <ul class="store-list-version-rating">
        <li class="store-mobile-list-review"><a href="javascript:void(0);">
            <small>4.9 <img src="https://familytime.io/img/playStore/blacstar.svg" alt="rating-img"/></small>
            <p>60K reviews <img src="https://familytime.io/img/playStore/rated-circle.svg" class="store-mobile-rateds" alt="rated-img"/></p></a>
        </li>
        <li>
            <img src="https://familytime.io/img/playStore/line-store.svg" height="30" alt="icon-img"/>
        </li>
        <li class="store-mobile-list-download"><a href="javascript:void(0);"> 
            <small><img src="https://familytime.io/img/playStore/download-app-icon.svg" class="store-mobile-download-icon" alt="app-icon"/></small>
            <p>21 MB</p></a>
        </li>
        <li>
            <img src="https://familytime.io/img/playStore/line-store.svg" height="30" alt="icon-img"/>
        </li>
        <li class="store-mobile-list-plus"><a href="javascript:void(0);">
            <small><img src="https://familytime.io/img/playStore/threeplus.svg" class="rating-numbering store-mobile-download-icon" alt="icon-img"/></small>
            <p>Rated for 3+  <img src="https://familytime.io/img/playStore/rated-circle.svg" class="store-mobile-rateds" alt="rated-img"/></p></a>
        </li>
        <li>
            <img src="https://familytime.io/img/playStore/line-store.svg" height="30" alt="icon-img"/>
        </li>
        <li class="store-mobile-list-multiple-down"><a href="javascript:void(0)"> 
            <small>2M+</small>
            <p>Downloads</p></a>
        </li>
    </ul>
    <div class="store-install-button-mobile">
    <a href="<?php echo $resp->url; ?>" class="btn-install-mobile">Install</a>
</div>
</div>

</div>
</section>

<section class="store-app-carousel">
    <div class="container">
            <div class="slider store-app-slider">
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash1.png" data-url="https://familytime.io/img/playStore/dash1.png" class="fs-gal" alt="app-img"/>
                </div>
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash2.png" data-url="https://familytime.io/img/playStore/dash2.png" class="fs-gal" alt="app-img"/>
                </div>
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash3.png" data-url="https://familytime.io/img/playStore/dash3.png" class="fs-gal" alt="app-img"/>
                </div>
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash4.png" data-url="https://familytime.io/img/playStore/dash4.png" class="fs-gal" alt="app-img"/>
                </div>
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash5.png" data-url="https://familytime.io/img/playStore/dash5.png" class="fs-gal" alt="app-img"/>
                </div>
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash6.png" data-url="https://familytime.io/img/playStore/dash6.png" class="fs-gal" alt="app-img"/>
                </div>
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash7.png" data-url="https://familytime.io/img/playStore/dash7.png" class="fs-gal" alt="app-img"/>
                </div>
                <div class="item">
                    <img src="https://familytime.io/img/playStore/dash8.png" data-url="https://familytime.io/img/playStore/dash8.png" class="fs-gal" alt="app-img"/>
                </div>
            </div>
        
           <!-- Full screen gallery. -->
           <div class="fs-gal-view">
            <img class="fs-gal-prev fs-gal-nav" src="https://familytime.io/img/playStore/app-store-prev-button.svg" alt="Previous picture" title="Previous picture" />
            <img class="fs-gal-next fs-gal-nav" src="https://familytime.io/img/playStore/app-store-next-button.svg" alt="Next picture" title="Next picture" />
            <img class="fs-gal-close" src="https://familytime.io/img/playStore/app-store-close-button.svg" alt="Close gallery" title="Close gallery" />
            <img class="fs-gal-main" src="" alt="" />
        </div>
        
    </div>
</section>

<section class="store-developing-section">
<div class="container">
    <div class="row">

    <div class="store-main-content-detailing">

        <div class="col-about-1">
            <div class="store-app-detail">
                <h2>About this app</h2>
                <p>FamilyTime Jr. is a flexible screen time parental control app. 
                It prevents kids from wasting time on smartphones and tablets. With the help of this app, 
                concerned parents can specify the time when their children are allowed to use mobile devices 
                and applications on them.</p>
                <p class="store-mb-0">
                That's why limiting screen time is what parents need to secure children's health 
                and happiness. This parental control app restricts time spent on mobile gadgets
                and applications. Limit the following device use<span id="store-show-dots">:...</span><span id="store-hide-dots">.</span>
                </p>
                <div class="store-about-detail-mobile">
                    <div class="store-about-more-detail-toggle">
                        <p>It prevents kids from wasting time on smartphones and tablets. With the help of this app, 
                        concerned parents can specify the time when their children are allowed to use mobile devices 
                        and applications on them.</p>
                        <h4>Features</h4>
                <ul class="store-about-feature-list">
                  <li><i class="fa fa-star"></i>&nbsp; Internet Schedule - Manage and create a customized schedule to restrict your kid's internet access.</li>
                  <li><i class="fa fa-star"></i>&nbsp; Filter the content they can access on the internet and block unwanted site categories with Web Blocker.</li>
                  <li><i class="fa fa-star"></i>&nbsp; Use SafeSearch to secure their searches on Google, Bing, and YouTube.</li>
                  <li><i class="fa fa-star"></i>&nbsp; Set a flexible schedule for the use of apps via Manage Limits option.</li>
                  <li><i class="fa fa-star"></i>&nbsp; Review how often your kid uses each app in the Reports section.</li>
                  <li><i class="fa fa-star"></i>&nbsp; Automatically apply limits to newly added apps.</li>
                  <li><i class="fa fa-star"></i>&nbsp; Don't like an app they are using? Block it down.</li>  
                  <li><i class="fa fa-star"></i>&nbsp; Monitor your kid's location through the Location Tracker, geofencing, and FamilyLocator.</li>  
                  <li><i class="fa fa-star"></i>&nbsp; Track all SMS messages with the comprehensive SMS tracker.</li>  
                  <li><i class="fa fa-star"></i>&nbsp; Use the Call Tracker to track calls and view contacts.</li>  
                  <li><i class="fa fa-star"></i>&nbsp; Your children can generate an SOS alert with one press that would send their GPS location details to you immediately.</li>  
                  <li><i class="fa fa-star"></i>&nbsp; View detailed and actionable reports, including your child's phone usage, location history, and other activity reports.</li>  
                </ul>   
                <p>And the best part: it lets you do it all remotely through a parent mobile app or a web control panel created especially for you so you can control your child's safety.</p> 
                <h4>Feedback</h4>
                <p>
                If you have any problems, please take a look at our help pages, or contact us 
                via the contact page of our website, since we cannot always help you if you post 
                questions in the reviews.
                </p>
                <h5>Note: </h5>
                <ul class="store-about-feedback-list">
                    <li>① This app uses the Device Administrator's permission.</li>
                    <li>② To know what information this app collects from the device, check our App Permissions here: <a href="https://familytime.io/kb/getting-started/familytime-child-app-permissions-on-android.html">https://familytime.io/kb/getting-started/familytime-child-app-permissions-on-android.html</a></li>
                    <li>③ Data charges may apply for using this app over the cellular data. Contact your provider for details.</li> 
                    <li>④ Continued use of GPS running in the background of the mobile device can drain battery life.</li>
                </ul> 
                <p>We take your privacy very seriously, and please visit pages below for more details:</p>
                <ul class="store-about-condition-list">
                    <li>➠ Privacy Policy at <a href="https://familytime.io/legal/privacy-policy.html">https://familytime.io/legal/privacy-policy.html</a></li>
                    <li>➠ Terms and Conditions at <a href="https://familytime.io/legal/terms-conditions.html">https://familytime.io/legal/terms-conditions.html</a></li>
                </ul>    
                 </div>
                <a href="javascript:void(0)" id="store-show-about" class="store-about-more-detail">Read More <i class="fa fa-angle-down"></i></a>
                    <a href="javascript:void(0)" id="store-hide-about" class="store-about-more-detail">See Less <i class="fa fa-angle-up"></i></a>
                    <div class="store-about-tool-btn">
                    <a href="javascript:void(0);" class="store-about-tool">Tools</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-1">
            <h2>What's New</h2>
            <p class="store-last-update">Last updated on <?php echo date('F d, Y', strtotime($resp->release_date)); ?></p>
            <p class="store-regularly"><?php echo $resp->whats_new; ?>
            </p>
        </div>

        <div class="store-safety-heading">
            <h2>Date Safety</h2>
            <p>Safety starts with understanding how developers collect and share your data. 
            Data privacy and security practices may vary based on your use, region, and age.
             The developer provided this information and may update it over time.</p>
             <p class="store-mobile-hide-security">
                Security practices may vary based on your use, region, and age. The 
                developer provided this information and may update it over time.
            </p>
             <a href="javascript:void(0)" id="store-show-safety" class="store-mobile-safety-more">Read More <i class="fa fa-angle-down"></i></a>
             <a href="javascript:void(0)" id="store-hide-safety" class="store-mobile-safety-more">See Less <i class="fa fa-angle-up"></i></a>
        </div>

        
       <div class="store-security-content">
        <div class="store-security">
            <div class="store-security-image">
                <img src="https://familytime.io/img/playStore/share-icon.svg" alt="safe-img"/>
            </div>
            <div class="store-security-text">
                <p>This app may share these data types with third parties</p>
                <p class="main-text">Location, Contacts and App activity</p>
            </div>
        </div>
    
        <div class="store-security">
            <div class="store-security-image">
                <img src="https://familytime.io/img/playStore/vector.svg" alt="safe-img"/>
            </div>
            <div class="store-security-text">
                <p>This app may collect these data types</p>
                <p class="main-text">Location, Personal info and 4 others</p>
            </div>
        </div>
    
        <div class="store-security">
            <div class="store-security-image">
                <img src="https://familytime.io/img/playStore/Lock Icon.svg" class="store-lock-icon" alt="safe-img"/>
            </div>
            <div class="store-security-text">
                <p>Data is encrypted in transit</p>
            </div>
        </div>
    
        <div class="store-security">
            <div class="store-security-image">
                <img src="https://familytime.io/img/playStore/Recycle-bin-icon.svg" alt="safe-img"/>
            </div>
            <div class="store-security-text">
                <p>You can request that data be deleted</p>
            </div>
        </div>
    
        <div class="store-date-saftey-content">
            <div class="store-hide-safety">
                <div class="store-security">
                     <div class="store-security-image">
                         <img src="https://familytime.io/img/playStore/vector.svg" alt="safe-img"/>
                     </div>
                     <div class="store-security-text">
                         <p>This app may collect these data types</p>
                         <p class="main-text">Location, Personal info and 4 others</p>
                     </div>
                 </div>
             </div>
         <a href="javascript:void(0)" id="store-show-detail" class="store-saftey-more">See detail <i class="fa fa-angle-down"></i></a>
         <a href="javascript:void(0)" id="store-hide-detail" class="store-saftey-more">See Less <i class="fa fa-angle-up"></i></a>
        </div>
    
       </div>

       <div class="col-review">
        <h3>Ratings and reviews</h3>
<div class="review-box">
<div class="rev-left">
    <h4>4.9</h4>
    <img src="https://familytime.io/img/playStore/rating-stars.svg" width="" height="" class="start-rating" alt="">
    <p class="rating-update"><?php echo number_format($resp->reviews); ?> reviews</p>
    <p class="mobile-rev-left"><?php echo number_format($resp->reviews); ?> reviews</p>
</div>
<div class="rev-right">
    <div class="bar-main">
        <span>5</span><div class="bar"><div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:51%">&nbsp;</div>
            </div></div></div>
    <div class="bar-main">
        <span>4</span><div class="bar"><div class="bar"><div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-container w3-blue w3-round-xlarge" style="width:26%">&nbsp;</div>
                </div></div></div></div>
    <div class="bar-main">
        <span>3</span><div class="bar"><div class="bar"><div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-container w3-blue w3-round-xlarge" style="width:10%">&nbsp;</div>
                </div></div></div></div>
    <div class="bar-main">
        <span>2</span><div class="bar"><div class="bar"><div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-container w3-blue w3-round-xlarge" style="width:4%">&nbsp;</div>
                </div></div></div></div>
    <div class="bar-main">
        <span>1</span><div class="bar"><div class="bar"><div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-container w3-blue w3-round-xlarge" style="width:10%">&nbsp;</div>
                </div></div></div></div>
</div>
</div>
</div>

<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Samantha McLain</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>21/07/2023</span>
    </div>
</div>    

<p class="review-text">I strongly recommend this app. FamilyTime Jr. is a life saviour for me as it lets me take control of my junior’s mobile and smart devices. I am happy to know what my child is doing throughout the day and even limit the screen time to a healthy standard.</p>
</div>


<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>David Jr.</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>19/07/2023</span>
    </div>
</div>    

<p class="review-text">I recently subscribed to FamilyTime Jr. app and recommend it to other parents. I found all of its features worthy but the Geofencing is really helpful. Along with online I can secure my children offline by setting boundaries and limits. I'm pleased with its functionality and ease of use.</p>
</div>

<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Maria Joshua</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>16/07/2023</span>
    </div>
</div>    

<p class="review-text">Being a concerned parent, I was worried what my child would do with his mobile device. But with the FamilyTime Jr. app, now I have all the insights. I appreciate the App Blocker feature which helps me cut off all harmful apps from his device, keeping him safe.</p>
</div>

<div id="store-detail-content" class="store-read-more-detail">

<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Rebecca John</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>13/07/2023</span>
    </div>
</div>    

<p class="review-text">As a parent, the FamilyTime Jr. app has been a true game-changer. It allows me to ensure that my kids are safe online while still giving them some autonomy. The SOS feature especially gives me peace of mind and my kids can inform me about danger anytime.</p>
</div>


<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Stephanie Ross</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>11/07/2023</span>
    </div>
</div>    

<p class="review-text">FamilyTime Jr. app is a lifeline for any parent. My twins hate the idea of being monitored but the Time Bank and Fun Time features help me to make them love the app. Now they are good with limitations and monitoring knowing they will get rewarded for good behavior. I can feel improvement in their behavior and academic performance.</p>
</div>

<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Thomas Michael</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>28/06/2023</span>
    </div>
</div>    

<p class="review-text">The FamilyTime Jr. app has been a great tool for maintaining a check on my teenager's digital activities. The 'Teen Safe Drive' feature is particularly useful for monitoring his driving habits. Highly Recommended!</p>
</div>

<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Ashton Smith</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>22/06/2023</span>
    </div>
</div>    

<p class="review-text">FamilyTime Jr. is certainly a great application and every parent of a teenager or of preteen should get the app. The app has awesome set of monitoring features and offers many controls too.</p>
</div>
<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Debbie King</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>18/06/2023</span>
    </div>
</div>    

<p class="review-text">So far I like the app for my son. There was an issue in the beginng but hopefully 
it is resolved. I will post an update after a couple of weeks. Ugly downloa from 
chemo it is incognito mode and your child cannot delete the app. Text messages show up, 
location does as well as the time. Most bad reviews rems to be from angry kids who are
simply used to doing what they want when they want. This app stops all that. parent of 4. 
My son agrees he needs to be monitored.</p>
</div>


<div class="store-person-detail-review">
    <div class="store-person-detail">

        <div class="store-person-cotent">
        <div class="store-person-img">
            <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
        </div>
        <div class="store-person-title">
            <span>Alex Oper</span>
        </div>
        </div>


        <div class="store-person-dots">
            <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
        </div>
    </div>


<div class="store-review-content">
    <div class="store-review-star">
        <ul>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
        </ul>
    </div>
    <div class="store-review-date">
        <span>11/06/2023</span>
    </div>
</div>    

<p class="review-text">Easy to install. The assumption is the device you install this app on is the device the child will use but that's not the complete truth. The idea of monitoring kids from the parents device and through Web dashboard makes it worth using. Love the idea of this app and the functionality that it provides. Thank you FamilyTime for empowering parental community.
</p>
</div>
    <div class="store-person-detail-review">
        <div class="store-person-detail">
    
            <div class="store-person-cotent">
            <div class="store-person-img">
                <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
            </div>
            <div class="store-person-title">
                <span>James Holder</span>
            </div>
            </div>
    
    
            <div class="store-person-dots">
                <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
            </div>
        </div>
    
    
    <div class="store-review-content">
        <div class="store-review-star">
            <ul>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            </ul>
        </div>
        <div class="store-review-date">
            <span>5/06/2023</span>
        </div>
    </div>    
    
    <p class="review-text">So far the best app I ever used. Now I can control my young kids from the negativity. I will rate this app 5 out of 5 and I also advice everyone to download this app. Thumbs Up FamilyTime!</p>
    </div>

    
    <div class="store-person-detail-review">
        <div class="store-person-detail">
    
            <div class="store-person-cotent">
            <div class="store-person-img">
                <img src="https://familytime.io/img/playStore/user.svg" alt="icon-img"/>
            </div>
            <div class="store-person-title">
                <span>David Harrison</span>
            </div>
            </div>
    
    
            <div class="store-person-dots">
                <img src="https://familytime.io/img/playStore/dot.svg" alt="icon-img"/>
            </div>
        </div>
    
    
    <div class="store-review-content">
        <div class="store-review-star">
            <ul>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
                <li><img src="https://familytime.io/img/playStore/star.svg" alt="star-img"/></li>
            </ul>
        </div>
        <div class="store-review-date">
            <span>28/05/2023</span>
        </div>
    </div>    
    
    <p class="review-text">I really like the SOS function bc it won't stop notifying my mom till she gets back to me... which is much better than text or even a call!</p>
    </div>
    

</div>
<a href="javascript:void(0)" id="store-show-reviews" class="store-all-reviews">See all reviews <i class="fa fa-angle-down"></i></a>
<a href="javascript:void(0)" id="store-hide-reviews" class="store-all-reviews">See less <i class="fa fa-angle-up"></i></a>



    </div>

    <div class="store-main-content-optioning">

        <div class="col-dev-1">
            <div class="store-developing-content">
                <h4>Developer Contact</h4>
                <div class="store-developing-material">
                 <div class="store-developing-img">
                    <img src="https://familytime.io/img/playStore/website-vector.svg" alt="icon-img"/>
                 </div>
                 <div class="store-developing-text store-developing-linking">
                    <h5>Website</h5>
                    <p><a href="https://familytime.io">https://familytime.io</a></p>
                 </div>
                </div>
    
                <div class="store-developing-material">
                    <div class="store-developing-img">
                       <img src="https://familytime.io/img/playStore/Mail.svg" alt="icon-img"/>
                    </div>
                    <div class="store-developing-text store-developing-linking">
                       <h5>Email</h5>
                       <p><a href="mailto::support@familytime.io">support@familytime.io</a></p>
                    </div>
                   </div>
    
                   <div class="store-developing-material">
                    <div class="store-developing-img">
                       <img src="https://familytime.io/img/playStore/Location.svg" alt="icon-img"/>
                    </div>
                    <div class="store-developing-text">
                       <h5>Address</h5>
                       <p>2-7-1, Shiomi, Shiomi Ekimae Plaza, Koto City, Tokyo, 135-0052, Japan</p>
                    </div>
                   </div> 
                   
                   <div class="store-developing-material store-mb-0">
                    <div class="store-developing-img">
                       <img src="https://familytime.io/img/playStore/privacy.svg" alt="icon-img"/>
                    </div>
                    <div class="store-developing-text store-developing-linking">
                       <h5>Privacy Policy</h5>
                       <p><a href="https://familytime.io/legal/app-privacy-policy.html">https://familytime.io/legal/app-privacy-policy.html</a></p>
                    </div>
                   </div> 
    
            </div>
        </div>

        <div class="col-xl-2">
            <h4>App Info</h4>
            <div class="store-app-info-vers">
                <ul class="store-info-vserion-update">
                    <li>Current Version</li>
                    <li>Download Size</li>
                    <li>Update On</li>
                    <li>Downloads</li>
                    <li>Required OS</li>
                    <li>Offered by</li>
                    <li>Release On</li>
                </ul>
                <ul class="store-info-vserion">
                    <li><?php echo $resp->version_number; ?></li>
                    <li>21 MB</li>
                    <li><?php echo date('F d, Y', strtotime($resp->release_date)); ?></li>
                    <li>2500,000+ downloads</li>
                    <li>Android 8.0 and up</li>
                    <li>YumyApps</li>
                    <li><?php echo date('F d, Y', strtotime($resp->release_date)); ?></li>
                </ul>
            </div>
        </div>

    </div>


    </div>
</div>

</section>

<section class="store-mobile-app-infos">

    <div class="col-xl-2">
    <div class="store-mobile-app-flex">
        <div class="store-mobile-app-heading"><h4>App Info</h4></div>
        <div class="store-mobile-app-icons">
            <i class="fa fa-angle-up"></i>
        </div>
    </div>
        <div class="store-app-info-vers">
            <ul class="store-info-vserion-update">
                <li>Current Version</li>
                <li>Download Size</li>
                <li>Update On</li>
                <li>Downloads</li>
                <li>Required OS</li>
                <li>Offered by</li>
                <li>Release On</li>
            </ul>
            <ul class="store-info-vserion">
                <li><?php echo $resp->version_number; ?></li>
                <li>21 MB</li>
                <li><?php echo date('F d, Y', strtotime($resp->release_date)); ?></li>
                <li>2500,000+ downloads</li>
                <li>Android 8.0 and up</li>
                <li>YumyApps</li>
                <li><?php echo date('F d, Y', strtotime($resp->release_date)); ?></li>
            </ul>
        </div>
    </div>  

    <div class="col-dev-1">
        <div class="store-developing-content">
            <div class="store-mobile-dev-flex">
                <div class="store-mobile-dev-heading"><h4>Developer Contact</h4></div>
                <div class="store-mobile-dev-icons">
                    <i class="fa fa-angle-up"></i>
                </div>
            </div>
            <div class="store-developing-material">
             <div class="store-developing-img">
                <img src="https://familytime.io/img/playStore/website-vector.svg" alt="icon-img"/>
             </div>
             <div class="store-developing-text">
                <h5>Website</h5>
                <p><a href="https://familytime.io/">https://familytime.io/</a></p>
             </div>
            </div>

            <div class="store-developing-material">
                <div class="store-developing-img">
                   <img src="https://familytime.io/img/playStore/Mail.svg" alt="icon-img"/>
                </div>
                <div class="store-developing-text">
                   <h5>Email</h5>
                   <p><a href="to:support@familytime.io">support@familytime.io</a></p>
                </div>
               </div>

               <div class="store-developing-material">
                <div class="store-developing-img">
                   <img src="https://familytime.io/img/playStore/Location.svg" alt="icon-img"/>
                </div>
                <div class="store-developing-text">
                   <h5>Address</h5>
                   <p>2-7-1, Shiomi, Shiomi Ekimae Plaza, Koto City, Tokyo, 135-0052, Japan</p>
                </div>
               </div> 
               
               <div class="store-developing-material store-mb-0">
                <div class="store-developing-img">
                   <img src="https://familytime.io/img/playStore/privacy.svg" alt="icon-img"/>
                </div>
                <div class="store-developing-text">
                   <h5>Privacy Policy</h5>
                   <p><a href="https://familytime.io/legal/app-privacy-policy.html">https://familytime.io/legal/app-privacy-policy.html</a></p>
                </div>
               </div> 

        </div>
    </div>

</section>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script>
    $(document).ready(function(){
    setTimeout(function(){ 
        var s = document.createElement('script');
        s.id = 'ze-snippet';
        s.src = 'https://static.zdassets.com/ekr/snippet.js?key=0aeeabd3-e06c-4f9d-ad2f-4dab04182db4';            
        s.async = true;
        document.getElementsByTagName('head')[0].appendChild(s);
  
             },1000);
});
</script>

<script type="text/javascript">
    $(document).ready(function(){
    $('.store-app-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 4,
        arrows:false,
        autoplay:true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        arrows:false,
        autoplay:true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        stagePadding:50,
        arrows:false,
        autoplay:true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        stagePadding:50,
        arrows:false,
        autoplay:true,
        slidesToScroll: 1
      }
    }
  ]
});

    });
    </script> 
<script>
    $(document).ready(function(){
$('#store-show-reviews').on("click",function()
  { 
    $('#store-detail-content').toggle(500);
    $('#store-show-reviews').hide();
    $('#store-hide-reviews').show();
  });
  $('#store-hide-reviews').on("click",function()
  { 
    $('#store-detail-content').toggle(500);
    $('#store-show-reviews').show();
    $('#store-hide-reviews').hide();
  });
   $('.store-mobile-app-icons').on("click",function(){
    $('.store-mobile-app-icons i').toggleClass('fa fa-angle-up fa fa-angle-down');
   $('.store-app-info-vers').toggleClass('store-apping-show store-apping-hide');
  });    
  $('.store-mobile-dev-icons').on("click",function(){
    $('.store-mobile-dev-icons i').toggleClass('fa fa-angle-up fa fa-angle-down');
   $('.store-developing-material').toggleClass('store-apping-show store-apping-hide');
  });    
  $('#store-show-about').on("click",function()
  { 
    $('.store-about-more-detail-toggle').toggle(500);
    $('#store-show-about').hide();
    $('#store-hide-about').show();
    $('#store-hide-dots').show();
    $('#store-show-dots').hide();
    $('.store-developing-section .row').css('marginBottom','40');
  });
  $('#store-hide-about').on("click",function()
  { 
    $('.store-about-more-detail-toggle').toggle(500);
    $('#store-show-about').show();
    $('#store-hide-about').hide();
    $('#store-hide-dots').hide();
    $('#store-show-dots').show();
    $('.store-developing-section .row').css('marginBottom','40');
  });
$('#store-show-detail').on("click",function()
  { 
    $('.store-hide-safety').toggle(500);
    $('#store-show-detail').hide();
    $('#store-hide-detail').show();
  });
  $('#store-hide-detail').on("click",function()
  { 
    $('.store-hide-safety').toggle(500);
    $('#store-show-detail').show();
    $('#store-hide-detail').hide();
  });
  $('#store-show-whats').on("click",function()
  { 
    $('.store-mobile-what').toggle(500);
    $('#store-show-whats').hide();
    $('#store-hide-whats').show();
  });
  $('#store-hide-whats').on("click",function()
  { 
    $('.store-mobile-what').toggle(500);
    $('#store-show-whats').show();
    $('#store-hide-whats').hide();
  });

  $('#store-show-safety').on("click",function()
  { 
    $('.store-mobile-hide-security').toggle(500);
    $('#store-show-safety').hide();
    $('#store-hide-safety').show();
  });
  $('#store-hide-safety').on("click",function()
  { 
    $('.store-mobile-hide-security').toggle(500);
    $('#store-show-safety').show();
    $('#store-hide-safety').hide();
  });
});
  </script>   
<script>
    var fsGal_preloads = new Array();

$('document').ready(function() {

    $('.fs-gal-view').css('display', 'flex').hide();

    // Make gallery objects clickable, also dynamic added objects
    $('body').on('click', '.fs-gal', function(e) {
        fsGal_DisplayImage($(e.currentTarget));
    });
  
    if ($('.fs-gal')[0]) {
        preloadImage($('.fs-gal')[0].dataset.url); // Preload the very first image, if it exists
    }

    // Display gallery
    function fsGal_DisplayImage(obj) {

        // Set current image
        title = obj.attr('title');
        alt = obj.attr('alt');
        if (!title) { title = alt; }
        imgElem = $('.fs-gal-main');
        imgElem.attr('title', title);
        imgElem.attr('alt', alt);
        imgElem.attr('src', obj.attr('data-url'));
        $('.fs-gal-view > h1').text(title);
        if (!title || title == '') { $('.fs-gal-view > h1').fadeOut(); }
        else { $('.fs-gal-view > h1').fadeIn(); }

        // Create buttons
        var current = $('.fs-gal').index(obj);
        var prev = current - 1;
        var next = current + 1;
        if (prev >= 0) {
            $('.fs-gal-view > .fs-gal-prev').attr('data-img-index', prev);
        }
        if (next < $('.fs-gal').length) {
            $('.fs-gal-view > .fs-gal-next').attr('data-img-index', next);
        }
        $('.fs-gal-view').fadeIn(); // Display gallery

        // Wrap gallery
        if (current == $('.fs-gal').length - 1)  { // Last image
            $('.fs-gal-view > .fs-gal-next').attr('data-img-index', 0);
        }
        else if (current == 0)  { // Last image
            $('.fs-gal-view > .fs-gal-prev').attr('data-img-index', $('.fs-gal').length - 1);
        }
      
        preloadNextAndPrev(); // Preload next images

    }

    // Preload next and previous image
    function preloadNextAndPrev() {
        fsGal_preloads = new Array();
        // Previous
        index = $('.fs-gal-view > .fs-gal-prev').attr('data-img-index');
        elem = $($('.fs-gal').get(index));
        img = elem.attr('data-url');
        preloadImage(img);
        // Next
        index = $('.fs-gal-view > .fs-gal-next').attr('data-img-index');
        elem = $($('.fs-gal').get(index));
        img = elem.attr('data-url');
        preloadImage(img);
    }

    // Preload an image
    function preloadImage(source) {
      var preload = (new Image());
      preload.src = source
      fsGal_preloads.push(preload);
    }

    // Check if the image viewer is displayed
    function isViewerOpen() {
        return $('.fs-gal-view').css('display') !== 'none'; // Can be block, flex...
    }

    // Gallery navigation
    $('.fs-gal-view .fs-gal-nav').click(function(e) {
        e.stopPropagation();
        if (isViewerOpen()) {
            var index = $(this).attr('data-img-index');
            var img = $($('.fs-gal').get(index));
            fsGal_DisplayImage(img);
        }        
    });

    // Close gallery
    $('.fs-gal-view').click(function(e) {
        $('.fs-gal-view').fadeOut();
    });
    $('.fs-gal-main').click(function(e) {
        e.stopPropagation();
    });

    // Keyboard navigation
    $('body').keydown(function(e) {
        if (e.keyCode == 37) { 
            $('.fs-gal-view .fs-gal-prev').click(); // Left arrow
        }
        else if(e.keyCode == 39) {
            $('.fs-gal-view .fs-gal-next').click(); // Right arrow
        }
        else if(e.keyCode == 27) {
            $('.fs-gal-view .fs-gal-close').click(); // ESC
        }
    });

    // Scroll navigation
    $(window).bind('mousewheel', function(e) {
        if (e.originalEvent.wheelDelta >= 0) { // Scroll up, go to previous image
            $('.fs-gal-view .fs-gal-prev').click();
        }
        else { // Scroll down, go to next image
            $('.fs-gal-view .fs-gal-next').click();
        }
    });

    // Slide navigation using touch swiping
    var touchstartX = 0;
    var touchendX = 0;
    var gestureZone = $('.fs-gal-view')[0];

    // Listen to touch start
    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    // Listen to touch end
    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    }, false); 

    // Deterimine touch gesture direction
    function handleGesture() {
        if (touchendX <= touchstartX) { // Slide to left, go to next image
            $('.fs-gal-view .fs-gal-next').click();
        }
        if (touchendX >= touchstartX) { // Slide to right, go to previous image
            $('.fs-gal-view .fs-gal-prev').click();
        }
    }

});
</script>
</body>
</html>