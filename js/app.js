"use strict";
//------------------------------------------------------------------------------
// Creation div to containt H1
//------------------------------------------------------------------------------
const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.flex;
wrapper.id = "wrapper";
//------------------------------------------------------------------------------
// Creation the H1 when you creat the elemet
//------------------------------------------------------------------------------
const titleH1 = document.createElement("h1");
titleH1.innerHTML = "School-Students";
titleH1.id = "tittle-h1";
titleH1.style.textAlign = "center";
wrapper.appendChild(titleH1);
//------------------------------------------------------------------------------
// Creation the table students
//------------------------------------------------------------------------------
const studentsTable = createTable();
const tableHead = createTableHeader();
console.log(tableHead.cells[0]);
//------------------------------------------------------------------------------
// global functions
//------------------------------------------------------------------------------
function createTableHeader() {
    const tableHead = document.createElement("tr");
    studentsTable.appendChild(tableHead);
    for (let i = 0; i <= 4; i++) {
        tableHead.insertCell(i);
        const tableHeadCell = tableHead.cells[i];
        switch (i) {
            case 0:
                tableHeadCell.textContent = "Id";
                break;
            case 1:
                tableHeadCell.textContent = "Name";
                break;
            case 2:
                tableHeadCell.textContent = "Last Name";
                break;
            case 3:
                tableHeadCell.textContent = "Age";
                break;
            case 4:
                tableHeadCell.textContent = "Sex";
                break;
        }
    }
    return tableHead;
}
function createTable() {
    const studentsTable = document.createElement("table");
    studentsTable.id = "students-table";
    wrapper.appendChild(studentsTable);
    return studentsTable;
}
