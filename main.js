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

 function paintList(tasks){
     for(const task of tasks){
         console.log(task);


        list.innerHTML += `<li><input type='checkbox'/>${task.name}</li>`
     }
 };
paintList(tasks);

// Nunca poner un return dentro de un bucle porque tras la primera iteración para (dado que return hace que deje de ejecturarse la función)

// Aquí task representa cada objet dentro del array tasks, es recomendable hacer un console.log DENTRO DEL BUCLE FOR para ver bien qué representa task

