
const action = document.querySelector('.action')


document.querySelector('.addbtn').addEventListener('click', (e) => {
    const todo = document.querySelector('#todo-input')
    if (!todo.value) {
        const alert = document.querySelector('.alert')
        const blur = document.querySelector('.todobox')
        alert.style.display = 'block'
        blur.classList.add('showBefore');
        // blur.style.display = 'block'
        setTimeout(() => {
            alert.style.display = 'none';
            blur.classList.remove('showBefore');
        }, 1000);
    } else {
        const li = document.createElement('li')
        li.setAttribute('class', 'todolist-item')

        li.innerHTML = `<span class="action"></span><span class="task">${todo.value}</span><span class="delete"><i class="fa-solid fa-circle-xmark trash"></i></span>`;

        const ul = document.querySelector('.todolist')
        ul.appendChild(li);

        todo.value = ''
        saveData();
    }
})

// date
const date = new Date()
document.querySelector('.date').appendChild(document.createTextNode(date.toDateString()))

// delete,check

const ul = document.querySelector('.todolist')
// console.log(ul);
ul.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('trash')){
        e.target.parentElement.parentElement.remove();
    }

    if(e.target.classList.contains('task') || e.target.classList.contains('action')){
        const list = e.target.parentElement
        const tick = list.classList.toggle('checked')
    }
    saveData()
})




// for saving in local
function saveData(){
    localStorage.setItem('data',ul.innerHTML)
}


function showTask(){
    ul.innerHTML = localStorage.getItem('data')
}

showTask();


