// Fonctionnalité 1
// Fonctionnalité 1-bis

var footer = document.querySelector('footer');
let x = 1

footer.addEventListener('click',function(){
    console.log("clique")
    console.log(`Clic numero :${x} `)
    x++
})


// Fonctionnalité 2 

var navbarHeader = document.querySelector('#navbarHeader');
var buttonNav = document.querySelector("button")

buttonNav.addEventListener('click',function(){

    navbarHeader.classList.toggle("collapse")
    
    
})

// Fonctionnalité 3

var btnEdit1 = document.querySelector(".btn-group").querySelectorAll("button")[1]
var text1 = document.querySelector(".card").querySelector("p")

btnEdit1.addEventListener('click',function(){
    text1.style.color= "red"
})

// Fonctionnalité 4

var btnEdit2 = document.querySelectorAll(".btn-group")[1].querySelectorAll("button")[1]
var text2 = document.querySelectorAll(".card")[1].querySelector("p")

btnEdit2.addEventListener('click',function(){
    
if (text2.style.color === 'green'){
    text2.style.color = '' ;
    }else{
        text2.style.color = 'green'
    }
})



// Fonctionnalité 5
var header = document.querySelector('header');
var bootstrap = document.querySelector('head').querySelector('link')


header.addEventListener('dblclick', function(){
    // bootstrap.setAttribute("href", ""
    //  )
    if (bootstrap.rel == "stylesheet") {
        bootstrap.rel = "";
      } else {
        bootstrap.rel = "stylesheet";
      }
   
})


// Fonctionnalité 6 :
var btnview = document.querySelectorAll(".btn-success")[0]
var paraCard = document.querySelectorAll(".card-text")[0]
var imgCard = document.querySelectorAll('.card-img-top')[0]

btnview.addEventListener('mouseover', function(){
    console.log('coucou')
    
})

console.log(paraCard)