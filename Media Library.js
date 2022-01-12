// create parent Class
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._raitings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;

    }
    get raitings() {
        return this._raitings
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }


    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating() {
        let raitingSum = this.raitings.reduce((currentSum, raiting) => currentSum + raiting,0);
        const lengthOfArray = this.raitings.length;
        return raitingSum / lengthOfArray;
    }
    addRating(value) {
        this.raitings.push(value);
    }
    
}

//create Boook child class
class Book extends Media {
    constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
}
get author() {
    return this._author;
}
get pages() {
    return this._pages;
}
}

//create Movie class
class Movie extends Media {
    constructor(director,title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

//create CD class
class CD extends Media {
    constructor(artist,title,songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    //create shuffle method using Fisher-Yates algorithm to randomize items in the array
    shuffle() {
        const randomSongs = this._songs;
        for (let i = randomSongs.length -1; i>0; i--) {
            let j = Math.floor(Math.random() * (i +1));
            [randomSongs[i], randomSongs[j]] = [randomSongs[j], randomSongs[i]]
        }
        return randomSongs;
        
            }
            
          }
    

//Create Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//console.log(historyOfEverything.getAverageRating());
//console.log(historyOfEverything);

//create Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(5);
speed.addRating(5);
//console.log(speed.getAverageRating());
//console.log(speed);

//create CD instance
const rockCD = new CD('Linkin Park', 'Meteora', ['Intro', 'Easier to Run', 'Breaking the Habit', 'Numb', 'Hit the Floor', 'Faint', 'Session']);
rockCD.toggleCheckOutStatus();
rockCD.addRating(5);
rockCD.addRating(5);
rockCD.addRating(5);
//console.log(rockCD.getAverageRating());
//console.log(rockCD.shuffle());


