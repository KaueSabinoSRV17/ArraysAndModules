const toUpperCase = string => string.toUpperCase()
const onlyUniqueAuthors = (author, index, authors) => authors.indexOf(author) === index
const compareBookAuthorWithSearch = (book, search) => book.author.toUpperCase().includes(search)

const extractOneOrMoreAuthorsFromArray = (separetedAuthors, authors) => {
    authors.forEach(author => separetedAuthors.push(author)) 
    return separetedAuthors 
}

function listAllAuthorsFromBook(book) {
    const stringBetweenMoreThanOneAuthors = ' e '
    const {author} = book

    const listOfAuthorsInCurrentBook = author.split(stringBetweenMoreThanOneAuthors)
    return listOfAuthorsInCurrentBook.map(toUpperCase)
}

export function extractCategoryAndItsTotalOfBooks(item) {
    const {category, books} = item
    return {
        category,
        amountOfBooks: books.length
    }
}

export function makeAStringFromCategoryAndAmountObject(stringBeingBuild, item) {
    const {category, amountOfBooks} = item
    return stringBeingBuild + `${category}: ${amountOfBooks}\n`
}

export function listAllBooksFromCategoriesObject(books, category) {
    books.push(...category.books)
    return books
}

export function filterBooksByAuthor(listOfBooks, author) {
    const search = author.toUpperCase() // To have a more user frindelly search, we can put every term on Upper Case!
    const authorNames = 
        listOfBooks
            .map(listAllAuthorsFromBook)
            .reduce(extractOneOrMoreAuthorsFromArray)
            .filter(onlyUniqueAuthors)

    if (!authorNames.some(name => name.includes(search))) throw new Error('We Dont Have Books with that Author!')

    const booksFilteredByAuthor = listOfBooks.filter(book => compareBookAuthorWithSearch(book, search))

    return booksFilteredByAuthor 
}