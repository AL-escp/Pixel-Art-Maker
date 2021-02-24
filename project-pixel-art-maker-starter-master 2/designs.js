
// Select color input --> done
// Select size input--> done

// When size is submitted by the user, call makeGrid() --> tested and works

// gets values for height and width from form and uses them to call makrGrid()

function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value; //definition of the height
    const width = document.getElementById('inputWidth').value;//definition of the width
    makeGrid(height, width); //call the make grid
}

// add click events to all cells
function addClickEventToCells() {
    //  color selection return --> above
    const colorPicker = document.getElementById("colorPicker"); //allow people to pick the color for the boxes
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) { //got loop of Listener
        cells[i].addEventListener("click", function (event) { //listener addition, for noe command
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }


//makeGrid function
function makeGrid(height, width) { //attributes requered
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop over each row
    for (let i = 0; i < height; i++) { //loop the actioms accordingly
        grid += '<tr class="row-' + i + '">';
        // loop for each cell - be careful with sequence of for look
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>'; // //row of cell
    }
    // grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created. This is very important
    addClickEventToCells();
}

// on submit of form #sizePicker --> this is what was above
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission(); //submit button
};

//default grid, this varilbe can be change accordingly in the code. In this casw 5x5
makeGrid(5, 5);
