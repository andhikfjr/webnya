let books = [
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
    { id: 2, title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 4, title: 'Pemrograman Web', author: 'Totok Dewayanto' },
    { id: 5, title: 'Pengantar Akuntansi', author: 'Marsono' },
    // Add more book objects here
];

function searchBook() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery));
    displayBooks(filteredBooks);
}

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    displayBooks(books);
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    displayBooks(books);
}

function editBook(id) {
    const title = prompt('Enter new title:');
    const author = prompt('Enter new author:');
    books = books.map(book => {
        if (book.id === id) {
            return { ...book, title, author };
        }
        return book;
    });
    displayBooks(books);
}

function displayBooks(bookArray) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    bookArray.forEach(book => {
        const li = document.createElement('li');
        li.className = 'book-item';
        li.innerHTML = `
            <div>
                <strong>Title:</strong> ${book.title}
            </div>
            <div>
                <strong>Author:</strong> ${book.author}
            </div>
            <button class="button edit" onclick="editBook(${book.id})">Edit</button>
            <button class="button delete" onclick="deleteBook(${book.id})">Delete</button>
        `;
        bookList.appendChild(li);
    });
}

// Display all books when the page is first loaded
displayBooks(books);
