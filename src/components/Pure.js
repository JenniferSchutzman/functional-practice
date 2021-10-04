import React from "react";

// Pure functions = only input in, only input out 

// side effects are when it is doing something to the outside world other than that one input one output structure

// Pure function have no side effects 

//NOT PURE 
// no input and no output 
// grabbing the variable from outside the input 
// if the value changes I might not know it because it's pulling from a different place 
let name = 'Alonzo'
const NotPure = () => {
    console.log(`Hello, $name!`)
}
NotPure(); // "Hello, Alonzo!"
// if someone else change the name var 
// name = 'Alan'
NotPure(); // Hello, Alan!



// PURE 
// it doesn't do anything unless you pass it the correct input 
// everything is safely controlled inside each function => more predictable, safer, easier to debug and test
// each funciton shoudl do only 1 thing (1 computation even if complex and multipart) = this leads to smaller funcitions 
const Pure = (name) => {
    return (
        `Hello, ${name}`
    )
}

// SIDE EFFECTS
// do everything with functions
// program === function(s)
// no side effects here
const EverythingIsAFunc = (greeting, name) => {
    return (
        `${greeting} ${name}`
    )
}
// has side effects here 
// => takes data from the outside world
// => logging
let thesis = { name: "Church's", date: 1936 }
function renameThesis(newName) {
    thesis.name = newName;
    console.log('Renamed!')
}
renameThesis("Church-Turing"); // rename 
thesis; // {name: "Church-Turing", date: 1936}

// Same func WITHOUT sideeffects
// good to pass it many params bc all of it's data should be provided for that 1 return concept 
// if I pass it hte same params of immuatable data, I should always get the same result
// 
const thesis = { name: "Church's", date: 1936 };
function renameThesis(oldThesis, newName) {
    return {
        name: newName, data: oldThesis.date
    }
}
const thesis2 = renameThesis(thesis, "Church-Turing")
thesis; // {name: "Church's", date: 1936}
thesis2; // {name: "Church-Turing", date: 1936}

// not pure
function getDate() {
    return new Date().toDateString();
}
// not pure if output depends on anything except it's input (inncluding the state of the world)
// would have a different output depending on the day it's called

// pure
function getWorkshopDate() {
    return new Date(2020, 11, 4).toDateString();
}
// depends on nothing but its input
// always returns the same output if called with the samee input 

// pure 
function toHex(n) {
    let hex = n.toString(16);
    return hex.padStart(2, '0');
}
// pure if it's output depends on nothing but its input
// it does nothing expect return its output
// it always returns the same output if called with the same input 

// pure
function rgbToHex(R, G, B) {
    return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}


// not pure
function setColor(R, G, B) {
    const hex = rgbToHex(R, G, B);
    const colorMe = document.getElementById('color-me');
    colorMe.setAttribute('style', 'color: ' + hex);
}
// if anything changed in teh 'color-me' then the output would change

// not pure
async function readJsonFile(filename) {
    const file = await fetch(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
    );
    return await file.json();
}
// if the contents of the web-hosted file change, the output will change

// pure
function writeJsonString(object) {
    return JSON.stringify(object, null, 2);
}

// pure 
function computeTruthTable(operator) {
    const truthValues = [true, false];
    const table = [];
    for (const A of truthValues) {
        for (const B of truthValues) {
            const value = operator(A, B);
            table.push({ A, B, value });
        }
    }
    return table;
}

// not pure 
function showTruthTable(operator) {
    console.table(computeTruthTable(operator));
}
// doesn't do anything besides return its output
// any other effec tit has on the pgroam or world is a side effect (i.e. the console.log)
