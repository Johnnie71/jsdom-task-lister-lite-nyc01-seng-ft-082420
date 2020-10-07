document.addEventListener("DOMContentLoaded", () => {

  function submitHandler(){
    const taskForm = document.querySelector('#create-task-form')
    taskForm.addEventListener('submit', function(e){
      e.preventDefault()
      const form = e.target
      const task = form["new-task-description"].value

      const taskLi = document.createElement('li')
      taskLi.textContent = task

      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'x'
      deleteButton.classList.add('delete')
      
      taskLi.append(deleteButton)

      const taskList = document.querySelector('#tasks')
      taskList.append(taskLi)

      form.reset()
    })
  }
    function clickHandler(){
      document.addEventListener('click', function(e){
        if(e.target.matches('.delete')){
          e.target.parentElement.remove()
        }
      })
    }
    
    submitHandler()
    clickHandler()
});


