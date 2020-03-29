
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

  if(event.type==='click')
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

/*document.querySelector('body > header > ul > li:nth-child(2) > span').addEventListener('click', ()=> {
  if(event.type==='click')
  {
  event.target.style.color='red';
  document.querySelector('body > header > ul > li.home').style.color= 'white';
  document.querySelector('body > header > ul > li:nth-child(3) > span ').style.color= '';
  document.querySelector('body > header > ul > li:nth-child(4) > span ').style.color= '';
  document.querySelector('body > header > ul > li:nth-child(5) > span ').style.color= '';
  document.querySelector("body > main > section.OurServices").scrollIntoView({ behavior: 'smooth' });
  }
  });*/
  

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


document.querySelector("body > header > ul").addEventListener('click', handler1);
document.querySelector('body > div.Portfolio > ul').addEventListener('click', handler2);


