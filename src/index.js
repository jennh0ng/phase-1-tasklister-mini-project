// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// Suppress a default action with event.preventDefault()

// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM


// creates an event that loads onto the DOM - ensures all JS written under this line runs after DOM has fully loaded
document.addEventListener('DOMContentLoaded', (e) => {
  // create an event listener that allows us to submit our tasks
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    taskBuilder();
  })
})

document.body.style.background = "gray";

// these are the items we know we will be using from html.index
const taskInput = document.querySelector('#new-task-description');
const taskList = document.querySelector('#tasks');

// create a function that allows us to create lists
function taskBuilder() {
  let list = document.createElement('li');
  let input = taskInput.value;
  list.innerText = input + " ";
  let btn = document.createElement('button');
  btn.innerText = 'x';
  list.append(btn);
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  })
  taskList.append(list);
}