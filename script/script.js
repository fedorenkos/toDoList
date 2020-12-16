'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');


const todoData = JSON.parse(localStorage.getItem('message')) || [];
const saveToLocalStorage = function () {
    localStorage.setItem('message', JSON.stringify(todoData));
};
const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach(function(item, index) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';
        if (item.value === '') {
            return;
        }
        
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const todoCompletedBtn = li.querySelector('.todo-complete');

        todoCompletedBtn.addEventListener('click', function() {
            item.completed = !item.completed;
            saveToLocalStorage();
            render();
        });


        const todoDeleteBtn = li.querySelector('.todo-remove');
        todoDeleteBtn.addEventListener('click', function() {
            todoData.splice(index, 1);
            saveToLocalStorage();
            render();
        });
    });
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false
    };
    headerInput.value = '';
    todoData.push(newTodo);
    saveToLocalStorage();
    render();
});

render();