if (localStorage.getItem('task-list') != undefined) {//check our localStorage
  const localData = localStorage.getItem('task-list')
  $('.task-list').html(localData)
}

$('.add-part').on('click', () => {
  const taskVal = $('.task-content').val()
  if (taskVal == "") {
    alert('You don\'t enter any task')
    return false
  }
  $('.task-content').val('')//Clear task-input;
  $('.task-list').append(`<li>
                          <span class="task-text">${taskVal}</span>
                          <div class="done-task d-flex justify-content-center align-items-center">
                          <i class="fa fa-check my-check"></i>
                          </div>
                          <span class="close-tag">&times;</span>
                           <div class="final-line"></div>
                          <a href="#" class="edit-block btn btn-primary">Edit</a>
                          </li>`)//add new element to task-list;
  localStorage.setItem('task-list', $('.task-list').html())//add our tasks to localStorage;
})

$('.task-list').on('click', '.close-tag', function () {
  $(this).parent().remove()//delete parent(task which we want to  delete)
  localStorage.setItem('task-list', $('.task-list').html())//add our tasks to localStorage;
})

$('.task-list').on('click', '.edit-block', function () {
  $(this).parent().append(`<div class="reset-task-div d-flex flex-column">
        <input type="text" placeholder="Your new task" class="update-information">
        <a href="#" class="btn btn-success update-item">Update</a>
    </div>`)//create edit form and append it
  let parentText = $(this).parent().children('.task-text').text()
  $('.update-information').attr('value', parentText)//add value to edit input
})

$('.task-list').on('click', '.update-item', function () {
  let newTaskValue = $(this).closest('.reset-task-div').find('.update-information').val();//new value of task
  $(this).closest('.task-list>li').find('.task-text').text(newTaskValue);//set new value to task
  $(this).closest('.reset-task-div').addClass('update-js-class')//hide our edit form
  localStorage.setItem('task-list', $('.task-list').html())//add our tasks to localStorage;
})


$('.task-list').on('click', '.my-check', function () {
  $(this).closest('.task-list>li').addClass('not-active-task')
  $(this).closest('.done-task').addClass('done-js-class')//change background of '.done-task' block
  $(this).closest('.task-list>li').children('.final-line').addClass('show-js-class')//show our line
  $(this).closest('.task-list>li').children('.reset-task-div').addClass('update-js-class')//hide our edit form(if it is open)
  $(this).closest('.task-list>li').children('.edit-block').prop('disabled', true);//element is not active
  $(this).closest('.task-list>li').children('.close-tag').prop('disabled', true)//element is not active
  localStorage.setItem('task-list', $('.task-list').html())//add our tasks to localStorage;
})


