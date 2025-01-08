const myLibrary =[
    {title: "The 3 body problem" , author:"Liu Cixin", pageNum: 416, cover: `img.src="images/threeBody.jpg"`},
    {title: "The Dark Forest" , author:"Liu Cixin", pageNum: 518, cover: `img.src="images/darkForest.jpg"`},
    {title: "Deaths End" , author:"Liu Cixin", pageNum: 592, cover: `img.src="images/deathsEnd.jpg"`},
    {title: "Wizards First Rule" , author:"Terry Goodkind", pageNum: 836, cover: `img.src="images/Wizard's_First_Rule.jpg"`},
    {title: "Stone Of Tears" , author:"Terry Goodkind", pageNum: 979, cover: `img.src="images/Stone_of_Tears.jpg"`},
    {title: "Blood Of The Fold" , author:"Terry Goodkind", pageNum: 623, cover: `img.src="images/Blood_of_the_Fold.jpg"`},
] 













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