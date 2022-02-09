/*
  Students Tasks:
  [1] Use Sweet Alert If Input Is Empty//
  [2] Check If Task Is Exist
  [3] Create Delete All Tasks Button
  [4] Create Finish All Tasks Button
  [5] Add The Tasks To The Local Storage
*/

// Setting Up Variables


// import 'sweetalert2/src/sweetalert2.scss';
let theInput = document.querySelector(".add-task input");//  input
let theAddButton = document.querySelector(".add-task .plus"); // add button
let tasksContainer = document.querySelector(".tasks-content");// task li btezhar fi text el maktube
let tasksCount = document.querySelector(".tasks-count span");// li bt3ed tasks
let tasksCompleted = document.querySelector(".tasks-completed span"); // li bt3ed tasks mashtube (line-thr)

// Focus On Input Field
window.onload = function () {
    theInput.focus();
};

// Adding The Task
theAddButton.onclick = function () {

    // If Input is Empty
    if (theInput.value === '') {
        Swal.fire(
            'Please Enter Something!',

        )



    } else {

        let noTasksMsg = document.querySelector(".no-tasks-message");
        //<span class="no-tasks-message">No Tasks To Show</span>

        // Check If Span With No Tasks Message Is Exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            // Remove No Tasks Message
            noTasksMsg.remove();

        }


        //  if () {

        //  }


        // Create Main Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteElement = document.createElement("span");

        // Create The Main Span Text
        let text = document.createTextNode(theInput.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("Delete");

        // Add Text To Main Span
        mainSpan.appendChild(text);

        // Add Class To Main Span
        mainSpan.className = 'task-box';

        // Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button
        deleteElement.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);


        // Add The Task To The Container
        tasksContainer.appendChild(mainSpan);

        addItem();

        // localStorage.setItem('myCat', [theInput.value]);

        // Empty The Input
        theInput.value = '';


        // Focus On Field
        theInput.focus();

        // Calculate Tasks
        calculateTasks();
        // console.log(document.querySelectorAll('.tasks-content .task-box'));

        var mvp = Array.from(document.querySelectorAll('.tasks-content .task-box'));


        // console.log(mvp.childNodes);
        // for (let i = 0; i < mvp.length; i++) {
        //     var box = mvp[i].firstChild.data;



        //     // console.log(box);


        // }
        // console.log(box);

        // console.log(box);




        // hasDuplicates(mvp);
        // console.log(hasDuplicates(mvp));


        // console.log(mvp[0].firstChild.data);
        // console.log(mvp[1].firstChild.data);
        // if (mvp.length > 1) {
        //     for (let i = 0; i < mvp.length; i++) {

        //         for (let j = 1; j < mvp.length; j++) {
        //             if (mvp[i].firstChild.data === mvp[j].firstChild.data) {
        //                 Swal.fire(
        //                     'Task Is Exist!',

        //                 )
        //             }
        //         }


        //     }
        // }






        // if (mvp[0].firstChild.data === mvp[1].firstChild.data) {
        //     console.log("good");
        // }





    }

};


document.addEventListener('click', function (e) {

    // Delete Task
    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();

        // Check Number Of Tasks Inside The Container
        if (tasksContainer.childElementCount == 0) {

            createNoTasks();

        }

    }

    // Finish Task
    if (e.target.classList.contains('task-box')) {

        // Toggle Class 'finished'
        e.target.classList.toggle("finished");

    }

    // Calculate Tasks
    calculateTasks();


});

// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");

    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);

    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';

    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);

}

// Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;



}

// var c = ["ali", "sami", "ahmad", "ali"]

// function hasDuplicates(array) {
//     return (new Set(array)).size !== array.length;
// }
// hasDuplicates(c);
// console.log(hasDuplicates(c));


// var deleleto = document.getElementById("del");

// deleleto.onclick = function () {
//     // document.querySelector(".task-box").outerHTML = "";
//     // console.log(document.querySelectorAll(".task-box"));
//     // document.querySelector(".tasks-content").childNodes
//     // childElementCount;

// }


document.getElementById("del").onclick = function () {
    var node = document.getElementById("no");
    node.parentNode.removeChild(node);
    location.reload();


}

document.getElementById("fin").onclick = function () {


    var node = document.querySelector(".task-box");

    // node.parentNode.removeChild(node);


    node.parentNode.classList.add("showOverlay");
    // node.parentNode.classList.remove("showOverlay");
    // document.querySelector(".no-tasks-message").classList.add("ho");
    console.log(document.querySelector(".no-tasks-message"));


    setInterval(() => {
        location.reload();
    }, 2000);

    // var node = document.getElementById("no");


}
/////////////////////////////////////////////////
//////////////////////////////////////



// items array that contains all todo items
// JSON.parse is used to parse the stringified items from localStorage
// if localStorage is empty, make the items variable an empty array
var items = JSON.parse(localStorage.getItem('todo-list')) || [];

// function to add item to the items array
function addItem() {
    // get the value of the input box with querySelector
    var inputBox = document.querySelector('#todo-input');
    var item = inputBox.value

    // If input box is empty, return and alert the user
    // You can also do some more validation if here if you want
    if (item === "")
        return alert("You need to put in a number");

    // If input is valid, add item to items array
    items.push({
        value: item,
        time: (new Date()).toLocaleDateString("en-US")
    })

    // then convert to a string with JSON.stringify and save to localStorage
    localStorage.setItem('todo-list', JSON.stringify(items));

    // call function to list all items
    // listItems();

    // clear input box
    inputBox.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
// function deleteItem(index) {
//     items.splice(index, 1);
//     localStorage.setItem('todo-list', JSON.stringify(items))
//     listItems();
// }

function markAsDone(index) {
    items[index].done = !items[index].done;
    localStorage.setItem('todo-list', JSON.stringify(items));
    // listItems();
}


// // function that generates list of items and populates the html
// function listItems() {
//     var list = "";
//     for (var i = 0; i < items.length; i++) {
//         list += "<li class=" + (items[i].done ? "done" : "") + ">";
//         list += items[i].value + " ";
//         list += "<small title='click me to mark as done' class='label' onclick='markAsDone(" + i + ")'>" + items[i].time + "</small> ";
//         list += "<span class='label alert' onclick='deleteItem(" + i + ")'>delete</span></li>";

//     }
//     document.querySelector("#list-items").innerHTML = list;
// }

// // function to run when page loads
// (function () {
//     listItems();
// })();   