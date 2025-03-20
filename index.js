
// Array to store tasks
const tasks = [];


function renderTaskCards(tasksToRender){
    let taskListHTML = document.getElementById("taskList")
    taskListHTML.innerHTML = null
    
    for(let i = 0; i < tasks.length; i++){
        let taskToRender = tasksToRender[i]
        
        let taskCardHTML = document.createElement("div")
        taskCardHTML.className = "task"

        let taskCardTitleHTML = document.createElement("p")
        taskCardTitleHTML.innerText = taskToRender.title

        let taskCardButtonHTML = document.createElement("button")
        taskCardButtonHTML.innerText = "Done✅"

        
        //PARTS 2 & 3
        
        // Remove the Done button when you click on it
        taskCardButtonHTML.addEventListener("click", () => taskCardHTML.remove())

        //Modify the task cards to display different border colors based on priority
        
        if (tasksToRender[i].priority === "medium") {
        taskCardHTML.style.borderColor = "yellow";
        }
        else if (tasksToRender[i].priority === "high") {
        taskCardHTML.style.borderColor = "red";
        }
        else if (tasksToRender[i].priority === "low") {
        taskCardHTML.style.borderColor = "blue";
        }

        taskCardHTML.appendChild(taskCardTitleHTML)
        taskCardHTML.appendChild(taskCardButtonHTML)
        
        taskListHTML.appendChild(taskCardHTML)

    }
}


let addTaskButtonHTML = document.getElementById("addTaskButton")
addTaskButtonHTML.addEventListener("click", function(){

    //PART 1a

    //Select the "taskTitleInput" element and save to variable called taskTitleInputHTML

    let taskTitleInputHTML = document.getElementById("taskTitleInput");


    //access the value property on taskTitleInputHTML and save the result to a new a variable called newTaskTitle 
    let newTaskTitle = taskTitleInputHTML.value
    console.log(newTaskTitle)

    //PART 1b

    //Select the "taskPriority" element and save to variable called taskPriorityHTML

    let taskPriorityHTML = document.getElementById("taskPriority")

    //access the value property on taskPriorityHTML and save the result to a new a variable called newTaskPriority

    let newTaskPriority = taskPriorityHTML.value
    console.log(newTaskPriority)


    
    
    // What happens if you uncomment these 3 lines👇

    let newTask = {title: newTaskTitle, priority: newTaskPriority }
    tasks.push(newTask)
    renderTaskCards(tasks)
})





renderTaskCards(tasks)