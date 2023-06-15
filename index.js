// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML; 

// Test 1
const input1 = 'I love coding'; // tableau avec texte => trad."whale talk"
const vowels = ['a', 'e', 'i', 'o', 'u']; // tableau voyelle  
const resultArray1 = []; // tableau vide  
let resultString1 = ''; // déclaration de la variable resultString

for (let j = 0; j < input1.length; j++) { 
   if (input1[j] === 'e') {
     resultArray1.push(input1[j]); 
   } else if (input1[j] === 'u') {
     resultArray1.push(input1[j]); 
   }
}

resultString1 = resultArray1.join('').toUpperCase(); // joindre les éléments de resultArray en une seule chaîne et mettre en majuscule

console.log("Traduction en baleine (I love coding) : " + resultString1);
console.log("Chantez en baleine (I love coding) : " + resultString1.split('').join('-').toUpperCase());

// Test 2
const input2 = 'Hi, Human'; // tableau avec texte => trad."whale talk"
const resultArray2 = []; 

for (let j = 0; j < input2.length; j++) { 
   if (input2[j] === 'e') { 
     resultArray2.push(input2[j]);  
   } else if (input2[j] === 'u') { 
     resultArray2.push(input2[j]);
   }
}

const resultString2 = resultArray2.join('').toUpperCase(); 


console.log("Traduction en baleine (Hi, Human) : " + resultString2);
console.log("Chantez en baleine (Hi, Human) : " + resultString2.split('').join('-').toUpperCase());

// Test 3
const input3 = 'a whale of a deal!'; // tableau avec texte => trad."whale talk"
const resultArray3 = [];

for (let j = 0; j < input3.length; j++) {
   if (input3[j] === 'e') {
     resultArray3.push(input3[j]);
   } else if (input3[j] === 'u') {
     resultArray3.push(input3[j]);
   }
}

const resultString3 = resultArray3.join('').toUpperCase();

console.log("Traduction en baleine (a whale of a deal!) : " + resultString3);
console.log("Chantez en baleine (a whale of a deal!) : " + resultString3.split('').join('-').toUpperCase());

