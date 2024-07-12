const addTaskButton = document.querySelector(".add-task");

function clearValue(tag){
    tag.value = "";
}

function clearAddTaskDialog() {
    document.querySelector("#task-title").value = "";
    document.querySelector("#task-description").value = "";
    document.querySelector("#task-due-date").value = "";
    document.querySelector("#task-notes").value = "";
    document.querySelector("#high").checked = false;
    document.querySelector("#medium").checked = false;
    document.querySelector("#low").checked = false;
}

function submitAddTaskDialog(){
    //Code For Submit Button in the task-dialog
}

function resetAddTaskDialog(){
    //Code For Reset Button in the task-dialog
}

const taskDialog = document.createElement("dialog");
taskDialog.setAttribute("id", "task-dialog");
taskDialog.innerHTML = `<form action="" id="task-form">
                <div class="left-task-dialog">
                    <div id="title-div">
                        <label class="task-label" for="title">Title</label
                        ><input
                            name="title"
                            placeholder="Task"
                            id="task-title"
                            type="text"
                        />
                    </div>
                    <div id="description-div">
                        <label class="task-label" for="description"
                            >Description</label
                        ><textarea
                            name="description"
                            id="task-description"
                            placeholder="Description of the task!"
                        ></textarea>
                    </div>
                    <div id="due-date-div">
                        <label class="task-label" for="due-date">Due Date</label
                        ><input
                            type="date"
                            name="due-date"
                            id="task-due-date"
                        />
                    </div>
                </div>
                <div class="right-task-dialog">
                    <div id="project-div">
                        <label class="task-label" for="project">Project</label
                        ><select name="project" id="task-project">
                            <option value="default">Default</option>
                        </select>
                    </div>
                    <div id="task-priority">
                        <label class="task-label" for="priority"
                            >Priority -:</label
                        >
                        <div>
                            <div>
                                <input type="radio" name="priority" id="high" /><label
                                    for="high"
                                >High</label>
                            </div>
                            <div>
                                <input type="radio" name="priority" id="medium" /><label
                                    for="medium"
                                >Medium</label>
                            </div>
                            <div>
                                <input type="radio" name="priority" id="low" /><label
                                    for="low"
                                >Low</label>
                            </div>
                        </div>
                    </div>

                    <div id="notes-div">
                        <label class="task-label" for="">Notes</label
                        ><textarea name="notes" id="task-notes" placeholder="Notes for the task"></textarea>
                    </div>
                </div>
            </form>
            <svg id="close-add-task" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256s256-114.842,256-256S397.16,0,256,0z M256,462.452 c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548S462.452,142.163,462.452,256S369.837,462.452,256,462.452z "></path> </g> </g> <g> <g> <polygon points="355.269,191.767 320.233,156.731 256,220.964 191.767,156.731 156.731,191.767 220.964,256 156.731,320.233 191.767,355.269 256,291.036 320.233,355.269 355.269,320.233 291.036,256 "></polygon> </g> </g> </g></svg>`;
document.body.appendChild(taskDialog);

addTaskButton.addEventListener("click", () => {
    taskDialog.showModal();
    const svgCloseButton = document.querySelector("#close-add-task");

    svgCloseButton.addEventListener("click", () => {
        taskDialog.close();
        clearAddTaskDialog();
    });
});
