class Cat {
    constructor(name) {
        this._name = name;
        this._tiredness = 10;
        this._hunger = 10;
        this._loneliness = 5;
        this._happiness = 0;
    }
    get name() {
        return this._name;
    }
    get tiredness() {
        return this._tiredness;
    }
    get hunger() {
        return this._hunger;
    }
    get loneliness() {
        return this._loneliness;
    }
    get happiness() {
        return this._happiness;
    }

    increaseSleep() {
        this._tiredness--;
    }
    increaseFeed() {
        this._hunger--;
    }
    increaseSnuggles() {
        this._loneliness--;
    }
    increasePlay() {
        this._happiness++;
    }
}

const bruno = new Cat('Bruno');
console.log(bruno.name);
bruno.increaseSleep();
console.log("Bruno slept all day! He's less tired now. His new tiredness status is now: " + bruno.tiredness);
bruno.increaseFeed();
console.log("Bruno has eaten! Yummy! His new hunger status is now: " + bruno.hunger);
bruno.increaseSnuggles();
console.log("Bruno says: Thanks for hanging out with me! I feel less lonely now. My new loneliness level is now " + bruno.loneliness);
bruno.increasePlay();
console.log("Bruno says: I love our new laser pointer! Thanks for playing with me. I am so much happier now! My new happiness level is now " + bruno.happiness);