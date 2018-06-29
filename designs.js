const grid = document.getElementById('submit');
const inputH = document.getElementById('inputHeight');
const inputW = document.getElementById('inputWidth');
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');
const clear = document.getElementById('clearGrid');

grid.addEventListener('click', function(e){
  
  table.innerHTML = "";
  
  makeGrid();

  e.preventDefault();
  
});

//Create Grid

function makeGrid() {
    
    for (let i = 0; i < inputH.value; i++) {
        let tr = table.insertRow(i);

        for(let j = 0; j < inputW.value; j++) {
            cell = tr.insertCell(j);

// adding color to cells from the color picker
            
            cell.addEventListener('click', function(e) {
              e.target.style.backgroundColor = color.value;
            });

// code to add an event listener of mouseover to add color to the grid cells

            // cell.addEventListener('mouseover', function(e) {
            //   e.target.style.backgroundColor = color.value;
            // });
        }
    }
}

// Clear Grid

clear.addEventListener('click', function(){
    table.innerHTML = "";
});