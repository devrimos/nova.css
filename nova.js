var bgColor=document.querySelectorAll("[data-bgColor]");bgColor.forEach(element=>{element.style.backgroundColor=element.getAttribute("data-bgColor");})
var bgImg=document.querySelectorAll("[data-bgImg]");for(var i=0;i<bgImg.length;i++){var src=bgImg[i].getAttribute('data-bgImg');bgImg[i].style.backgroundImage="url('" + src + "')";}
var bColor=document.querySelectorAll("[data-bColor]");bColor.forEach(element=>{element.style.borderColor=element.getAttribute("data-bColor");})
var color=document.querySelectorAll("[data-color]");color.forEach(element=>{element.style.color=element.getAttribute("data-color");})
var width=document.querySelectorAll("[data-w]");width.forEach(element=>{element.style.width=element.getAttribute("data-w");})
var minWidth=document.querySelectorAll("[data-min-w]");minWidth.forEach(element=>{element.style.minWidth=element.getAttribute("data-min-w");})
var maxWidth=document.querySelectorAll("[data-max-w]");maxWidth.forEach(element=>{element.style.maxWidth=element.getAttribute("data-max-w");})
var height=document.querySelectorAll("[data-h]");height.forEach(element=>{element.style.height=element.getAttribute("data-h");})
var minHeight=document.querySelectorAll("[data-min-h]");minHeight.forEach(element=>{element.style.minHeight=element.getAttribute("data-min-h");})
var maxHeight=document.querySelectorAll("[data-max-h]");maxHeight.forEach(element=>{element.style.maxHeight=element.getAttribute("data-max-h");})
document.querySelector(".dark-btn").onclick=function(){var dark=document.querySelector("body");dark.classList.add("dark");}
document.querySelector(".no-dark-btn").onclick=function(){var noDark=document.querySelector("body");noDark.classList.remove("dark");}
