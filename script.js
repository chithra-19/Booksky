// selecting popupbos, popup overlay, button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click" , function(){
    popupoverlay.style.display= "block"
    popupbox.style.display= "block"

})

var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click" , function(event){
    event.preventDefault()
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"
 
})

// select overall container , add-book,book-title,book-author,book-description

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var booktauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-desc-input")


addbook.addEventListener("click" , function(event){
    event.preventDefault(event)
    var div = document.createElement("div")
    div.setAttribute("class" ,"book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${booktauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="this.parentElement.remove()">Delete</button>
    `; 

   
    container.append(div)//adding the new container to the page
    popupoverlay.style.display="none"
    popupbox.style.display="none"


});