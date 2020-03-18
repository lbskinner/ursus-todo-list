$(document).ready(init);

const tasks = [];

function init() {
  console.log("READY");
  // add event listener for add task button
  $(".js-add-task").on("click", addTask);
  // add event listener for complete button
  $(".js-todo-list").on("click", ".js-btn-complete", clickCompleteButton);
}

function addTask() {
  console.log("ADD NEW TASK");
  let taskName = $("#new-task").val();
  // create a task object
  let taskObj = {
    name: taskName,
    completed: false
  };
  // add new task to array of tasks
  tasks.push(taskObj);
  // clear input field
  $("#new-task").val("");
  // call render to add the new task to DOM
  render();
}

function render() {
  console.log("RENDER");
  // empty ul
  $(".js-todo-list").empty();
  for (let i = 0; i < tasks.length; i++) {
    $(".js-todo-list").append(`
      <li>${tasks[i].name}<button class="js-btn-complete" data-index="${i}">Complete</button></li>
      `);
  }
}

function clickCompleteButton() {
  console.log("COMPLETE BUTTON CLICKED");
  // check what is "this"
  console.log(this);
  // find the index of "this" task
  const taskIndex = $(this).data("index");
  console.log(taskIndex);
  // checks the boolean value of the task
  console.log(tasks[taskIndex].completed);
  // toggles the boolean value
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  // check the boolean value of the task again
  console.log(tasks[taskIndex].completed);
  render();
}
