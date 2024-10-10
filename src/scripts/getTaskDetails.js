document.getElementById("task-form").addEventListener("submit", (element) => {
    element.preventDefault();

    const title = document.getElementById("task-title");
    const description = document.getElementById("task-description");
    const dueDate = document.getElementById("task-due-date");
    const project = document.getElementById("task-project");
    const high = document.getElementById("high");
    const medium = document.getElementById("medium");
    const low = document.getElementById("low");
    const notes = document.getElementById("task-notes");

    console.log(
        title.value,
        description.value,
        dueDate.value,
        project.value,
        high.value,
        medium.value,
        low.value,
        notes.value
    );
});
