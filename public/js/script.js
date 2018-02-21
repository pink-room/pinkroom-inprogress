document.querySelector('#hello').addEventListener('click', function(){
  document.querySelector('section.hero .hero-body').classList.toggle("active");
  document.querySelector('.section-about').classList.toggle("active");
});
