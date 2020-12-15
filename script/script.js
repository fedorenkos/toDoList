'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),//input
    headerButton = document.querySelector('.header-button'), //кнопка 
    todoList = document.querySelector('.todo-list'), //ul
    todoCompleted = document.querySelector('.todo-completed'),
    todoItem = document.querySelector('.todo-item');

const todoData = [{
        value: 'Сварить кофе',
        completed: false
    },
    {
        value: 'Помыть посуду',
        completed: true
    }
];

const showText = function(){
    todoItem.textContent = localStorage.getItem('memory');
}
headerInput.addEventListener('click', function(){
    
    localStorage.setItem('memory', headerInput.value);
    
    showText();
});

const render = function() {
    
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item) {
        
        const li = document.createElement('li');
        li.classList.add('todo-item');
        // item.value = '';
        
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

        const todoRemoveBtn = document.querySelector('.todo-remove');
        todoRemoveBtn.addEventListener('click', function(e) {
            e.todoRemoveBtn.remove(target);
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
    render();
});

render();

