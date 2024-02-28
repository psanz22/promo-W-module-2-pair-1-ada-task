'use strict';

const GITHUB_USER = '<lejladzanko>';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const tasks = [];

const list = document.querySelector('.js-list');

function paintList(tasks) {
  console.log(tasks)
  for (const task of tasks) {
  
    list.innerHTML += `<li><input id=${task.name} type='checkbox'checked/>  ${task.name}</li>`;
  }
}

fetch('https://dev.adalab.es/api/todo')
.then((response) => response.json())
.then((data) => {
  console.log(data);
  const tasksUrl = data.results;
  paintList(tasksUrl);

})



// paintList(tasks);

// const taskChecked= tasks.map((task)=>if(task.completed===true))

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
