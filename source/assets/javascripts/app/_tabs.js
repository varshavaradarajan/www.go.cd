//horizontal tabs
var startTabContainer = function($, packageName) {
  var package_to_rel = {
    "debian": "#tab-debian",
    'redhat': '#tab-redhat',
    "windows": "#tab-windows",
    'zip': '#tab-zip',
    'osx': '#tab-osx'
  };

  var package_to_rel1 = {
    "debian": "deb",
    'redhat': 'rpm',
    "windows": "win",
    'zip': 'generic',
    'osx': 'osx'
  };

  $(".tab_content").hide();
  $(".tab_content:first").show();
  $("a[href=\"" + package_to_rel[packageName] + "\"]").addClass("active");
  $(".tab-accordion_heading[rel^='"+package_to_rel1[packageName]+"']").addClass("d_active");
  chooseTabContainer($);
};

var chooseTabContainer = function ($) {
  $("ul.tabs li , ul.items li").click(function() {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab-accordion_heading").removeClass("d_active");
    $(".tab-accordion_heading[rel^='"+activeTab+"']").addClass("d_active");

    var target = $('.tabs');
    $('html,body').animate({
      scrollTop: target.offset().top + -100
    }, 1000);
  });

  /* accordion mode */
  $(".tab-accordion_heading").click(function() {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#"+d_activeTab).fadeIn();

    $(".tab-accordion_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");

    var dtarget= $('.tab_container');
    $('html,body').animate({
      scrollTop: dtarget.offset().top + -100
    }, 1000);
  });
  if(window.location.hash) {
    release = window.location.hash.substring(1).replace(/\./g,'-');
    $('[rel=' + release + ']').click();
  }
};
