'use strict';
//A partir de aquí clase de resolución de dudas, ejercicio del 27/02

/*
  1. Cuando el usuario entra en la página:
    - Pintar lista de tareas
      - Las tareas completas deben mostrarse tachadas (completed: true)
      - Las tareas completas deben tener el checkbox seleccionado
  
  2. Cuando el usuario marca una tarea como completada:
    - Debemos modificar su estado (propiedad completed) en el array task
    - mostrar tachada la tarea 
    - la tarea con el checkbox seleccionado
*/
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

const renderTAsks = (tasks) => {
    taskList.innerHTML = '';
  for(const task of tasks){

    if(task.completed){
        taskList.innerHTML += `<li class='crossOut'><input type="checkbox" checked id="${task.name}"><span>${task.name}</span></li>`
    } else {
        taskList.innerHTML += `<li ><input type="checkbox"  id="${task.name}"><span>${task.name}</span></li>`
    }


    // const checked = task.complete ? 'checked' : '';
    // const classLi = task.complete ? 'crossOut' : '';
    // taskList.innerHTML += `<li class=${classLi}><input type="checkbox" ${checked} ><span>${task.name}</span></li>`
   
  } 
}

renderTAsks(tasks);

const handleClickCheckbox = (event) => {
    //recogemos el valor del id del input
        const inputId = event.target.id;
        console.log(inputId);
        //Buscamos la tarea a través del id del input, que es su nombre
        const taskIndex = tasks.findIndex((task)=>{
            return task.name === inputId;
        })
        console.log(taskIndex);
                //Actualizamos el array

        tasks[taskIndex].completed = event.target.checked;
        console.log(tasks);

    renderTAsks(tasks);
}

taskList.addEventListener('click', handleClickCheckbox);