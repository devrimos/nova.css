var bgColor=document.querySelectorAll("[data-bgColor]");bgColor.forEach(element=>{element.style.backgroundColor=element.getAttribute("data-bgColor");})
var bgImg=document.querySelectorAll("[data-bgImg]");for(var i=0;i<bgImg.length;i++){var src=bgImg[i].getAttribute('data-bgImg');bgImg[i].style.backgroundImage="url('" + src + "')";}
var bColor=document.querySelectorAll("[data-bColor]");bColor.forEach(element=>{element.style.borderColor=element.getAttribute("data-bColor");})
var color=document.querySelectorAll("[data-color]");color.forEach(element=>{element.style.color=element.getAttribute("data-color");})
