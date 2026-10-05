const bookContainerEl = document.getElementById("book-container")

const myLibrary = [
    { id: 1, title: "A Head Full of Ghosts", author: "Paul Tremblay", year: 2015 },
    { id: 2, title: "Within These Walls", author: "Ania Ahlborn", year: 2015 }
];

function Book() {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary() {
    // add book to library using params
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const newDiv = document.createElement("div")
        const newList = document.createElement("ul")

        newDiv.classList.add("book")

        bookContainerEl.appendChild(newDiv)
        newDiv.appendChild(newList)
        
        Object.entries(book).slice(1).forEach(([key, value]) => {
            const listItem = document.createElement("li")
            listItem.textContent = `${key}: ${value}`
            newList.appendChild(listItem)
        })
    })
}

displayBooks()