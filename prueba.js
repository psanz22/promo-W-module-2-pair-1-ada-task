'use strict';

const taskList = document.querySelector('.js-list');
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

/*
   1 - cuando el usuario marque la tarea como completada marcando el checkbox debe:
        - tarea tachada
        - modificar su estado (propiedad completed) en tasks
*/

const renderTasks = () => {
    for(let task of tasks){
        if(task.completed){
            taskList.innerHTML += `<li class="checked"><input id="${task.name}"type="checkbox" checked> ${task.name}</li>`

        }else {
            taskList.innerHTML += `<li><input type="checkbox" id="${task.name}"> ${task.name}</li>`

        }
    }
}
renderTasks();

const handleCheck = (event) => {
    const inputId = event.target.id;
    console.log(inputId);
    const taskIndex = tasks.findIndex((task) => {
    return task.name === inputId;
})
console.log(taskIndex);
    tasks[taskIndex].completed = event.target.checked;
    console.log(tasks);
}
renderTasks(task);
taskList.addEventListener('click', handleCheck);