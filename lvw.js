// This page was edited by LinuxUsersLinuxMint
var clss = document.getElementById("m_cs");
var menu = document.querySelector("#menu");
var bodd = document.querySelector("#bodyy");
var ss = document.querySelector("#s_s");

clss.onclick=function(){

if(menu.style.width=="60%"){
    menu.style.width=0;
    clss.innerHTML="🔎";
    clss.style.transform="rotate(360deg)";
    clss.style.transition=".4s";
    menu.style.transition=".4s";
}else{
    inp.focus();
    menu.style.width="60%";
    clss.innerHTML="⛔";
    clss.style.transform="";
}}

bodd.onmouseenter=function(){
    menu.style.width=0;
    clss.innerHTML="🔎";
    clss.style.transform="rotate(360deg)";
    clss.style.transition=".4s";
    menu.style.transition=".4s";
}

var choo = document.querySelector("#s_es");
var inp = document.querySelector("#s_bar");
var forms =document.querySelector("#form");
choo.onchange=function(){
let para = "ile ara";
let m1 = document.querySelector("#m1");
switch(choo.value){
    case "se1":
        m1.style.display="block";
        inp.placeholder= "VUHUV" +" "+ para;
        forms.action= "https://tr.vuhuv.com/?q=";
        m1.href= "https://tr.vuhuv.com/?k=0&p=1&d=1&q=haberler";
        m2.href= "https://www.vuhuv.com.tr/?k=0&p=1&d=1&q=hakk%C4%B1nda";
        break;

case "se2":

m1.style.display="block";

inp.placeholder= "ARTADO" +" "+ para;

forms.action= "https://www.artadosearch.com/search?i=";

m1.href= "https://www.artadosearch.com/Updates";

m2.href= "https://www.artadosearch.com/About";

break;

case "se3":

m1.style.display="block";

inp.placeholder= "AZİMLİ" +" "+ para;

forms.action= "https://azimli.org/a.php?q=";

m1.href= "https://azimli.org/sayfa/guncellemeler/";

m2.href= "https://azimli.org/sayfa/hakkimizda/";

break;

case "se4":

inp.placeholder= "TURTC" +" "+ para;

forms.action= "https://turtc.com/tr/mobil/index.php?page=search/web&search=";

m1.style.display="none";

m2.href= "https://turtc.com/hakkimizda/";

break;

case "se5":

inp.placeholder= "YETİTA" +" "+ para;

forms.action= "https://www.yetita.com/site-ara?kelime=";

m2.href= "https://www.yetita.com/hakkimizda";

m1.style.display="none";

break;

case "se6":

inp.placeholder= "BİLİVER" +" "+ para;

forms.action= "https://www.biliver.com/search?q=";

m2.href= "https://www.biliver.com/yerli-arama-motoru-biliver.pdf";

m1.style.display="none";

break;

case "se8":

inp.placeholder= "RASTGELELİK" +" "+ para;

forms.action= "http://www.rastgelelik.com/search?q=";

m2.href= "https://www.rastgelelik.com/faq/1-1#3";

m1.style.display="none";

break;

case "se9":

inp.placeholder= "ARARIM" +" "+ para;

forms.action= "http://ararim.net/ara?q=";

m1.style.display="none";

m2.href= "http://ararim.net/sayfa/ararim-yerli-arama-motoru";

break;

case "se10":

inp.placeholder= "COM" +" "+ para;

forms.action= "https://com.com.tr/ara/?q=";

m1.style.display="none";

m2.style.display="none";

break;

case "se11":

inp.placeholder= "YAANİ" +" "+ para;

forms.action= "https://www.yaani.com/#q=";

m1.style.display="none";

m2.href= "https://www.yaani.com.tr/hakkimizda";

break;

}}

forms.onsubmit=function(){

menu.style.width=0;

clss.innerHTML="🔎";

clss.style.transform="rotate(360deg)";

clss.style.transition=".4s";

menu.style.transition=".4s";

}

var mods =document.querySelector("#mode");

mods.onclick=function (){

if(mods.value==1){

bodd.style.filter="grayscale(1)";

menu.style.filter="grayscale(1)";

mods.value=0;

}else{

bodd.style.filter="grayscale(0)";

menu.style.filter="grayscale(0)";

mods.value=1;

}}
