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
            taskList.innerHTML += `<li><input type="checkbox" class="checked"> ${task.name}</li>`

        }else {
            taskList.innerHTML += `<li><input type="checkbox"> ${task.name}</li>`

        }
    }
}
renderTasks();