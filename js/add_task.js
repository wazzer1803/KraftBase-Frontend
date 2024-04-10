/**
 * declaring all required variables and arrays
 */
let tasks = [];
let users = [];
let subtaskIndex = 0;
let selectedUsers = []; 
let assignedUsers = [];
let assignInput, assignDropdown;


/**
 * initialize important functions after body loaded
 */
async function init() {
    await loadData();
    initAssignOnclick();
    setMinDate();
}


/**
 * fetch users and tasks data from server to global variables
 */
async function loadData() {
    try {
        tasks = JSON.parse(await getItem('tasks'));
        users = JSON.parse(await getItem('users'));
    } catch(e) {
        console.error('Loading Data error:', e);
    }
}


/**
 * push all input values to variable, then send POST request to server
 */
async function addTask() {
    loader('show');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const category = document.getElementById('category');
    tasks.push({
        title: title.value,
        description: description.value,
        assigned: getSelectedUsers(),
        dueDate: date.value,
        prio: modifyPrioString(),
        category: category.value,
        subtasks: getSubtasks(),
        status: "toDoStatus",
        id: tasks.length,
    });

    await setItem('tasks', JSON.stringify(tasks));
    resetForm();
    loader('remove');
    successTask();
}


/**
 * show/remove loader during loading of addTask() process
 * @param {string} action - stands for the action that is to be done
 */
function loader(action) {
    const loader = document.getElementById('loader');
    const overlay = document.getElementById('loader-overlay');

    if (action === 'show') {
        loader.classList.add('loader');
        overlay.classList.remove('d-none');
    } else if (action === 'remove') {
        loader.classList.remove('loader');
        overlay.classList.add('d-none');
    }
} 


/**
 * show success message for submitting the form, then forward to summary
 */
function successTask() {
    const successElement = document.getElementById('success-task');
    successElement.classList.remove('d-none');
    setTimeout(() => {
        window.open('board.html', '_self');
    }, 1500);
}


/**
 * reset all input fields and set whole form to default
 */
function resetForm() {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const category = document.getElementById('title');

    title.value = '';
    description.value = '';
    resetSelectedUsers();
    date.value = '';
    resetPrioButton();
    category.value = '';
    resetSubtasks(); 
    resetCategory();
    removeInitials();
}


/**
 * empty selectedUsers, assignedUsers array and remove highlighting of selected user in dropdown menu
 */
function resetSelectedUsers() {
    selectedUsers = [];
    assignedUsers = [];
    const usersDiv = document.querySelectorAll('.assign-contact');
    assignDropdown = document.getElementById('assign-content');
    assignInput = document.getElementById('assign');
    closeAssignDropdown();

    for (const userDiv of usersDiv) {
        if (userDiv.classList.contains('assign-contact-selected'))
        userDiv.classList.remove('assign-contact-selected');
        userDiv.children[1].innerHTML = `
            <svg class="assign-square-icon"><use href="assets/img/icons.svg#square-icon"></use></svg>
        `;
    }
}


/**
 * unselect selected prio buttons
 */
function resetPrioButton() {
    const lowButton = document.getElementById('low-btn');
    const mediumButton = document.getElementById('medium-btn');
    const urgentButton = document.getElementById('urgent-btn');
    const buttons = [lowButton, mediumButton, urgentButton];

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if (button.className.includes('active')) {
            button.classList.remove(`${button.id}-active`);
            document.querySelector(`.task-form-${button.id.split('-')[0]}-icon`).classList.remove('f-white');
        }
    }
}


/**
 * remove existing subtasks and set global variable to 0
 */
function resetSubtasks() {
    subtaskIndex = 0;
    const subtasksItems = document.querySelectorAll('.subtask-item');
    for (const subtaskItem of subtasksItems) {
        subtaskItem.remove();
    }
}


/**
 * set category input value to default
 */
function resetCategory() {
    const categoryInputField = document.getElementById('category');
    categoryInputField.value = 'Select task category';
    closeCategoryDropdown();
}


/**
 * remove existing initials
 */
 function removeInitials() {
    const initialsContainer = document.getElementById('initials-container');
    if (initialsContainer) {
        initialsContainer.remove();
    }
}


/**
 * select the clicked button and unselect other buttons if any
 * @param {string} buttonID - id of the selected button is passed
 */
function selectPrioButton(buttonID) {
    const selectedButton = document.getElementById(buttonID);
    const lowButton = document.getElementById('low-btn');
    const mediumButton = document.getElementById('medium-btn');
    const urgentButton = document.getElementById('urgent-btn');
    const buttons = [lowButton, mediumButton, urgentButton];

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if (button !== selectedButton) {
            button.classList.remove(`${button.id}-active`);
            document.querySelector(`.task-form-${button.id.split('-')[0]}-icon`).classList.remove('f-white');
        }
    }

    selectedButton.classList.toggle(`${buttonID}-active`);
    document.querySelector(`.task-form-${buttonID.split('-')[0]}-icon`).classList.toggle('f-white');
}


/**
 * the min date attribute for the date input is set after body onload
 */
function setMinDate() {
    const dateField = document.getElementById('date');
    const date = new Date();
    const dateFormated = date.toISOString().split('T')[0];
    dateField.min = dateFormated;
}


/**
 * add the value of input field as a subtask beneath input field
 */
function addSubtask() {
    const subtasksContainer = document.getElementById('subtasks-container');
    const subtaskField = document.getElementById('subtasks');

    if (subtaskField.value) {
        subtasksContainer.innerHTML += subtaskHTML(subtaskField.value, subtaskIndex);
        subtaskIndex++;
        subtaskField.value = '';
    }
}


/**
 * edit/stop editing the text content of the added subtask and render the icons
 * @param {number} index - index of the clicked subtask is passed
 * @param {string} action - stands for the action that is to be done
 */
function editSubtask(index, action) {
    const subtaskSpan = document.getElementById(`subtask-input${index}`);

    if (action === 'start') {
        if (!subtaskSpan.isContentEditable) {
            subtaskSpan.contentEditable = true;
            subtaskSpan.focus();
            document.getElementById(`subtask-icons${index}`).innerHTML = subtaskEditHTML(index);
        }
    } else if (action === 'stop') {
        if (subtaskSpan.isContentEditable) {
            subtaskSpan.contentEditable = false;
            document.getElementById(`subtask-icons${index}`).innerHTML = subtaskEditDefaultHTML(index);
        }
    }
}


/**
 * remove the created subtask
 * @param {number} index - index of the clicked subtask is passed
 */
function deleteSubtask(index) {
    const subtaskItem = document.getElementById(`subtask-item${index}`);
    subtaskItem.remove();
}


/**
 * check if any button is selected if so return the button id otherwise return null
 * @returns - either the selected button id or null
 */
function getPrioButton() {
    const urgentButton = document.getElementById('urgent-btn');
    const mediumButton = document.getElementById('medium-btn');
    const lowButton = document.getElementById('low-btn');
    const buttons = [lowButton, mediumButton, urgentButton];

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const buttonClassName = button.className; 
        if (buttonClassName.includes('active')) {
            return button.id;
        }
    }
    return null;
}


/**
 * returns an array with all the selected users
 * @returns array
 */
function getSelectedUsers() {
    return assignedUsers;
}


/**
 * returns array containing objects with the subtasks if any subtasks exists
 * @returns an array
 */
function getSubtasks() {
    const subtaskInputList = document.querySelectorAll('.subtask-input');
    const subtasks = [];

    for (let i = 0; i < subtaskInputList.length; i++) {
        let newSubtask = {
            taskDescription: subtaskInputList[i].innerText,
            isDone: false,
          };
          subtasks.push(newSubtask);
    }
    return subtasks;
}


/**
 * returns the priority description of selected button deleting '-btn' or null
 * @returns string with name of selected button or null
 */
function modifyPrioString () {
    let prio = getPrioButton();
    if (prio) {
        let modifiedPrio = prio.slice(0, -4);
        modifiedPrio = modifiedPrio.charAt(0).toUpperCase() + modifiedPrio.slice(1);
        return modifiedPrio;
    } else {
        return prio;
    }
}