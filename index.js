var lastScrollTop=0;
navbar=document.getElementById("navbar");
window.addEventListener("scroll",function(){
  var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top="-80px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop=scrollTop;
});

// for parallex

// const gg=document.getElementById("grab");
//
// window.addEventListener("scroll",function(){
//   let offset=window.pageYOffset;
//   gg.style.backgroundPositionY =offset*0.7 + "px";
// })

// SmoothScroll
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },900);
  }
});
