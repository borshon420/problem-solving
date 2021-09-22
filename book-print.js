function paperRequirements(book1, book2, book3){
    
    if(book1 > 0) {
        var firstBookCopy = book1 * 100;
    }
    if(book2 > 0) {
        var secondBookCopy = book2 * 200;
    }
    if(book3 > 0) {
        var thirdBookCopy = book3 * 300;
    }
    
    return totalBookPrice;
    
    // var secondBookCopy = book2 * 200;
    // var thirdBookCopy = book3 * 300;
    // return firstBookCopy;
    // return secondBookCopy;
    // thirdBookCopy;
}

var bookOne = paperRequirements(5, 2, 0);
console.log(bookOne);
