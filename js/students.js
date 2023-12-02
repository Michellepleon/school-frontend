"use strict";
//------------------------------------------------------------------------------
// Creation div to containt H1
//------------------------------------------------------------------------------
const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.id = "wrapper";
//------------------------------------------------------------------------------
// Creation the H1 when you creat the elemet
//------------------------------------------------------------------------------
const titleH1 = document.createElement("h1");
titleH1.innerHTML = "School-Students";
titleH1.id = "tittle-h1";
titleH1.style.textAlign = "center";
wrapper.appendChild(titleH1);
const tableContainer = document.getElementById("tableContainer");
const data = [
    { id: 1, name: 'Minou', lastName: 'Montpetit', age: 9 }
];
const studentsTable = document.createElement("table");
document.body.appendChild(studentsTable);
