const getTheTitles = function(books) {
    let desiredProperty = (books, desiredKey) => books.map((element) => element[desiredKey]);
    let desiredKey = "title";
    return desiredProperty(books, desiredKey); 
};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
];

let result = getTheTitles(books);
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
