'use strict';

const GITHUB_USER = '<lejladzanko>';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const tasks = [];

const list = document.querySelector('.js-list');
const inputNewTask = document.querySelector('.js-input-new-task');
const buttonAdd = document.querySelector('.js-buttonA');

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


fetch(`https://dev.adalab.es/api/todo/${GITHUB_USER}`, {
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify(newTaskDataObject),
 })
   .then((response) => response.json())
   .then((data) => {
     if (data.success) {
       //Completa y/o modifica el código:
       //Agrega la nueva tarea al listado
       //Guarda el listado actualizado en el local storage
       //Visualiza nuevamente el listado de tareas
       //Limpia los valores de cada input
     } else {
       //muestra un mensaje de error.
     }
   });







// const handleNewTask = (event) => {
//   event.preventDefault();

//   // 1. Recoge el nombre de la tarea
//   const inputNewTaskValue = inputNewTask.value;

//   // 2. Crea un objeto para la nueva tarea
//   const newTask = {
//     name: inputNewTaskValue, // sustituye este string vacío por el nombre de la tarea nueva
//     completed: false,
//   };

//   // 3. Añade la nueva tarea al array de tareas
//   tasks.push(newTask);
//   console.log(data)

//   // 4. Vuelve a pintar las tareas
// };
// buttonAdd.addEventListener('click', handleNewTask);
