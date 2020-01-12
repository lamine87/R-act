/*
 * Exo2 : A ma guise
 *
 * Des datas sur les Simpsons nous proviennent d'un serveur, mais la structure
 * n'est pas top.
 *
 * Cela dit, vous n'avez pas trop envie d'aller voir le dev back pour qu'il
 * change les données — vraisemblablement, il n'a pas pris de douche depuis
 * longtemps, et de toute façon, il n'est pas connecté sur Slack.
 *
 * Coté JS, on préfererait avoir seulement une propriété `name` avec "Prénom Nom"
 * et une autre `young` qui contiendrait un booléen (true quand le personnage a
 * moins de 50 ans, sinon false). On souhaite que les infos inutiles ne soient
 * pas conservées.
 *
 * En gros, on souhaiterait passer d'un tableau à un autre tableau, en
 * transformant au passage les données, mais en conservant l'ordre des
 * personnages.
 *
 * Notions :
 * - JS : map (ES6)
 * - paradigmes : programmation fonctionnelle
 */

var datas = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];

var characters = datas.map(/* ... */);













/*
 * Tests
 */
var result = document.getElementById('test');
if (
  // On a désormais `name` et `young`
  characters[0].name === 'Marge Simpson'
  && characters[1].name === 'Ned Flanders'
  && characters[2].name === 'Charles Montgomery Burns'
  && characters[3].name === 'Waylon Smithers'
  && characters[0].young
  && !characters[1].young
  && !characters[2].young
  && characters[3].young

  // Les anciennes props ne doivent plus être définies
  && typeof characters[0].gender === 'undefined'
  && typeof characters[0].firstname === 'undefined'
  && typeof characters[0].lastname === 'undefined'
  && typeof characters[1].firstname === 'undefined'
  && typeof characters[1].lastname === 'undefined'
  && typeof characters[2].firstname === 'undefined'
  && typeof characters[2].lastname === 'undefined'
  && typeof characters[3].firstname === 'undefined'
  && typeof characters[3].lastname === 'undefined'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}


// ************************************************************************



https://meet.google.com/hwv-gayq-kiw
https://meet.google.com/hwv-gayq-kiw
https://meet.google.com/hwv-gayq-kiw
https://meet.google.com/hwv-gayq-kiw


///////////// CORRECTION DE l'EXO 1

 // recuperer l'element cible :
var target = document.getElementById('result');
console.log(target)

// function createLi(textPourLi){
//   var li = document.createElement('li');
//   li.textContent = textPourLi;
//   target.appendChild(li);
// }

// items.forEach(function(textPourLi){
//   var li = document.createElement('li');
//   li.textContent = textPourLi;
//   target.appendChild(li);
// });

// version fonction fléchée
items.forEach((textPourLi)=>{
  var li = document.createElement('li');
  li.textContent = textPourLi;
  target.appendChild(li);
});

// equivalent avec le for 
for (var i = 0; i < items.length; i++) {
  var li = document.createElement('li');
  li.textContent = items[i];
  target.appendChild(li);
}

//////// CORRECTION DU MAP EXO 2

/**
 * Implémentation sous forme d'un map avec sa fonction de traitement.
 */

// var characters=data.map(function(object){

//   var newObject = {};

//   newObject['name']= object.firstname + ' ' + object.lastname;

//   if(object.age > 50){
//     newObject['young']= false;
//   }else{
//     newObject['young']= true;
//   }

//   return newObject;
// })

// console.log(characters)


// version optimisé
var normalize = function(character) {
  return {
    name: character.firstname + ' ' + character.lastname,
    young: character.age < 50
  };
};

var characters = data.map(normalize);

// version mom
datas.map(function(objet){
  var newObjet ={};
  newObjet['name'] = objet.firstname + ' ' +objet.lastname;
  newObjet['young'] = objet.age<50;
  return newObjet;
})
