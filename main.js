'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

const list = document.querySelector('.js-list');

function paintList(tasks) {
  for (const task of tasks) {
    console.log(task);

    list.innerHTML += `<li><input id=${task.name} type='checkbox'checked/>  ${task.name}</li>`;
  }
}
paintList(tasks);

const taskChecked= tasks.map((task)=>if(task.completed===true))

// function handleChecked() {
//   // console.log('click');
//   // console.log('Event target:', event.target);
//   // console.log('Event currentTarget:', event.currentTarget);
//   for (const task of tasks) {
//     console.log(task);
//     if (task.completed === true) {
//       task.classList.add('checked');
//     } else {
//       task.classList.remove('checked');
//     }
//   }
// }

// list.addEventListener('click', handleChecked);

// Nunca poner un return dentro de un bucle porque tras la primera iteración para (dado que return hace que deje de ejecturarse la función)

// Aquí task representa cada objet dentro del array tasks, es recomendable hacer un console.log DENTRO DEL BUCLE FOR para ver bien qué representa task

//Cuando el usuario haga click en un checkbox, la tarea aparecerá tachada:
