#! /usr/bin/env node

import inquirer from 'inquirer';

async function start_Func() {
    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter Number Between 1 - 10: "
        }
    ])
    const { userGuess } = userNum;
    console.log("Your Guess: ", userGuess, "\nSystem's Guess:", systemNum);
    if (userGuess === systemNum) {
        console.log("Your Guess Is Correct \nYou Won!");
    }
    else {
        console.log("Better Luck Next Time");
    }
}
async function start_again() {
    do {
        await start_Func();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue? Press Y or N"
        })
    }
    while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes")
}
start_again();
console.log("Complete By Bushrajan.")
