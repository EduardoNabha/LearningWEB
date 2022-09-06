let toDo = document.getElementsByName('toDoInput')

function showToDo (){
    document.querySelector('#result').textContent = toDo.join(', ')
}