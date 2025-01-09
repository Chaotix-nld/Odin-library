//basic array layout//
const myLibrary =[
    {title: "The 3 body problem" , author:"Liu Cixin", pageNum: 416, cover: "images/threeBody.jpg"},
    {title: "The Dark Forest" , author:"Liu Cixin", pageNum: 518, cover: "images/darkForest.jpg"},
    {title: "Deaths End" , author:"Liu Cixin", pageNum: 592, cover: "images/deathsEnd.jpg"},
    {title: "Wizards First Rule" , author:"Terry Goodkind", pageNum: 836, cover: "images/Wizard's_First_Rule.jpg"},
    {title: "Stone Of Tears" , author:"Terry Goodkind", pageNum: 979, cover: "images/Stone_of_Tears.jpg"},
    {title: "Blood Of The Fold" , author:"Terry Goodkind", pageNum: 623, cover: "images/Blood_of_the_Fold.jpg"},
];

const contentBody = document.querySelector(".contentBody");
function buildLibrary(){
    

    //looping through array//
    for (i=0; i<myLibrary.length; i++){
        //creating cards//
        const bookCard = document.createElement("div");
            bookCard.classList.add("bookDisplay");
        contentBody.appendChild(bookCard);
        //adding content//
        const bookTitle = document.createElement("div");
            bookTitle.classList.add("bookTitle")
            bookTitle.textContent = myLibrary[i].title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement("div");
            bookAuthor.classList.add("bookAuthor");
            bookAuthor.textContent = "Author: " + myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        const bookCover = document.createElement("img");
            bookCover.classList.add("bookCover");
            bookCover.src = myLibrary[i].cover;
        bookCard.appendChild(bookCover);

        const bookPages = document.createElement("div");
            bookPages.classList.add("bookPages");
            bookPages.textContent = "pages: " + myLibrary[i].pageNum;
        bookCard.appendChild(bookPages);

        const bookFooter = document.createElement("div");
            bookFooter.classList.add("bookFooter");
        bookCard.appendChild(bookFooter);
        //crating deletebutton//
        const deleteButton = document.createElement("button");
            deleteButton.classList.add("material-symbols-outlined", "delete");
            deleteButton.setAttribute("id", i);
            deleteButton.setAttribute("onclick", "deleteItem(this.id)")
            deleteButton.textContent = "delete";
        bookFooter.appendChild(deleteButton);
        //creating the checkbox//
        const checkboxContainer = document.createElement("div");
            checkboxContainer.classList.add("checkboxContainer");
        bookFooter.appendChild(checkboxContainer);
        const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", "check"+i);
            checkbox.classList.add("checkbox");
        const checkboxLabel = document.createElement("label");
            checkboxLabel.setAttribute("for", "check"+i);
            checkboxLabel.classList.add("material-symbols-outlined", "checkboxLabel");
            checkboxLabel.textContent = "bookmark_check";
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkboxLabel);
    }
}

buildLibrary();

//delete function//
function deleteItem(id){
    let index = id;
    const newLib = myLibrary.splice(id, 1);
    contentBody.textContent = "";
    buildLibrary();
}
//add book function//
function submitBook(){
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const pageNum = document.getElementById('bookPages').value;

let newObject = {title: title, author: author, pageNum: pageNum, cover: "images/stockBook.png"}
    myLibrary.push(newObject);
    contentBody.textContent = "";
    buildLibrary();
}










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