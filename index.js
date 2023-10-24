const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];

//test franc:
// const langCode = (franc('Alle menslike wesens word vry')); // 'afr' Afrikaans
// console.log(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট')) //=> 'ben'
// console.log(franc('Alle menneske er fødde til fridom')) //=> 'nno'

const langCode = franc(input);
const language = langs.where("3", langCode);

if (language === undefined) {
    console.log("Sorry, couldn't figure it out. Try with more sample text.");
}else{
    console.log(`We guess that language is: ${language.name}.`.rainbow);
}

// node index.js 'Alle menneske er fødde til fridom'