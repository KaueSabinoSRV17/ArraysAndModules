import { booksByCategory } from "./library/library.mjs"
import { 
    extractCategoryAndItsTotalOfBooks,
    makeAStringFromCategoryAndAmountObject,
    listAllBooksFromCategoriesObject,
    filterBooksByAuthor
} from "./library/libraryUtils.mjs"

const amountOfCategories = booksByCategory.length
const amountOfBooksInEachCategoryTitle = '\n\nAmount Of Books in Each Category\n\n'

const amountOfBooksInEachCategory = 
    booksByCategory
        .map(extractCategoryAndItsTotalOfBooks)
        .reduce(makeAStringFromCategoryAndAmountObject, amountOfBooksInEachCategoryTitle) 

const books = booksByCategory.reduce(listAllBooksFromCategoriesObject, [])
const booksFilteredByAuthor = filterBooksByAuthor(books, 'George S. Clason')

const resultmessage = 
    `Number of Categories: ${amountOfCategories}${amountOfBooksInEachCategory}`

// console.log(resultmessage)
console.log(booksFilteredByAuthor)