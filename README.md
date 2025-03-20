# Instructional Document: To-Do List App

## Assignment: Task Manager To-Do List

In this assignment, you will implement the JavaScript functionality for a To-Do List application. The app will allow users to add tasks, mark them as complete, and assign priority levels to each task. The tasks will be displayed as cards on the webpage. 

Each part of the assignment will walk you through the implementation of specific functionality using JavaScript.
![veve](./Example/Part1.gif)
### Instructions
DO NOT MODIFY THE CSS file for this assignment. Focus on implementing the JavaScript functionality using the provided HTML structure.

## **Part 1: Add Tasks**

### **Goal**: Implement functionality to add tasks to the list when the "Add Task" button is clicked.

<details>
  <summary>Code Preview</summary>
  <!-- Display example of the task -->
  <div class="task">
    <p>Example Task</p>
    <button>Done✅</button>
  </div>
</details>
<br/>

**Tasks**:
1. Capture the task title from the input field.
2. Capture the priority from the dropdown.
3. Create a new task object with the title and priority, and push it into the `tasks` array.
4. Call `renderTaskCards(tasks)` to update the task list on the page.

**JavaScript Language Feature**:
- **DOM Manipulation**: Use `document.getElementById` to access the input values and update the task list.
- **Event Handling**: Add an event listener using `addEventListener` for the "Add Task" button to trigger the task creation process.

Helpful links:
- [MDN: `document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [MDN: `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## **Part 2: Mark Tasks as Complete**

### **Goal**: Implement functionality to remove tasks from the list when the "Done✅" button is clicked on a task card.

<details>
  <summary>Code Preview</summary>
  <img src="example/Part2.gif" width=400/>
</details>
<br/>

**Tasks**:
1. Add an event listener to each "Done✅" button.
2. When clicked, remove the corresponding task from the page using `taskCardHTML.remove()`.

**JavaScript Language Feature**:
- **DOM Manipulation**: Use the `remove()` method to delete a task element from the document.
- **Event Handling**: Attach a separate event listener to each "Done" button.

Helpful links:
- [MDN: `Element.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
- [MDN: Event Handling in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

## **Part 3: Task Priority Indicator**

### **Goal**: Implement functionality to visually distinguish tasks by priority level.

<details>
  <summary>Code Preview</summary>
  <img src="example/Part3.gif" width=400/>
</details>
<br/>

**Tasks**:
1. Modify the task cards to display different border colors based on priority.
   - High priority = Red border
   - Medium priority = Yellow border
   - Low priority = Blue border
2. Apply the correct color to each task card based on its priority value.

**JavaScript Language Feature**:
- **Conditional Statements**: Use an `if-else` block to apply different styles based on the priority of each task.
- **DOM Manipulation**: Modify the `style.borderColor` property to change the appearance of the task card.

Helpful links:
- [MDN: `if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Modifying Styles in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_styles_and_javascript)

### Conclusion:
By completing this assignment, you will learn how to manipulate the DOM, handle events in JavaScript, and use basic control structures like `if-else` to create an interactive to-do list.