class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name,
		this.releaseDate = releaseDate,
		this.pagesCount = pagesCount,
		this.state = 100,
		this.type = null
	}
	fix() {
		this.state *= 1.5;
	}
	set state (number) {
		if (number < 0) {number = 0;}
		if (number > 100) {number = 100;}
		this._state = number;
	}
	get state () {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super ();
		this.type = "magazine"
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount);
		this.author = author,
		this.type = "book"
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super (author);
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super (author);
		this.type = "fantastic"
	}
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super (author);
		this.type = "detective"
	}
}

class Library {
	constructor(name) {
		this.name = name,
		this.books = []
	}
	addBook(printItem) {
		if(printItem.state > 30) {
			this.books.push(printItem);
		}
	}
	findBookBy(type, value) {
		let searchItem = this.books.find(item => item[type] === value);
		if (searchItem) {
			return searchItem;
		} else {
			return null;
		}
	}
	giveBookByName(bookName) {
		const searcIndex = this.books.findIndex(item => item.name === bookName);
		if (searcIndex !== -1) {
			let givenBook = this.books[searcIndex];
			this.books.splice(searcIndex, 1);
			return givenBook;
		} else {
			return null;
		}
		
	}
}

class Student {
	constructor (name) {
  		this.name = name,
  		this.marks = {}
  	}
	addMark(mark, subject) {
		if (mark > 1 && mark < 6) {
			if (!this.marks[subject]) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(mark);
  		}
	}
	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			return 0;
		}
		let sum = this.marks[subject].reduce((acc, item) => acc + item, 0);
		return sum / this.marks[subject].length;
	}
	getAverage() {
		const arrSubjects = Object.keys(this.marks);
		if (arrSubjects.length > 0) {
			let sum = arrSubjects.reduce((acc, item) => acc + this.getAverageBySubject(item), 0);
			return sum / arrSubjects.length;
		}
		return 0;
	}
}
