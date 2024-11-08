const notesApp = document.querySelector(".notesApp");
const addNotebtn = document.querySelector(".addNotebtn");
const noteWindow = document.querySelector(".noteWindow");
const addBtn = document.querySelector("#addBtn");
const deleteDiv = document.querySelector(".deleteDiv");
const deleteBtn = document.querySelector(".deleteBtn");


addNotebtn.addEventListener(
  "click",
  () => {
    noteWindow.classList.toggle("hideUI");
  },
  true
);

addBtn.addEventListener("click", () => {
    const title = document.querySelector(".noteWindow input[type='text']").value;
    const description = document.querySelector("#Description").value;
    if(title ==="" || description === ""){
        // alert("Please input Title and description");
        document.querySelector(".alert").classList.toggle("hideUI");
      }else{
        noteWindow.classList.toggle("hideUI");
        addNoteDiv();
    }
}, true);


deleteBtn.addEventListener("click",() => {
  deleteDiv.remove();
},true
);


const closeBtn = document.querySelector(".closeBtn").addEventListener("click",()=>{
  noteWindow.classList.toggle("hideUI")
});


function addNoteDiv(){
  const title = document.querySelector(".noteWindow input[type='text']").value;
  const description = document.querySelector("#Description").value;
  
  
  const newNote = document.createElement("div");
  newNote.classList.add("yourNote","deleteDiv");
  
  
  
  const titleElement = document.createElement("h6");
  titleElement.textContent=title;
  newNote.appendChild(titleElement);
  
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent=description;
  newNote.appendChild(descriptionElement);
  
  notesApp.appendChild(newNote);
  
  
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.innerHTML = `<i class="bi bi-trash deleteBtn">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg>
  </i>
  Delete`;
  newNote.appendChild(deleteButton);
  notesApp.appendChild(newNote);
  
  document.querySelector(".noteWindow input[type='text']").value = "";
  document.querySelector("#Description").value = "";
  
  deleteButton.addEventListener("click",()=>{
    newNote.remove();   
  },true) 
}




//------------------------------------------------------------------------------------------

// addBtn.addEventListener( "click",() => {
//     noteWindow.classList.toggle("hideUI");
//     addNoteDiv();
//   },true
// );
// const newNote = document.createElement("div");
// newNote.classList.add("yourNote", "deleteDiv");

//----------------------------------------------------------
// const notesApp = document.querySelector(".notesApp");
// const addNotebtn = document.querySelector(".addNotebtn");
// const noteWindow = document.querySelector(".noteWindow");
// const addBtn = document.querySelector("#addBtn");

// // Toggle visibility of the note input window
// addNotebtn.addEventListener("click", () => {
//     noteWindow.classList.toggle("hideUI");
// }, true);

// // Function to add a new note
// function addNoteDiv() {
//     const title = document.querySelector(".noteWindow input[type='text']").value;
//     const description = document.querySelector("#Description").value;

//     // Create new note div
//     const newNote = document.createElement("div");
//     newNote.classList.add("yourNote", "deleteDiv");

//     // Create and append title element
//     const titleElement = document.createElement("h6");
//     titleElement.textContent = title;
//     newNote.appendChild(titleElement);

//     // Create and append description element
//     const descriptionElement = document.createElement("p");
//     descriptionElement.textContent = description;
//     newNote.appendChild(descriptionElement);

//     // Create and append delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("deleteBtn");
//     deleteButton.innerHTML = `
//       <i class="bi bi-trash deleteBtn">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
//           <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
//         </svg>
//       </i> Delete`;
//     newNote.appendChild(deleteButton);

//     // Append the new note to the notesApp container
//     notesApp.appendChild(newNote);

//     // Clear the input fields
//     document.querySelector(".noteWindow input[type='text']").value = "";
//     document.querySelector("#Description").value = "";

//     // Add event listener to delete button
//     deleteButton.addEventListener("click", () => {
//         newNote.remove();
//     }, true);
// }

// // Add note when clicking addBtn
// addBtn.addEventListener("click", () => {
//     noteWindow.classList.toggle("hideUI");
//     addNoteDiv();
// }, true);
