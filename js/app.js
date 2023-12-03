"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//------------------------------------------------------------------------------
// DOM manipulations
//------------------------------------------------------------------------------
const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.flex;
wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";
wrapper.style.paddingLeft = "100px";
wrapper.style.paddingRight = "100px";
wrapper.id = "wrapper";
const titleH1 = document.createElement("h1");
titleH1.innerHTML = "School-Students";
titleH1.id = "tittle-h1";
titleH1.style.textAlign = "center";
wrapper.appendChild(titleH1);
//------------------------------------------------------------------------------
// classes / interfaces
//------------------------------------------------------------------------------
class Student {
    //constructor to inicialize the properties
    constructor(id, firstName, lastName, age, sex) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
    }
    // instance function
    getId() {
        return this.id;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getAge() {
        return this.age;
    }
    getSex() {
        return this.sex;
    }
}
//------------------------------------------------------------------------------
// Creation the table students (ASYNC)
//------------------------------------------------------------------------------
const studentsPromise = getFromDataBase("/students");
studentsPromise.then((data) => {
    // manage data received parsed in TS
    // parse data that is object[] => Student[]
    console.log(data);
    console.log("Data length:", data.length);
    let students = [];
    for (let i = 0; i < data.length; i++) {
        const student = new Student(data[i].id, data[i].firstName, data[i].lastName, data[i].age, data[i].sex);
        students.push(student);
    }
    console.log("data:", students);
    const studentsTable = createTable();
    createTableHeader(studentsTable, students);
    createTableBody(studentsTable, students);
});
//------------------------------------------------------------------------------
// global functions
//------------------------------------------------------------------------------
function createTable() {
    const table = document.createElement("table");
    table.style.margin = "auto";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.backgroundColor = "lightgrey";
    table.style.border = "1px solid black";
    table.id = "students-table";
    wrapper.appendChild(table);
    return table;
}
function createTableHeader(table, students) {
    const tableHead = document.createElement("tr");
    table.appendChild(tableHead);
    for (let i = 0; i <= 4; i++) {
        tableHead.insertCell(i);
        const tableHeadCell = tableHead.cells[i];
        tableHeadCell.style.border = "3px solide black";
        tableHeadCell.style.padding = "4px";
        tableHeadCell.style.backgroundColor = "grey";
        tableHeadCell.style.fontWeight = "bolder";
        tableHeadCell.style.border = "1px solid black";
        tableHeadCell.style.textAlign = "center";
        switch (i) {
            case 0:
                tableHeadCell.textContent = "Id";
                break;
            case 1:
                tableHeadCell.textContent = "First Name";
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
}
function createTableBody(table, students) {
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j <= 4; j++) {
            row.insertCell(j);
            const tableCell = row.cells[j];
            tableCell.textContent = "Michelle";
            tableCell.style.border = "1px solid black";
            tableCell.style.padding = "4px";
            tableCell.style.textAlign = "center";
        }
        table.appendChild(row);
    }
}
//------------------------------------------------------------------------------
// async functions
//------------------------------------------------------------------------------
function getFromDataBase(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:8000${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Fetch error:", error);
            throw error; // Rethrow the error if necessary
        }
    });
}
