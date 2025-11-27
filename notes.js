let notes = [];
let editingIndex = -1;
let styles = {
  underline: false,
  bold: false,
  italic: false,
};

function loadNotes() {
  const savedNotes = localStorage.getItem("webNotes");
  if (savedNotes) {
    notes = JSON.parse(savedNotes);
    renderNotes();
  }
}

function saveNotes() {
  localStorage.setItem("webNotes", JSON.stringify(notes));
}

function openModal() {
  document.getElementById("noteModal").classList.add("active");
  editingIndex = -1;
  clearForm();
}

function closeModal() {
  document.getElementById("noteModal").classList.remove("active");
  clearForm();
}

function clearForm() {
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteDescription").value = "";
  document.getElementById("alert").classList.remove("show");
  styles = { underline: false, bold: false, italic: false };
  updateStyleButtons();
}

function toggleStyle(style) {
  styles[style] = !styles[style];
  updateStyleButtons();
}

function updateStyleButtons() {
  document
    .getElementById("underlineBtn")
    .classList.toggle("active", styles.underline);
  document.getElementById("boldBtn").classList.toggle("active", styles.bold);
  document
    .getElementById("italicBtn")
    .classList.toggle("active", styles.italic);
}

function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const description = document.getElementById("noteDescription").value.trim();

  if (!title || !description) {
    document.getElementById("alert").classList.add("show");
    return;
  }

  const note = {
    title,
    description,
    styles: { ...styles },
  };

  if (editingIndex === -1) {
    notes.push(note);
  } else {
    notes[editingIndex] = note;
  }

  saveNotes();
  renderNotes();
  closeModal();
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

function editNote(index) {
  editingIndex = index;
  const note = notes[index];

  document.getElementById("noteTitle").value = note.title;
  document.getElementById("noteDescription").value = note.description;
  styles = { ...note.styles };
  updateStyleButtons();

  document.getElementById("noteModal").classList.add("active");
}

function applyStyles(text, noteStyles) {
  let style = "";
  if (noteStyles.bold) style += "font-weight: bold; ";
  if (noteStyles.italic) style += "font-style: italic; ";
  if (noteStyles.underline) style += "text-decoration: underline; ";
  return style;
}

function renderNotes() {
  const grid = document.getElementById("notesGrid");
  const addCard = grid.querySelector(".add-note-card");

  grid.innerHTML = "";
  grid.appendChild(addCard);

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    const titleStyle = applyStyles(note.title, note.styles);
    const descStyle = applyStyles(note.description, note.styles);

    noteCard.innerHTML = `
                    <div class="note-header" style="${titleStyle}">${note.title}</div>
                    <div class="note-body" style="${descStyle}">${note.description}</div>
                    <div class="note-actions">
                        <button class="note-btn edit-btn" onclick="editNote(${index})">Edit</button>
                        <button class="note-btn delete-btn" onclick="deleteNote(${index})">Delete</button>
                    </div>
                `;

    grid.appendChild(noteCard);
  });
}

document.getElementById("noteModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});
window.addEventListener("DOMContentLoaded", loadNotes);
