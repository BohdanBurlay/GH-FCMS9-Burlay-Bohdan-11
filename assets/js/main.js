if(localStorage.getItem('task-list')!=undefined){//check our localStorage
const localData=localStorage.getItem('task-list');$('.task-list').html(localData);}$('.add-part').on('click',()=>{const taskVal=$('.task-content').val();if(taskVal==""){alert('You don\'t enter any task');return false;}$('.task-content').val('');//Clear task-input;
$('.task-list').append(`<li>
                          <span class="task-text">${taskVal}</span>
                          <div class="done-task d-flex justify-content-center align-items-center">
                          <i class="fa fa-check my-check"></i>
                          </div>
                          <span class="close-tag">&times;</span>
                           <div class="final-line"></div>
                          <a href="#" class="edit-block btn btn-primary">Edit</a>
                          </li>`);//add new element to task-list;
localStorage.setItem('task-list',$('.task-list').html());//add our tasks to localStorage;
});$('.task-list').on('click','.close-tag',function(){$(this).parent().remove();//delete parent(task which we want to  delete)
localStorage.setItem('task-list',$('.task-list').html());//add our tasks to localStorage;
});$('.task-list').on('click','.edit-block',function(){$(this).parent().append(`<div class="reset-task-div d-flex flex-column">
        <input type="text" placeholder="Your new task" class="update-information">
        <a href="#" class="btn btn-success update-item">Update</a>
    </div>`);//create edit form and append it
let parentText=$(this).parent().children('.task-text').text();$('.update-information').attr('value',parentText);//add value to edit input
});$('.task-list').on('click','.update-item',function(){let newTaskValue=$(this).closest('.reset-task-div').find('.update-information').val();//new value of task
$(this).closest('.task-list>li').find('.task-text').text(newTaskValue);//set new value to task
$(this).closest('.reset-task-div').addClass('update-js-class');//hide our edit form
localStorage.setItem('task-list',$('.task-list').html());//add our tasks to localStorage;
});$('.task-list').on('click','.my-check',function(){$(this).closest('.task-list>li').addClass('not-active-task');$(this).closest('.done-task').addClass('done-js-class');//change background of '.done-task' block
$(this).closest('.task-list>li').children('.final-line').addClass('show-js-class');//show our line
$(this).closest('.task-list>li').children('.reset-task-div').addClass('update-js-class');//hide our edit form(if it is open)
$(this).closest('.task-list>li').children('.edit-block').prop('disabled',true);//element is not active
$(this).closest('.task-list>li').children('.close-tag').prop('disabled',true);//element is not active
localStorage.setItem('task-list',$('.task-list').html());//add our tasks to localStorage;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsImxvY2FsRGF0YSIsIiQiLCJodG1sIiwib24iLCJ0YXNrVmFsIiwidmFsIiwiYWxlcnQiLCJhcHBlbmQiLCJzZXRJdGVtIiwicGFyZW50IiwicmVtb3ZlIiwicGFyZW50VGV4dCIsImNoaWxkcmVuIiwidGV4dCIsImF0dHIiLCJuZXdUYXNrVmFsdWUiLCJjbG9zZXN0IiwiZmluZCIsImFkZENsYXNzIiwicHJvcCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBSUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEdBQXFDQyxTQUF6QyxDQUFvRCxDQUFDO0FBQ25ELEtBQU1DLENBQUFBLFNBQVMsQ0FBR0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQWxCLENBQ0FHLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLElBQWhCLENBQXFCRixTQUFyQixFQUNELENBRURDLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUUsRUFBZixDQUFrQixPQUFsQixDQUEyQixJQUFNLENBQy9CLEtBQU1DLENBQUFBLE9BQU8sQ0FBR0gsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksR0FBbkIsRUFBaEIsQ0FDQSxHQUFJRCxPQUFPLEVBQUksRUFBZixDQUFtQixDQUNqQkUsS0FBSyxDQUFDLDJCQUFELENBQUwsQ0FDQSxNQUFPLE1BQVAsQ0FDRCxDQUNETCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CSSxHQUFuQixDQUF1QixFQUF2QixFQUEwQjtBQUMxQkosQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk0sTUFBaEIsQ0FBd0I7b0RBQzBCSCxPQUFROzs7Ozs7O2dDQUQxRCxFQVErQjtBQUMvQlAsWUFBWSxDQUFDVyxPQUFiLENBQXFCLFdBQXJCLENBQWtDUCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCQyxJQUFoQixFQUFsQyxFQUF5RDtBQUMxRCxDQWpCRCxFQW1C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aEIsRUFBbEMsRUFBeUQ7QUFDMUQsQ0FSRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrLWxpc3QnKSAhPSB1bmRlZmluZWQpIHsvL2NoZWNrIG91ciBsb2NhbFN0b3JhZ2VcbiAgY29uc3QgbG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2stbGlzdCcpXG4gICQoJy50YXNrLWxpc3QnKS5odG1sKGxvY2FsRGF0YSlcbn1cblxuJCgnLmFkZC1wYXJ0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB0YXNrVmFsID0gJCgnLnRhc2stY29udGVudCcpLnZhbCgpXG4gIGlmICh0YXNrVmFsID09IFwiXCIpIHtcbiAgICBhbGVydCgnWW91IGRvblxcJ3QgZW50ZXIgYW55IHRhc2snKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gICQoJy50YXNrLWNvbnRlbnQnKS52YWwoJycpLy9DbGVhciB0YXNrLWlucHV0O1xuICAkKCcudGFzay1saXN0JykuYXBwZW5kKGA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10ZXh0XCI+JHt0YXNrVmFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRvbmUtdGFzayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBteS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtdGFnXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaW5hbC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlZGl0LWJsb2NrIGJ0biBidG4tcHJpbWFyeVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YCkvL2FkZCBuZXcgZWxlbWVudCB0byB0YXNrLWxpc3Q7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrLWxpc3QnLCAkKCcudGFzay1saXN0JykuaHRtbCgpKS8vYWRkIG91ciB0YXNrcyB0byBsb2NhbFN0b3JhZ2U7XG59KVxuXG4kKCcudGFzay1saXN0Jykub24oJ2NsaWNrJywgJy5jbG9zZS10YWcnLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykucGFyZW50KCkucmVtb3ZlKCkvL2RlbGV0ZSBwYXJlbnQodGFzayB3aGljaCB3ZSB3YW50IHRvICBkZWxldGUpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrLWxpc3QnLCAkKCcudGFzay1saXN0JykuaHRtbCgpKS8vYWRkIG91ciB0YXNrcyB0byBsb2NhbFN0b3JhZ2U7XG59KVxuXG4kKCcudGFzay1saXN0Jykub24oJ2NsaWNrJywgJy5lZGl0LWJsb2NrJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLnBhcmVudCgpLmFwcGVuZChgPGRpdiBjbGFzcz1cInJlc2V0LXRhc2stZGl2IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmV3IHRhc2tcIiBjbGFzcz1cInVwZGF0ZS1pbmZvcm1hdGlvblwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHVwZGF0ZS1pdGVtXCI+VXBkYXRlPC9hPlxuICAgIDwvZGl2PmApLy9jcmVhdGUgZWRpdCBmb3JtIGFuZCBhcHBlbmQgaXRcbiAgbGV0IHBhcmVudFRleHQgPSAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCcudGFzay10ZXh0JykudGV4dCgpXG4gICQoJy51cGRhdGUtaW5mb3JtYXRpb24nKS5hdHRyKCd2YWx1ZScsIHBhcmVudFRleHQpLy9hZGQgdmFsdWUgdG8gZWRpdCBpbnB1dFxufSlcblxuJCgnLnRhc2stbGlzdCcpLm9uKCdjbGljaycsICcudXBkYXRlLWl0ZW0nLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBuZXdUYXNrVmFsdWUgPSAkKHRoaXMpLmNsb3Nlc3QoJy5yZXNldC10YXNrLWRpdicpLmZpbmQoJy51cGRhdGUtaW5mb3JtYXRpb24nKS52YWwoKTsvL25ldyB2YWx1ZSBvZiB0YXNrXG4gICQodGhpcykuY2xvc2VzdCgnLnRhc2stbGlzdD5saScpLmZpbmQoJy50YXNrLXRleHQnKS50ZXh0KG5ld1Rhc2tWYWx1ZSk7Ly9zZXQgbmV3IHZhbHVlIHRvIHRhc2tcbiAgJCh0aGlzKS5jbG9zZXN0KCcucmVzZXQtdGFzay1kaXYnKS5hZGRDbGFzcygndXBkYXRlLWpzLWNsYXNzJykvL2hpZGUgb3VyIGVkaXQgZm9ybVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzay1saXN0JywgJCgnLnRhc2stbGlzdCcpLmh0bWwoKSkvL2FkZCBvdXIgdGFza3MgdG8gbG9jYWxTdG9yYWdlO1xufSlcblxuXG4kKCcudGFzay1saXN0Jykub24oJ2NsaWNrJywgJy5teS1jaGVjaycsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5jbG9zZXN0KCcudGFzay1saXN0PmxpJykuYWRkQ2xhc3MoJ25vdC1hY3RpdmUtdGFzaycpXG4gICQodGhpcykuY2xvc2VzdCgnLmRvbmUtdGFzaycpLmFkZENsYXNzKCdkb25lLWpzLWNsYXNzJykvL2NoYW5nZSBiYWNrZ3JvdW5kIG9mICcuZG9uZS10YXNrJyBibG9ja1xuICAkKHRoaXMpLmNsb3Nlc3QoJy50YXNrLWxpc3Q+bGknKS5jaGlsZHJlbignLmZpbmFsLWxpbmUnKS5hZGRDbGFzcygnc2hvdy1qcy1jbGFzcycpLy9zaG93IG91ciBsaW5lXG4gICQodGhpcykuY2xvc2VzdCgnLnRhc2stbGlzdD5saScpLmNoaWxkcmVuKCcucmVzZXQtdGFzay1kaXYnKS5hZGRDbGFzcygndXBkYXRlLWpzLWNsYXNzJykvL2hpZGUgb3VyIGVkaXQgZm9ybShpZiBpdCBpcyBvcGVuKVxuICAkKHRoaXMpLmNsb3Nlc3QoJy50YXNrLWxpc3Q+bGknKS5jaGlsZHJlbignLmVkaXQtYmxvY2snKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpOy8vZWxlbWVudCBpcyBub3QgYWN0aXZlXG4gICQodGhpcykuY2xvc2VzdCgnLnRhc2stbGlzdD5saScpLmNoaWxkcmVuKCcuY2xvc2UtdGFnJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKS8vZWxlbWVudCBpcyBub3QgYWN0aXZlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrLWxpc3QnLCAkKCcudGFzay1saXN0JykuaHRtbCgpKS8vYWRkIG91ciB0YXNrcyB0byBsb2NhbFN0b3JhZ2U7XG59KVxuXG5cbiJdfQ==
