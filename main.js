const prompt = require("prompt-sync")();

const ROW = 3;
const COLS = 3;

const SYMBOLS_COUNT  = {

    A: 2,
    B: 4,
    C: 6,
    D: 8,
    
};
const SYMBOL_VALUES = {

    A: 5,
    B: 4,
    C: 3,
    D: 2,


}




function deposit(){
    while (true){
    const depositAmount = prompt("Enter a deposit amount [The amount must be positive]: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || (numberDepositAmount) <= 0 ){

        console.log("Invalid depopsit pleas try again with a valid response!");
        

    }else{

        return numberDepositAmount;
    }

  }

}



function getNumberofLines(){
  while (true){
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || (numberOfLines) <= 0 || numberOfLines > 3){

        console.log("Invalid numaric selection for lines, try again!");
        

    }else{

        return numberOfLines;
    }

  }

}


function getBet(balance){

      while (true){
    const bet = prompt("Enter the total bet: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || (numberBet) <= 0 || numberBet > balance / lines){

        console.log("Invalid bet, try again!");
        

    }else{

        return numberBet;
    }

  }

}

function spin (){

    const symbols = [];
    for (const [symbols, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbols)
        }


    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++ ){
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);

        }
    }

    return reels;
}




let balance = deposit();
const numberOfLines = getNumberofLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
