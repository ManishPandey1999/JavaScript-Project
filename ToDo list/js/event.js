const todoInput = document.querySelector('#todoListInput');
const addListButton = document.querySelector('#addTodoList');
const taskListContainer = document.querySelector('#taskList');
const totalListCounts = document.querySelector('#totalListCount');

function addtodoTaskList(){
    const todoInputText = todoInput.value.trim();
    if(todoInput.value === ""){
        alert("Please enter a task");
    } else{
        const newList = document.createElement('li')
        newList.innerHTML += `
            <i class="fa fa-square-o checkBoxContainer" onClick="this.classList.toggle('fa-check-square'); addTaskinLocaStorage()"></i> ${todoInputText} <i class="fa fa-trash deleteListItem" onClick="this.parentElement.remove(); nulltaskContainerText(); addTaskinLocaStorage();totalListTaskCount(); addTaskCountLocaStorage()"></i>
        `;
        taskListContainer.appendChild(newList);
    }
    todoInput.value = '';
    nulltaskContainerText();
    totalListTaskCount()
    addTaskinLocaStorage()
}

addListButton.addEventListener('click', function(){
    addtodoTaskList()
    addTaskinLocaStorage();
    addTaskCountLocaStorage();
})

function nulltaskContainerText(){
    const taskListText = document.querySelectorAll('#taskList li');
    if(taskListText.length === 0){
        document.querySelector('.no-list-add').style.display = 'flex';
    } else{
        document.querySelector('.no-list-add').style.display = 'none';
    }
}

todoInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addtodoTaskList()
        nulltaskContainerText();
        addTaskinLocaStorage();
        addTaskCountLocaStorage();
    }
})

function totalListTaskCount(){
    const taskListText = document.querySelectorAll('#taskList li');
    totalListCounts.textContent = `Total List: ${taskListText.length}`;
    
}

function addTaskinLocaStorage(){
    localStorage.setItem('tododata', taskListContainer.innerHTML);
}

function getTasktoLocaStorage(){
    taskListContainer.innerHTML = localStorage.getItem('tododata')
}

function addTaskCountLocaStorage(){
    localStorage.setItem('todoCount', totalListCounts.textContent);
}

function getTaskCountLocaStorage(){
    totalListCounts.textContent = localStorage.getItem('todoCount')
}

getTasktoLocaStorage();

getTaskCountLocaStorage();