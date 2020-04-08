
window.onscroll = function showHeader() {
  var header = document.querySelector('header');
  if(window.pageYOffset > 130){
      header.classList.add('header_fixed'); 
      //document.querySelectorAll("body > header > ul > li.home.red").forEach(red=>red.classList.remove('red'));
  } else{
      header.classList.remove('header_fixed');
  }
  if(window.pageYOffset < 500){
    document.querySelectorAll("body > header > ul > li.home").forEach(home=>home.classList.add('red'));
    document.querySelectorAll("body > header > ul > li:nth-child(2) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(3) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(4)>span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(5)>span").forEach(option2=>option2.classList.remove('option2'));
  }
  if(window.pageYOffset > 500 && window.pageYOffset < 1000){
    document.querySelectorAll("body > header > ul > li.home.red").forEach(red=>red.classList.remove('red'));
    document.querySelectorAll("body > header > ul > li:nth-child(3) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(4)>span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(5)>span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(2) > span").forEach(option2=>option2.classList.add('option2'));
  }
  if(window.pageYOffset > 1000 && window.pageYOffset < 1900){
    document.querySelectorAll("body > header > ul > li.home.red").forEach(red=>red.classList.remove('red'));
    document.querySelectorAll("body > header > ul > li:nth-child(2) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(4)>span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(5)>span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(3) > span").forEach(option2=>option2.classList.add('option2'));
  }
  if(window.pageYOffset > 1900 && window.pageYOffset < 2600)
  {
    document.querySelectorAll("body > header > ul > li.home.red").forEach(red=>red.classList.remove('red'));
    document.querySelectorAll("body > header > ul > li:nth-child(2) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(3) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(5)>span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(4)>span").forEach(option2=>option2.classList.add('option2'));
  }
  if(window.pageYOffset > 2600 && window.pageYOffset < 3000) 
  {document.querySelectorAll("body > header > ul > li.home.red").forEach(red=>red.classList.remove('red'));
  document.querySelectorAll("body > header > ul > li:nth-child(2) > span").forEach(option2=>option2.classList.remove('option2'));
  document.querySelectorAll("body > header > ul > li:nth-child(3) > span").forEach(option2=>option2.classList.remove('option2'));
  document.querySelectorAll("body > header > ul > li:nth-child(4)>span").forEach(option2=>option2.classList.remove('option2'));
  document.querySelectorAll("body > header > ul > li:nth-child(5)>span").forEach(option2=>option2.classList.add('option2'));
  }
}

document.querySelector("body > header > ul > li:nth-child(3) > span").addEventListener('click', ()=> {
  if(event.type==='click'){
    document.querySelector("body > div.Portfolio").scrollIntoView({ behavior: 'smooth' });
}
});  
document.querySelector('body > header > ul > li:nth-child(2) > span').addEventListener('click', ()=> {
  if(event.type==='click'){
    document.querySelector("body > div.services").scrollIntoView({ behavior: 'smooth' });
}
});  

document.querySelector("body > header > ul > li:nth-child(4)>span").addEventListener('click', ()=> {
  if(event.type==='click'){
    document.querySelector("body > div.About-Us").scrollIntoView({ behavior: 'smooth' });
}
});  
document.querySelector("body > header > ul > li:nth-child(5)>span").addEventListener('click', ()=> {
  if(event.type==='click'){
    document.querySelector("body > div.Get-a-Quote").scrollIntoView({ behavior: 'smooth' });
}
});  

const handler1 = (event) => {
  if(event.type==='click' )
  {
    document.querySelectorAll("body > header > ul > li.home.red").forEach(red=>red.classList.remove('red'));
    document.querySelectorAll("body > header > ul > li:nth-child(2) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(3) > span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(4)>span").forEach(option2=>option2.classList.remove('option2'));
    document.querySelectorAll("body > header > ul > li:nth-child(5)>span").forEach(option2=>option2.classList.remove('option2'));
  }  
  if(event.target.classList.contains('home')){
    event.target.classList.add('red');  
    document.querySelector("body > header").scrollIntoView({ behavior: 'smooth' });
  }
  
  event.target.classList.add('option2');   
}

const handler2 = (event) => {
  if(event.target.classList.contains('web')){
  document.querySelectorAll("body > div.Portfolio > ul > li.all.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  document.querySelectorAll("body > div.Portfolio > ul > li.graphic.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  document.querySelectorAll("body > div.Portfolio > ul > li.artwork.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  
  }
 if(event.target.classList.contains('graphic')){
    document.querySelectorAll("body > div.Portfolio > ul > li.all.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
    document.querySelectorAll("body > div.Portfolio > ul > li.artwork.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
    document.querySelectorAll("body > div.Portfolio > ul > li.web.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
    }
    
  if(event.target.classList.contains('artwork')){
  document.querySelectorAll("body > div.Portfolio > ul > li.all.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  document.querySelectorAll("body > div.Portfolio > ul > li.graphic.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  document.querySelectorAll("body > div.Portfolio > ul > li.web.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
    }
if(event.target.classList.contains('all')){
  document.querySelectorAll("body > div.Portfolio > ul > li.artwork.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  document.querySelectorAll("body > div.Portfolio > ul > li.graphic.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  document.querySelectorAll("body > div.Portfolio > ul > li.web.selected2").forEach(selected2=>selected2.classList.remove('selected2'));
  }
  event.target.classList.add('selected2');    
}
function anim()
{
  document.querySelectorAll("body > div.Slider").forEach(Slider=>Slider.classList.add('to_left'))
  //document.querySelectorAll("body > div:nth-child(2) > img.iphone1").forEach(iphone1=>iphone1.classList.add('to_left'))
  //document.querySelectorAll("body > div.Slider > img.gor").forEach(gor=>gor.classList.add('to_left'))
  //document.querySelectorAll("body > div.Slider > img.iphone2").forEach(iphone2=>iphone2.classList.add('to_left'))
  //document.querySelectorAll("body > div.Slider > img.vert").forEach(vert=>vert.classList.add('to_left'))

  //document.querySelector("body > div.Slider > img.gor").addEventListener('animationend', passiv);
  //document.querySelectorAll("body > div:nth-child(2) > img.iphone1").forEach(iphone1=>iphone1.classList.add('passiv'))
  //document.querySelectorAll("body > div.Newslider > img.iphone2").forEach(iphone2=>iphone2.classList.add('passiv'))
  //document.querySelectorAll("body > div.Newslider > img.gor").forEach(gor=>gor.classList.add('passiv'))
  //document.querySelectorAll("body > div.Newslider > img.left").forEach(left=>left.classList.add('newleft'))
  //document.querySelectorAll("body > div.Newslider > img.right").forEach(right=>right.classList.add('newright'))
  document.querySelectorAll("body > div.Slider > img.iphone3.passiv").forEach(passiv=>passiv.classList.remove('passiv'))
  document.querySelectorAll("body > div.Slider > img.iphone3_left.passiv").forEach(passiv=>passiv.classList.remove('passiv'))
  document.querySelectorAll("body > div.Slider > img.iphone3_right.passiv").forEach(passiv=>passiv.classList.remove('passiv'))
}
function passiv()
{
  document.querySelectorAll("body > div:nth-child(2) > img.iphone1").forEach(iphone1=>iphone1.classList.add('passiv'))
  document.querySelectorAll("body > div.Newslider > img.iphone2").forEach(iphone2=>iphone2.classList.add('passiv'))
  document.querySelectorAll("body > div.Newslider > img.gor").forEach(gor=>gor.classList.add('passiv'))
  document.querySelectorAll("body > div.Newslider > img.vert").forEach(vert=>vert.classList.add('passiv'))
  document.querySelectorAll("body > div.Slider").forEach(Slider=>Slider.classList.remove('Slider'))
  document.querySelectorAll("body > div:nth-child(2)").forEach(Slider=>Slider.classList.add('Newslider'))
  
}
document.querySelector("body > header > ul").addEventListener('click', handler1);
document.querySelector('body > div.Portfolio > ul').addEventListener('click', handler2);
document.querySelector("body > div.Slider > img.left").addEventListener('click', anim)
//document.querySelector("body > div.Newslider > img.gor").addEventListener('animationend', passiv)
//document.querySelector("body > div.Newslider > img.iphone2").addEventListener('animationend', passiv)
//document.querySelector("body > div.Newslider > img.iphone1.to_left").addEventListener('animationend', passiv)



