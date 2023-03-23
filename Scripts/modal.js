document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
  document.querySelector('[href="#openUslugi"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
    window.open("Servise.html", "_self");
  });
  
  document.querySelector('[href="#openModal2"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal2').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close2"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal2').style.marginLeft = '0px';
  });
  document.querySelector('[href="#openUslugi2"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal2').style.marginLeft = '0px';
    window.open("Servise.html", "_self");
  });
});