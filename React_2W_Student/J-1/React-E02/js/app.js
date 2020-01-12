
var tasks = [
    {
        label: 'Finir le cours vivants',
        done: true,
    },
    {
        label: 'Regarder Raph à la télé (18h)',
        done: false,
    },
    {
        label: 'Manger',
        done: false,
    }
];

var app = {
    init: function () {
        // Récupération de la racine du DOM (point d'injection).
        app.root = document.getElementById('todo');
        
        // (Re)création du formulaire de création de tâche.
        app.createForm();
        // (Re)création du compteur de tâches.
        // app.createCounter();
        // (Re)création de la liste des tâches.
        app.createList();
    },
    createForm: function () {
        console.log('createForm');

        // Création du formulaire
        var form = document.createElement('form');
        form.id = 'todo-form';
        form.addEventListener('submit', app.addTask);

        // Création de l'input
        app.input = document.createElement('input');
        app.input.id = 'todo-input';
        app.input.type = 'text';
        app.input.placeholder = 'Ajouter une tâche';

        // Ajout de l'input dans le form
        form.appendChild(app.input);

        // Ajout du formulaire au DOM
        app.root.appendChild(form);
    },
    addTask: function (objEvent) {
        objEvent.preventDefault();

        console.log('addTask');

        // Génération d'une nouvelle tâche
        var taskToSend = {
            label: app.input.value,
            done: false,
        }

        // envoi d'une nouvelle tâche vers l'object Tasks
        tasks.push(taskToSend);
        alert('Saisie validée');

        app.reloadList();
        
        // Nettoyage du champ de formulaire
        app.input.value = '';
    },
    createList: function () {
        console.log('creatList');

        // créer une liste 
        app.list = document.createElement('ul');
        app.list.id = 'todo-ul';

        tasks.forEach(app.generateTask);

        // ajouter au DOM
        app.root.appendChild(app.list);
    },
    generateTask: function (objTask) {
        var task = document.createElement('li');
        task.className = 'task';


        // Définition du contenu de la tâche.
        var label = document.createElement('span');
        label.textContent = objTask.label;
        label.className = 'task-label';

        // si la tache est done --> ajouter une class
        if(objTask.done==true){
            label.classList.add('task--done');
        }

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = objTask.done;

        checkbox.addEventListener('change',()=>{
            objTask.done = !objTask.done;
            app.reloadList();
        })

        // Ajout hiérarchique des éléments virtuels.
        task.appendChild(checkbox);
        task.appendChild(label);

        // Ajout de la tâche à la liste actuelle (affichage dans la page !).
        app.list.appendChild(task);

    },
    reloadList: ()=>{
        app.list.innerHTML='';
        tasks.forEach(app.generateTask);
    }
};

document.addEventListener('DOMContentLoaded', app.init())





















// /**
//  * Application JS : Todo-list.
//  */

// /**
//  * Données brutes initiales (évolueront en fonction des interactions utilisateur).
//  */
// // État initial - données de base
// const tasks = [
//     {
//       label: 'Finir le cours vivants',
//       done: true,
//     },
//     {
//       label: 'Regarder Raph à la télé (18h)',
//       done: false,
//     },
//     {
//       label: 'Manger',
//       done: false,
//     }
//   ];

//   const app = {
//     // Point d'entrée de l'application.
//     init: function() {
//       // Récupération de la racine du DOM (point d'injection).
//       app.root = document.getElementById('todo');
//       // On vide l'UI de la todo-liste, qui sera déduite des données actuelles.

//       // (Re)création du formulaire de création de tâche.
//       app.createForm();
//       // (Re)création du compteur de tâches.
//       // app.createCounter();
//       // // (Re)création de la liste des tâches.
//       app.createList();
//     },
//     // Création du formulaire de création de tâches.
//     createForm: function() {
//       console.log('createForm');

//       // Création d'un formulaire.
//       const form = document.createElement('form');
//       form.addEventListener('submit', app.addTask);

//       // Création d'un input.
//       const input = document.createElement('input');
//       input.id = 'todo-input';
//       input.type = 'text';
//       input.placeholder = 'Ajouter une tâche';
//       app.input = input; // accès global sur l'objet-application

//       // Ajouter l'input au form
//       form.appendChild(input);

//       // Ajout du formulaire au DOM (affichage dans la page !).
//       app.root.appendChild(form);
//     },
//     // Création du compteur de tâches.
//     createCounter: function() {
//       console.log('createCounter');

//       // Création du bloc pour le compteur.
//       const counter = document.createElement('div');
//       counter.id = 'todo-counter';
//       app.counter = counter;

//       const tasksUndone = tasks.filter(function(task) {
//         return !task.done;
//       });

//       // Définition du texte du compteur.
//       counter.textContent = `${tasksUndone.length} tâche(s) en cours`;

//       // Ajout du compteur au DOM (affichage dans la page !).
//       app.root.appendChild(counter);
//     },
//     // Création de la liste des tâches.
//     createList: function() {
//       console.log('createList');
//       // Création de la liste de tâches.
//       const list = document.createElement('ul');
//       app.list = list;
//       app.list.id = 'list';

//       tasks.forEach(app.generateTask);

//       // Ajout de la liste au DOM (affichage dans la page !).
//       app.root.appendChild(list);
//     },
//     // Génération d'une nouvelle tâche.
//     generateTask: function(data) {
//       const task = document.createElement('li');
//       task.className = 'task';

//       // Gestion de l'état de la tâche créée :

//       // si la tache est effectuée, je rajoute task--done
//       if (data.done) {
//         task.classList.add('task--done');
//       }

//       // Définition du contenu de la tâche.
//       const label = document.createElement('span');
//       label.textContent = data.label;
//       label.className = 'task-label';

//       // Checkbox d'interaction sur la tâche.
//       const checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.checked = data.done;

//       // Écouteur d'événement pour changer l'état de la tâche.
//       checkbox.addEventListener('change', function() {
//         data.done = !data.done;
//         app.createList();
//       });

//       // Ajout hiérarchique des éléments virtuels.
//       task.appendChild(checkbox);
//       task.appendChild(label);

//       // Ajout de la tâche à la liste actuelle (affichage dans la page !).
//       app.list.appendChild(task);
//     },
//     // Ajout d'une tâche.
//     addTask: function(evt) {
//       evt.preventDefault();

//       // trim : on enlève les espaces en trop, s'il y en a.
//       const value = app.input.value.trim();

//       // Génération d'une nouvelle tâche.
//       tasks.push({
//         label: value,
//         done: false
//       });
//       app.createList();

//       // Nettoyage du champ de formulaire.
//       app.input.value = '';
//     },

//   };
//   // Au chargement du DOM, on lance l'application.
//   document.addEventListener('DOMContentLoaded', app.init);