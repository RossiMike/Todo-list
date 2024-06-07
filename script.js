// Initialize the task list
let tasks = [];

// Load tasks from local storage if they exist
loadTasksFromLocalStorage();

// This function converts the tasks array to a JSON string and saves it to local storage.
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// This function retrieves the stored tasks from local storage and parses them back into an array.
function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

// This function creates a new task object with a unique ID, description, and default values for completed and progress.
function addTask(description) {
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description: description,
    completed: false,
    progress: "not started",
  };
  tasks.push(newTask);
  saveTasksToLocalStorage();
}

// This function creates options and declares which option will be showed depended on the progress
function createProgressOptions(selectedValue) {
  const options = ["not started", "in progress", "review", "done"];
  return options.map(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.text = option;
    if (option === selectedValue) opt.selected = true;
    return opt;
  });
}

// This function iterates over the tasks array and logs task details to the console.
function displayTasks(filteredTasks = tasks) {

  // Clears the area where the tasks are showed
  document.getElementById("taskList").innerHTML = "";

  // Creates all the elements that will be showed in the task area
  filteredTasks.forEach((task) => {

    //create list item for the task
    const taskItem = document.createElement("li");
    taskItem.className = task.complete ? "completed" : "";

    //create a span for the task description and progress
    const taskDescription = document.createElement("span");
    taskDescription.textContent = `${task.description} - ${task.progress}`;

    //create a select element
    const taskProgress = document.createElement("select");
    createProgressOptions(task.progress).forEach((element) => taskProgress.add(element));
    taskProgress.addEventListener("change", function(){
      updateTaskProgress(task.id, taskProgress.value);
      taskProgress.options[0].selected = true;
      displayTasks();
    });

    //create the complete button
    const completeButton = document.createElement("button");
    completeButton.className = "complete-button";
    completeButton.textContent = task.completed ? "Uncomplete" : "Complete";
    completeButton.addEventListener("click", function(){toggleTaskCompletion(task.id);
      
    });

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click" ,function(){deleteTask(task.id);})

    //create the update description button
    const updateDescriptionButton = document.createElement("button");
    updateDescriptionButton.className = "update-description-button";
    updateDescriptionButton.textContent = "Update Description";
    updateDescriptionButton.addEventListener("click", function(){promptUpdateDescription(task.id);
      displayTasks();
    })

    //append elements to the task item
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(updateDescriptionButton);
    taskItem.appendChild(taskProgress);

    //append elements to the taskList
    const taskList = document.getElementById("taskList");
    taskList.appendChild(taskItem);
  });
}

// This function finds a task by its ID and marks it as completed.
function completeTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = true;
    saveTasksToLocalStorage();
  } else {
    console.log("Task not found");
  }
}

// This function toggles the completed status of a task.
function toggleTaskCompletion(id) {
  if (tasks.length<1){
    return
  }
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = !task.completed;    
    saveTasksToLocalStorage();  
  } else {
    console.log("Task not found");
  }
  displayTasks();
  
}

// This function removes a task by its ID from the tasks array.
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasksToLocalStorage();
  displayTasks();
}

// This function returns an array of only the completed tasks.
function filterCompletedTasks() {
  return tasks.filter((task) => task.completed);
}

// This function sorts tasks so that incomplete tasks appear before completed tasks.
function sortTasksByCompleted() {
  return tasks.sort((a, b) => a.completed - b.completed);
}

// This function updates the description of a task with a given ID.
function updateTaskDescription(id, newDescription) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = newDescription;
    saveTasksToLocalStorage();
  } else {
    console.log("Task not found");
  }
}

// This function prompts the user to enter a new description and updates the task.
function promptUpdateDescription(id) {
  const newDescription = prompt("Enter new task description:");
  if (newDescription) {
    updateTaskDescription(id, newDescription);
  }
}

// This function updates the progress of a task with a given ID.
function updateTaskProgress(id, newProgress) {
  const task = tasks.find((task) => task.id === id);
  task.progress = newProgress;
  saveTasksToLocalStorage();
}

// This function calculates and logs the total number of tasks, the number of completed tasks, and the number of remaining tasks.
function generateTaskReport() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;
  // You will modify this function in Task 9 to produce HTML output instead of logging to the console.
  document.getElementById("taskReport").innerHTML = "";
  let paragraph = document.createElement("p");
  paragraph.textContent = `Total Tasks: ${totalTasks}, Completed Tasks: ${completedTasks}, Remaining Tasks: ${remainingTasks}`;
  document.getElementById("taskReport").appendChild(paragraph);
}

// Gives functionality to add task button
document.getElementById("addTaskButton").addEventListener("click", function () {
  let inputField = document.getElementById("taskDescription");
  if (inputField.value !== "") {
    addTask(inputField.value);
  }
  inputField.value = "";
  displayTasks();
})

// Gives functionality to show-all-button
document.getElementById("showAllTasksButton").addEventListener("click", function(){
  if (document.getElementById("taskList").innerHTML === ""){
    document.getElementById("showAllTasksButton").textContent = "Unshow All Tasks";
    displayTasks();
  }else{
    document.getElementById("showAllTasksButton").textContent ="Show All Tasks";
    document.getElementById("taskList").innerHTML = ""
  }
});

// Gives functionality to button show all completed tasks
document.getElementById("showCompletedTasksButton").addEventListener("click", function(){displayTasks(filterCompletedTasks())});

// Gives functionality to button sortTasksByCompletedButton
document.getElementById("sortTasksByCompletedButton").addEventListener("click", function(){displayTasks(sortTasksByCompleted())});

// Gives functionality to buton generatReportButton
document.getElementById("generateReportButton").addEventListener("click", function(){
  if (document.getElementById("taskReport").innerHTML ===""){
  generateTaskReport();
}else{
  document.getElementById("taskReport").innerHTML ="";
}
});