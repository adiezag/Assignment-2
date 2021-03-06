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
            // To change the color of the cell to the currently selected color
            col.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
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
        // To change the color of the cell to the currently selected color
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }else {
        let numRows = grid.childElementCount;
        for (var j = 0; j < numRows; j++)
        {
            let col = document.createElement("td");
            // To change the color of the cell to the currently selected color
            col.onclick = function (){
                this.style.backgroundColor = colorSelected;
            };
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
    if (numRows === 0)
    {
        alert("No rows");
    } else {

    grid.removeChild(rows[numRows-1]);
    }
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
    let grid = document.getElementById("grid");
    let row = document.getElementsByTagName("tr")
    let col = document.getElementsByTagName("td")
    let numRows = grid.childElementCount;
    if (col.length === 0)
    {
        alert("No columns");
    } else if (col.length === row.length) // If there's one column, delete all rows
    {
        while(grid.firstChild)
        {
            grid.removeChild(grid.firstChild)
        }

    }else {
        for (var k = 0; k < numRows; k++)
        {
            let child = row[k].firstChild;
            row[k].removeChild(child);
        }
    }   

}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//Fills all cells
function fill(){
    alert("Clicked Fill All")
    let col = document.getElementsByTagName("td");
    for (let i = 0; i < col.length; i++)
    {
        col[i].style.backgroundColor = colorSelected;
    }
}

//Clears all cells
function clearAll(){
    alert("Clicked Clear All")
    let col = document.getElementsByTagName("td")
    console.log(col.length);
    for (let i = 0; i < col.length; i++)
    {
        col[i].style.backgroundColor = '';
    }
    
}

//Fills all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored")
    let col = document.getElementsByTagName("td")
    console.log(col.length);
    for (let i = 0; i < col.length; i++)
    {
        if (col[i].style.backgroundColor === '') {
            col[i].style.backgroundColor = colorSelected;
        }
    }
}