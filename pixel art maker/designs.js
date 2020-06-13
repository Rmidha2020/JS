function makeGrid() {
    //This counts the number of pixels that have had colour added to them
    let colcount = 0;
    //This creates an array of all the <td> elements
    let tds = [];
    button = document.querySelector("#submit");
    form = document.querySelector("#sizePicker");

    color = document.querySelector("#colorPicker");
    cellcolor = color.value;

    table = document.querySelector("#pixelCanvas");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        //If a child element has not been added to table
        if (table.childElementCount === 0) {

            height = document.querySelector("#inputHeight");
            width = document.querySelector("#inputWidth");
            //defines the table body element
            tbod = dimensions(height.value, width.value);
            //adds the  table body to the child
            table.appendChild(tbod);
            //allows the cells to be coloured

        }
        //What happens if there is a child element as in the tbody has been appended
        else {
            //if colocount>0 as in the grid has been coloured
            tbod.parentNode.removeChild(tbod)
            height = document.querySelector("#inputHeight");
            width = document.querySelector("#inputWidth");
            //defines the table body element
            tbod = dimensions(height.value, width.value);
            //adds the  table body to the child
            table.appendChild(tbod);
            //allows the cells to be coloured


              }
    });

    function dimensions(height, width) {
        //create the tbody which will hold all the other elements
        let tbody = document.createElement("tbody");
        for (let i = 0; i < height; i++) {
            //creates a row
            let tr = document.createElement("tr");
            //populates the row with cells
            for (let j = 0; j < width; j++) {
                let td = document.createElement("td");
                td.addEventListener("click", function(e) {
                    e.target.style.backgroundColor = color.value;
                });
                tr.appendChild(td);
                tds.push(td);
            }
            //adds the populated row to the tbody
            tbody.appendChild(tr);
        }
        return tbody;
    }

}

makeGrid()
