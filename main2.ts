// Using Switch Operator

import inquirer from 'inquirer';

const quiz: {
    Question1: string,
    Question2: string,
    Question3: string,
    Question4: string,
    Question5: string,
} = await inquirer.prompt([
    {
        name: 'Question1',
        type: 'list',
        message: "What is TypeScript primarily used for?",
        choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
    },
    {
        name: 'Question2',
        type: 'list',
        message: "Which of the following is NOT a valid TypeScript data type?",
        choices: ["void", "any", "dynamic", "tuple"]
    },
    {
        name: 'Question3',
        type: 'list',
        message: " How do you denote a variable as readonly in TypeScript?",
        choices: ["const", "static", "readonly", "fixed"]
    },
    {
        name: 'Question4',
        type: 'list',
        message: "How do you specify that a function does not return anything in TypeScript?",
        choices: ["function myFunc(): undefined", "function myFunc(): void", "function myFunc(): null", "function myFunc(): None"]
    },
    {
        name: 'Question5',
        type: 'list',
        message: "How do you define a custom type in TypeScript?",
        choices: ["interface", "typedef", "type", "Both A and C"]
    }
]);

 let score: number = 0;

switch(quiz.Question1){
    case "Static Typing":
    console.log("1. Correct!");
    ++score;
    break;
    default:
        console.log("1. Incorrect");
}
switch(quiz.Question2){
    case "dynamic":
    console.log("2. Correct!");
    ++score;
    break;
    default:
        console.log("2. Incorrect");
}
switch(quiz.Question3){
    case "readonly":
    console.log("3. Correct!");
    ++score;
    break;
    default:
        console.log("3. Incorrect");
}
switch(quiz.Question4){
    case "function myFunc(): void":
    console.log("4. Correct!");
    ++score;
    break;
    default:
        console.log("4. Incorrect");
}
switch(quiz.Question5){
    case "Both A and C":
    console.log("5. Correct!");
    ++score;
    break;
    default:
        console.log("5. Incorrect");
};

console.log(score);