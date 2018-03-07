var ind = 1;

document.querySelector('#hello').addEventListener('click', function(){
  var heroHeight = document.querySelector('section.hero .hero-body').offsetHeight;
  var heroContainerMarginLeft = document.querySelector('section.hero .hero-body .container').offsetLeft;
  console.log(heroContainerMarginLeft);

  document.querySelector('.section-about').style.marginLeft = heroContainerMarginLeft - 24 + "px";

  var aboutHeight = document.querySelector('.section-about').offsetHeight;

  var contentHeight = heroHeight + aboutHeight;

  document.querySelector('section.hero .hero-body').classList.toggle("active");

  if(ind === 1) {
    document.querySelector('.section-about').style.top = heroHeight - 48 + "px";
    if(window.innerHeight > contentHeight) {
      document.querySelector('section.hero .hero-body').style.minHeight = "100vh";
    } else {
      document.querySelector('section.hero .hero-body').style.minHeight = contentHeight + "px";
    }
    ind = 0;
  } else {
    document.querySelector('.section-about').style.top = "-200vh";
    document.querySelector('section.hero .hero-body').style.minHeight = "0";
    ind = 1;
  }

  document.querySelector('.section-about').classList.toggle("active");
});
