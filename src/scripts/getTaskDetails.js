function getTaskObj() {
    const title = document.getElementById("task-title");
    const description = document.getElementById("task-description");
    const dueDate = document.getElementById("task-due-date");
    const project = document.getElementById("task-project");
    const priority = document.getElementsByName("priority");
    const notes = document.getElementById("task-notes");
    let index;
    for(let i = 0; i < priority.length; i++){
        if(priority[i].checked){
            index = i;
            break;}
    }

    const obj = {
        title: title.value,
        description: description.value,
        dueDate: dueDate.value,
        project: project.value,
        priority: priority[index].value,
        notes: notes.value,
    }
    return obj;
}

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}

function populateStorage(obj){
    sessionStorage.setItem("tasks", obj); 
}
document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = getTaskObj();

    if(storageAvailable(sessionStorage)){
        if(sessionStorage.getItem("tasks") == null) populateStorage([newTask]);
        else{
            const allTasks = sessionStorage.getItem("tasks");
            allTasks[allTasks.length] = newTask;
            populateStorage(allTasks);
        }
    }


    const getTasks = JSON.parse(sessionStorage.getItem("tasks"))
    console.log(getTasks);
})
