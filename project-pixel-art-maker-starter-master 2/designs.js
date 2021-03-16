// Select color input --> done
// Select size input --> done

const getTable = () => document.getElementById("pixelCanvas");
const getColorPicker = () => document.getElementById("colorPicker");
const getTableCells = () => document.getElementsByClassName('cell');
const getTableHeightInput = () => document.getElementById('inputHeight').value;
const getTableWidthInput = () => document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
const makeGrid = (height, width) => { //makeGrid function definition of parameters
  createGrid(height, width);
  addClickEventToCells(); //const call
}

const createGrid = (height, width) => {
  const table = getTable();
  table.innerHTML=''; // innerHTML Property referring to the DOM
  for (let i = 0; i < height; i++) { //loop for input
    const row = table.insertRow();
    for (let j = 0; j < width; j++) { //for loop defining the incert cell method
      const cell = row.insertCell(); //insert cell method
      cell.className = "cell"; //definition of the cell class
    }
  }
}

const onCellClick = event => { //the event function
     const clickedCell = event.target;  // the event call is a users-click documented in the DOM
     clickedCell.style.backgroundColor = colorPicker.value; //style backgroundcolor
     clickedCell.innerHTML= ' :)'; // when the clickedCell event gets called, it calls the dom accordingly
     console.log(clickedCell.innerHTML);
 }

const addClickEventToCells = () => { // add click events to all cells
    const colorPicker = getColorPicker(); //allows user to choose color
    const cells = getTableCells(); //retreives the cell from the cell class
    Array.from(cells).forEach(cell => {
      cell.addEventListener("click", onCellClick);
    })
}

document.getElementById('sizePicker').onsubmit = () => { //this determines the selection of a user
    event.preventDefault();
    const height = getTableHeightInput(); //height input
    const width = getTableWidthInput(); //width input
    makeGrid(height, width); //height and width selection
}; //without this, the user input would be null

makeGrid(3,3); //a pre-existing grid, that users can already interact with
