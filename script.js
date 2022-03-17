let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);

    }
    else{
        let row = document.createElement("tr");
        let numCols = rows[0].childElementCount;
        for (var i = 0; i < numCols; i++)
        {
            let col = document.createElement("td");
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let grid = document.getElementById("grid");
    let cols = document.getElementsByTagName("td");
    let rows = document.getElementsByTagName("tr");
    console.log(cols.length); 
    if (cols.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        row.appendChild(col);
        grid.appendChild(row);
    }else {
        let numRows = grid.childElementCount;
        for (var j = 0; j < numRows; j++)
        {
            let col = document.createElement("td");
            rows[j].appendChild(col);
        }
    }
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    let numRows = grid.childElementCount;
    grid.removeChild(rows[numRows-1]);
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}