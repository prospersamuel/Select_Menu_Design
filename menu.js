let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let drop = document.getElementById("drop");
let ul = document.getElementById("list");
let img = document.getElementById("img");
let imgOption = document.getElementsByClassName("img-option");


for (option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        ul.classList.toggle("hide")
        drop.classList.toggle("rotate");
    }

}
options[0].addEventListener("click", function(){
    img.src = `img/facebook.jpg`
})

options[1].addEventListener("click", function(){
    img.src = `img/instagram.png`
})

options[2].addEventListener("click", function(){
    img.src = `img/pintetrest.png`
})
 
options[3].addEventListener("click", function(){
    img.src = `img/twitter.png`
})

options[4].addEventListener("click", function(){
    img.src = `img/whatsapp.png`
})

options[5].addEventListener("click", function(){
    img.src = `img/youtube.png`
})








selectField.addEventListener("click", function(){
    ul.classList.toggle("hide");
    drop.classList.toggle("rotate")

})