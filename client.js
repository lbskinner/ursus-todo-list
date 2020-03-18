$(document).ready(init);

const tasks = [];

function init() {
  console.log("ready");
  // add event listener for add task button
  $(".js-add-task").on("click", addTask);
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
  for (let task of tasks) {
    $(".js-todo-list").append(`
      <li>${task.name}<button class="js-btn-complete">Complete</button></li>
      `);
  }
}
