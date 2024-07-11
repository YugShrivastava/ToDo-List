//title, description, dueDate, priority, notes, checklist

export default class todoConstructor{
    constructor(title, description, dueDate, priority, notes, checkMark){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkMark = checkMark;
        this.checkList = checkList;
    }

    priorityToggle(priority){
        this.priority = priority;
    }
    checkMarkToggle(checkMark){
        this.checkMark = checkMark;
    }
    checkListToggle(checkList, number){
        checkList[number] = checkList;
    }
}
