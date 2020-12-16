'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');


const todoData = [{
        value: 'Сварить кофе',
        completed: false
    },
    {
        value: 'Помыть посуду',
        completed: true
    }
];

const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach(function(item) {
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
            render();
        });


        const todoDeleteBtn = document.querySelector('.todo-remove');
        todoDeleteBtn.addEventListener('click', function() {
            // todoDeleteBtn.remove(li);
            item.style.display = 'none';
            todoDeleteBtn.remove(li);
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
    todoData.push(newTodo);
    localStorage.setItem('message', JSON.stringify(newTodo));
    render();


});

render();