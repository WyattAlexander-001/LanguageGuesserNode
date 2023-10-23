const franc = require('franc');
const langs = require('langs');

//test franc:
const langCode = (franc('Alle menslike wesens word vry')); // 'afr' Afrikaans
console.log(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট')) //=> 'ben'
console.log(franc('Alle menneske er fødde til fridom')) //=> 'nno'

const language = langs.where("3", langCode);
console.log(language.name); //=> 'Afrikaans'