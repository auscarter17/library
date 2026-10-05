const bookContainerEl = document.getElementById("book-container")
const newBookButtonEl = document.querySelector(".new-book-btn")
const newBookFormEl = document.querySelector(".new-book-form")

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

function addBookToLibrary(bookTitle, bookAuthor, bookYear) {
    // add book to library using params
    myLibrary.push(
        { id: crypto.randomUUID(),
        title: bookTitle,
        author: bookAuthor,
        year: bookYear}
    )
}

addBookToLibrary("Eragon", "Christopher Paolini", 2002)

function displayBooks() {
    myLibrary.forEach((book) => {
        const newDiv = document.createElement("div")
        const newList = document.createElement("ul")

        newDiv.classList.add("book")

        bookContainerEl.appendChild(newDiv)
        newDiv.appendChild(newList)
        
        Object.entries(book).slice(1).forEach(([key, value]) => {
            const listItem = document.createElement("li")
            listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
            newList.appendChild(listItem)
        })
    })
}

newBookButtonEl.addEventListener("click", () => {
    newBookFormEl.classList.toggle("hidden")
    // add rules to switch button content depending on whether form is showing
})



displayBooks()