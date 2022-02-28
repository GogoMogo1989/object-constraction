/* const currentDate = new Date("1990/01/02");

console.log(currentDate);

 */

function Book(title, author, year, genre) {
     this.title = title;
     this.author = author;
     this.year = year;
     this.genre = genre;
     this.age = function(){
         const d = new Date();
         const currentYear = d.getFullYear()
         return currentYear - this.year;
     }
}

const myFavoriteBook = new Book("Háború és béke", "Tolsztoj", 1867, "historical novel");
console.log(myFavoriteBook.title)

const myFavoriteBookTwo = new Book("Algebra Alapjai", "Joe Algebra", 1992, "scifi")
console.log(myFavoriteBookTwo.age())