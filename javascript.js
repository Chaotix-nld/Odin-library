//elements for modal//
const modal = document.getElementById("modalTotal");
const addBook = document.getElementById("newBook");
const close = document.getElementsByClassName("close")[0];

addBook.onclick = function(){
    modal.style.display = "flex";
}

close.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
}