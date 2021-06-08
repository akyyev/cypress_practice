const { bind } = require("cypress/types/bluebird");

function myFunction() {
    console.log(arguments);
}

myFunction('a', 'b');

const myArrowFunction = () => {
    console.log(arguments['1'].main.paths);
}

myArrowFunction('c', 'd');


class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName() {
      console.log(this.heroName);
    }
  }
  
  const batman = new Hero('Batman');

  setTimeout(batman.logName.bind(batman), 1000);

class Hero2 {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName = () => {
      console.log(this.heroName);
    }
  }
  
  const batman2 = new Hero2('Batman');

  setTimeout(batman2.logName, 1000);