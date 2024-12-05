//Moj JS kod
//fukcija za dugme read more
function readmore1(readmored,readmoret,trajanje){
    let dugmeprikazi=document.getElementById(readmored);
    let josteksta=document.getElementById(readmoret);
    let show=false;

    dugmeprikazi.addEventListener("click",function(event){
        event.preventDefault()
        
        josteksta.classList.remove("invisible");
        dugmeprikazi.classList.add("invisible");
        dugmeprikazi.classList.add("fade-out");
        show=true;
        
        if(show){
            setInterval(function(){
                josteksta.classList.add("invisible");
                dugmeprikazi.classList.remove("invisible");
                dugmeprikazi.classList.remove("fade-out");
            },trajanje);
        }
    });
}
//read more
document.addEventListener("DOMContentLoaded",function(){
    let dugmeprikazi2="dugmeprikazi";
    let josteksta2="josteksta";
    readmore1(dugmeprikazi2,josteksta2,4000);
    let dugmeprikazi3="dugmeprikazi1";
    let josteksta3="josteksta1";
    readmore1(dugmeprikazi3,josteksta3,4000);
   
})
  


//header 
document.addEventListener("DOMContentLoaded",function(){
    var burgerbutt=document.querySelector(".navbar-toggler");
    var navbarContent=document.querySelector(".navbar-collapse");
    var navlistdata={
        logoname:"A MECHANIC",
        navItem:[
            {text:"Home",link:"index.html"},
            {text:"About",link:"about.html"},
            {text:"Services",link:"service.html"},
            {text:"Author",link:"author.html"},
        ]
    };

document.getElementById("Brand-name").textContent=navlistdata.logoname;
var containerCon=document.querySelector(".navbar-nav");
for(var i=0; i<navlistdata.navItem.length;i++){
    var item=navlistdata.navItem[i];
    var itemlist=document.createElement("li");
    itemlist.className="nav-item";
    var link=document.createElement("a");
    link.className="nav-link";
    link.href=item.link;
    link.textContent=item.text;

    itemlist.appendChild(link);
    containerCon.appendChild(itemlist);
}
})
//kraj headera
//pocetak footera
document.addEventListener("DOMContentLoaded",function(){
    let data={
        address:{
            icon:"fa fa-map-marker",
            text:"Zdravka Celara 16",
            link:"#",
        },
        phone:{
            icon:"fa fa-phone",
            text:"+381 65 464 2673",
            link:"#",
        },
        email:{
            icon:"fa fa-envelope",
            text:"amechanic@gmail.com",
            link:"mailto:amechanic@gmail.com",
        },
        sitemap:{
            icon:"fa fa-sitemap",
            text:"Sitemap",
            link:"sitemap.xml",
        },
        rss:{
            icon:"fa fa-rss",
            text:"Rss",
            link:"rss.xml",
        },
        socials:[
            {icon:"fa fa-facebook",link:"https://www.facebook.com/"},
            {icon:"fa fa-twitter",link:"https://x.com/?lang=en"},
            {icon:"fa fa-youtube",link:"https://www.youtube.com/"},
            {icon:"fa fa-instagram",link:"https://www.instagram.com/"}
        ]
        
    };
    let infocontainer=document.querySelector(".ovde");
    let infoarray=["address","phone","email","sitemap","rss"];
    
    for(let i=0;i<infoarray.length;i++){
        let key=infoarray[i];
        let item=data[key];
        let coldiv=document.createElement("div");
        coldiv.className="col-md-4";
        let link=document.createElement("a");
        link.href=item.link;
        let itemdiv=document.createElement("div");
        itemdiv.className="item ";
        let imgbox=document.createElement("div");
        imgbox.className="img-box";
        let icon=document.createElement("i");
        icon.className=item.icon;
        icon.setAttribute("aria-hidden","true");
        let paragraph=document.createElement("p");
        paragraph.textContent=item.text;
        imgbox.appendChild(icon);
        itemdiv.appendChild(imgbox);
        itemdiv.appendChild(paragraph);
        link.appendChild(itemdiv);
        coldiv.appendChild(link);
        infocontainer.appendChild(coldiv);
      };
        
        
    
      let socialsContainer = document.querySelector(".social");
      for (let i = 0; i < data.socials.length; i++) {
        let social = data.socials[i];
        let socialLink = document.createElement("a");
        socialLink.href = social.link;
        socialLink.innerHTML = `<i class="${social.icon}" aria-hidden="true"></i>`;
        socialsContainer.appendChild(socialLink);
      }
    

});
//kraj footera
//services

let services=[
    {
        title:"Maintenance",
        description:"We offer reliable maintenance services to ensure your systems run smoothly and efficiently.",
        imageUrl:"images/s1.png",
    },
    {
        title:"Electrical",
        description:"Our expert electrical services ensure safe and efficient solutions for all your power needs.",
        imageUrl:"images/s2.png",
    },
    {
        title:"Plumbing",
        description:"Our plumbing services provide efficient solutions for all your water and drainage needs.",
        imageUrl:"images/s3.png",
    },
    {
        title:"Carpenty",
        description:"Professional woodwork services, including custom furniture, structural repairs, and detailed craftsmanship to enhance your space.",
        imageUrl:"images/s4.png",
    },
    {
        title:"Roofing",
        description:"Professional installation, repair, and maintenance services for all types of roofs to ensure durability and protection.",
        imageUrl:"images/s5.png",
    },
    {
        title:"Masonry",
        description:"High-quality brick, stone, and concrete work for durable and aesthetically pleasing structures and surfaces.",
        imageUrl:"images/s7.png",
    },
];

let serviceContainer=document.querySelector("#service");
function Services(startIndex, endIndex) {
    serviceContainer.innerHTML = "";
    for (let i = startIndex; i < endIndex; i++) {
      let service = services[i];

      let serviceBox = document.createElement("div");
      serviceBox.className = " col-md-6 col-lg-4"; 
      
      let box = `
        <div class="box">
          <div class="img-box">
            <img src="${service.imageUrl}" alt="">
        </div>
        <div class="detail-box">
            <h5>${service.title}</h5>
            <p>${service.description}</p>   
        </div>
        </div>
      `;

      serviceBox.innerHTML = box;
      serviceContainer.appendChild(serviceBox);
    }
  }

    Services(0,3);

    let showmore=false;
    let tekstdugmeta=document.querySelector(".vise");
    console.log(tekstdugmeta);
    tekstdugmeta.addEventListener("click", (event) => {
        event.preventDefault();
        if (showmore) {
          tekstdugmeta.textContent = "Show More";
          Services(0,3);
        } else {
         tekstdugmeta.textContent= "Show Less";
          Services(0,services.length);
          
        }
        showmore = !showmore;
      });
    
// kraj service
//client section JQUERY
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,             // Enable continuous looping
      margin: 10,             // Margin between items
      nav: true,              // Show next/prev buttons
      autoplay: true,         // Enable auto play
      autoplayTimeout: 4000,  // Auto play delay (5 seconds)
      responsive: {
        0: {
          items: 1,           // 1 item
        },
        768: {
          items: 2,           // 2 item
        },
      },
    });
  });
//kraj client
//jquery loader
(function ($) {
  $.fn.loadingScreen = function (duration) {
    var $loadingScreen = this;

    function showLoadingScreen() {
      $loadingScreen.fadeIn(200);
    }

    function hideLoadingScreen() {
      $loadingScreen.fadeOut(200);
    }

    showLoadingScreen();

    setTimeout(function () {
      hideLoadingScreen();
    }, duration);
  };
})(jQuery);


$(document).ready(function () {
  $("#loading-screen").loadingScreen(2000); 
});

//forma
let serviceselect=document.getElementById("odaberi");
let ispis="";
let chooseniz=["Choose","Maintenance","Electrical","Plumbing","Carpenty","Roofing","Masonry"];

for(let i=0;i<chooseniz.length;i++){
    ispis+=`<option value="${i}">${chooseniz[i]}</option>`
}
serviceselect.innerHTML=ispis;


document.querySelector("#BtnDugme").addEventListener("click",function(event){
event.preventDefault();
let fullname=document.querySelector("#tbImePrezime");
let whichapartment=document.getElementsByName("apartment");
let tel=document.getElementById("phone");
let email=document.getElementById("email");



let brojgresaka=0;

//provera 
let reEmail= /^[a-z]((\.|-|)?[a-z0-9]){2,}@[a-z]((\.|-|)?[a-z0-9]+){2,}\.[a-z]{2,6}$/;
let reNumber = /^\+3816[\d]{6,9}$/;
let imeprezimeregex=/^[A-Zčćžšđ][a-zčćžšđ]{2,19}(\s[A-Zčćžšđ][a-zčćžšđ]{2,19})+$/;
if(!imeprezimeregex.test(fullname.value)){
  fullname.nextElementSibling.classList.add("prikazi");
  fullname.nextElementSibling.classList.remove("nevidljiv");
  brojgresaka++;
}
else{
  fullname.nextElementSibling.classList.remove("prikazi");
  fullname.nextElementSibling.classList.add("nevidljiv");
}
if(!reNumber.test(tel.value)){
  tel.nextElementSibling.classList.add("prikazi");
  tel.nextElementSibling.classList.remove("nevidljiv");
  brojgresaka++;
}
else{
  tel.nextElementSibling.classList.remove("prikazi");
  tel.nextElementSibling.classList.add("nevidljiv");
}
if(!reEmail.test(email.value)){
  email.nextElementSibling.classList.add("prikazi");
  email.nextElementSibling.classList.remove("nevidljiv");
  brojgresaka++;
}
else{
  email.nextElementSibling.classList.remove("prikazi");
  email.nextElementSibling.classList.add("nevidljiv");
}
if(serviceselect.value=="0"){
  serviceselect.nextElementSibling.classList.add("prikazi");
  serviceselect.nextElementSibling.classList.remove("nevidljiv");
  brojgresaka++;
}
else{
  serviceselect.nextElementSibling.classList.remove("prikazi");
  serviceselect.nextElementSibling.classList.add("nevidljiv");
}
let vrednostpol=false;
for(let i=0;i<whichapartment.length;i++){
  if(whichapartment[i].checked){
    vrednostpol=true
    break;
  }
}
if(!vrednostpol){
  whichapartment[whichapartment.length-1].parentElement.nextElementSibling.classList.add("prikazi");
  whichapartment[whichapartment.length-1].parentElement.nextElementSibling.classList.remove("nevidljiv");
  brojgresaka++;
}
else{
  whichapartment[whichapartment.length-1].parentElement.nextElementSibling.classList.remove("prikazi");
  whichapartment[whichapartment.length-1].parentElement.nextElementSibling.classList.add("nevidljiv");
  
}
if(brojgresaka==0){
  document.querySelector("#ispis").innerHTML="You have successfully contacted us, we are coming.";
}

})
//kraj forme