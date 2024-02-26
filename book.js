const text =
  "name ,read , author , yearOfPublish , country / to kill a mockingbird , true , Harper Lee , 1960 , USA / 1984 , false , George orwell , 1949 , United Kingdom / war and peace ,true , Leo Tolstoy , 1869 , Russia ";
const bookstext = text.split("/");
const key = bookstext[0];
const formattedbookstext = bookstext.slice(1, bookstext.length);
const books = [];
const keys = key.split(",");
for (let i = 0; i < formattedbookstext.length; i++) {
  const currentbook = formattedbookstext[i];
  const values = currentbook.split(",");
  const book = {};


  for (let j = 0; j < keys.length; j++) {
    book[keys[j]] = values[j];
  }
  books.push(book);
 
}
console.log(books);



