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
var btnview = document.querySelectorAll(".btn-success")
var paraCard = document.querySelectorAll(".card-text")
var imgCard = document.querySelectorAll(".card-img-top")






for(let i = 0; i< btnview.length ; i++){

        btnview[i].addEventListener('mouseover', function(){

        if(imgCard[i].style.width === '20%'){
            paraCard[i].style.display = ''
            imgCard[i].style.width = '100%'
        }else{
            paraCard[i].style.display = 'none'
            imgCard[i].style.width = '20%'
        }
    })
    }

   
    
// Fonctionnalité 7 :
var btnGrey = document.querySelector(".btn-secondary")
var containerCard = document.querySelector(".album .row")


btnGrey.addEventListener("click",function(){
    containerCard.insertBefore(containerCard.lastElementChild, containerCard.firstElementChild)

})


// Fonctionnalité 8 :
var btnBlue = document.querySelector(".btn-primary")

btnBlue.addEventListener("click",function(){
    btnBlue.href = ""
    containerCard.nextSibling(containerCard.lastElementChild, containerCard.firstElementChild)

})

console.log(btnBlue)
