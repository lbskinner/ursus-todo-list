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
  // check if input has value
  if (taskName != 0) {
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
  } else {
    // if input value is falsy do not allow adding new task
    alert("Please enter a new task!");
  }
}

function render() {
  console.log("RENDER");
  // empty ul
  $(".js-todo-list").empty();
  for (let i = 0; i < tasks.length; i++) {
    let bgClass = "notComplete";
    let completeBtn = `<button class="js-btn-complete btn" data-index="${i}">Complete</button>`;
    // check to boolean value, if true, include disabled as an attribute to button
    if (tasks[i].completed) {
      bgClass = "isComplete";
      completeBtn = `<button class="js-btn-complete btn" data-index="${i}" disabled>Complete</button>`;
    }
    // display task on page
    $(".js-todo-list").append(`
      <li class="${bgClass}">${tasks[i].name}${completeBtn}</li>
      `);
  }
}

function clickCompleteButton() {
  console.log("COMPLETE BUTTON CLICKED");
  // check what is "this"
  console.log(this);
  // find the index of "this" task
  const taskIndex = $(this).data("index");
  console.log("TASK INDEX;", taskIndex);
  // checks the boolean value of the task
  console.log("COMPLETED:", tasks[taskIndex].completed);
  // toggles the boolean value
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  // check the boolean value of the task again
  console.log("COMPLETED:", tasks[taskIndex].completed);
  // render the list to the page
  render();
}
