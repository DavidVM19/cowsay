const wilder = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Bonjour ! Je m'appelle ${wilder.nom}, je suis du campus de ${wilder.campus}`),
    e : "oO",
    T : "U "
}));
