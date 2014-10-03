
$(document).ready(function() {
  // add a task
  $(document).on('submit', '#task-form', function (e) {
    // By default, a form will switch pages when submitted.
    // this prevents that from happening and executes our
    //javascript instead
    e.preventDefault();

    var task = $('.task-input').val();
    $('.task-list').append('<li class="task">' + task + '<span class="remove-task"> &times;</span></li>');

    // reset the input state
    $('.task-input').val('')
  });

  // remove a task
  $(document).on('click', '.remove-task', function () {
    $(this).parent('li').remove();
  });
});
