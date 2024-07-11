const dialog = document.querySelector("dialog");
const addTask = document.querySelector("#task-dialog");
dialog.addEventListener('click', () => {
    addTask.showModal();

})